#!/bin/bash

# (1) Check if the directory contains "server"
if [[ $PWD != *"server"* ]]; then
    cd server
fi

if [[ -d "build" ]]; then
    echo "Build folder found. Removing build folder..."
    echo
    rm -rf build
fi

# (1-1) Check if the directory has folder named "build"
if [[ ! -d "build" ]]; then
    echo "Building frontend..."

    cd ../frontend;
    case "$(uname -s)" in
    Darwin)
        # macOS specific commands
        REACT_APP_IP_ADDR=$(ipconfig getifaddr en0) npm run build;
        ;;

    Linux)
        # Linux specific commands
        REACT_APP_IP_ADDR=$(ip addr | grep 'inet ' | grep -v '127.0.0.1' | grep -v 'docker0' | awk '{print $2}' | cut -d'/' -f1) npm run build;
        ;;
    esac
    
    echo "Build complete. Copying build folder to server..."
    echo

    cp -r build ../server/;
    echo "Copied build folder to server. Returning to server directory..."
    echo

    cd ../server;
fi

# (2) Activate the virtual environment

source venv/bin/activate

# (3-0) Check if jq is installed, if not, install it
if ! command -v jq &> /dev/null; then
    echo "jq could not be found."

    # Differentiate between macOS and Linux for jq installation
    case "$(uname -s)" in
        Darwin)
            # macOS specific commands for jq installation
            # Check if Homebrew is installed
            if ! command -v brew &> /dev/null; then
                echo "Homebrew not found. Installing Homebrew..."
                /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
            fi

            # Now install jq
            echo "Installing jq..."
            brew install jq
            ;;

        Linux)
            # Linux specific commands for jq installation (assuming apt for this example)
            sudo apt update
            sudo apt install jq
            ;;
    esac
else
    echo "jq is already installed."
fi

# (3-1) Parse config.json
while IFS="=" read -r key value; do
    # Removing double quotes from the key and value
    key=${key//\"/}
    value=${value//\"/}

    # Exporting the key-value pair as an environment variable
    export $key=$value
    echo "Exported: $key=$value"
done < <(jq -r 'to_entries[] | "\(.key)=\(.value)"' config.json)

# Determine IP address and run the server based on the OS
case "$(uname -s)" in
    Darwin)
        # macOS specific commands
        export REACT_APP_IP_ADDR=$(ipconfig getifaddr en0)
        echo "Exported IP_ADDR: $REACT_APP_IP_ADDR"
        uvicorn server:app --reload --host $REACT_APP_IP_ADDR
        ;;

    Linux)
        # Linux specific commands
        export REACT_APP_IP_ADDR=$(ip addr | grep 'inet ' | grep -v '127.0.0.1' | grep -v 'docker0' | awk '{print $2}' | cut -d'/' -f1)
        echo "Exported IP_ADDR: $REACT_APP_IP_ADDR"
        uvicorn server:app --reload --host $REACT_APP_IP_ADDR
        ;;
esac


### After server, npm run start