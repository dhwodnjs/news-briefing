if [[ $PWD != *"frontend"* ]]; then
    cd frontend
fi

cd frontend

case "$(uname -s)" in
    Darwin)
        # macOS specific commands
        REACT_APP_IP_ADDR=$(ipconfig getifaddr en0) npm run start
        ;;

    Linux)
        # Linux specific commands
        REACT_APP_IP_ADDR=$(ip addr | grep 'inet ' | grep -v '127.0.0.1' | grep -v 'docker0' | awk '{print $2}' | cut -d'/' -f1) npm run start
        ;;
esac
