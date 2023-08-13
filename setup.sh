#!/bin/bash

# Check if path argument provided
if [ "$1" != "--path" ] || [ -z "$2" ]; then
    echo "Usage: setup.sh --path path/to/clone"
    exit 1
fi

CLONE_PATH=$2

# Install nvm
echo "Installing nvm..."
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Source nvm to use it immediately
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# Install and use Node.js
echo "Installing and setting Node.js version..."
nvm install 18.12.0
nvm use 18.12.0

# Install npm
echo "Installing npm version..."
npm install -g npm@9.8.1

# Clone the repository
echo "Cloning repository..."
git clone https://github.com/orange-fritters/news-briefing "$CLONE_PATH"

# Change directory to frontend and install dependencies
echo "Installing project dependencies..."
cd "$CLONE_PATH/frontend"
npm install

echo "Setup complete!"
