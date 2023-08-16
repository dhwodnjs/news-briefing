#!/bin/bash

# (1) Check if the directory contains "server"
if [[ $PWD != *"server"* ]]; then
    cd server
fi

# (2) Check if MongoDB is turned on, if not, turn it on
MONGO_STATUS=$(systemctl is-active mongod)

if [[ $MONGO_STATUS == "inactive" ]]; then
    sudo systemctl start mongod
fi

# Parse environment variables and run uvicorn
while IFS="=" read -r key value; do
    # Removing double quotes from the key and value
    key=$(echo $key | tr -d '"')
    value=$(echo $value | tr -d '"')

    # Exporting the key-value pair as an environment variable
    export $key=$value
    echo "Exported: $key=$value"
done < <(jq -r 'to_entries[] | "\(.key)=\(.value)"' config.json)

uvicorn server:app --reload --host $(ip addr | grep 'inet ' | grep -v '127.0.0.1' | grep -v 'docker0' | awk '{print $2}' | cut -d'/' -f1) 