# React Environment

## Manual Setup

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
<!-- ⬆️ install nvm -->

nvm install 18.12.0
nvm use 18.12.0
<!-- ⬆️ determine the node version to use -->

npm install -g npm@9.8.1
<!-- ⬆️ install npm -->

git clone https://github.com/orange-fritters/news-briefing
cd frontend
npm install
<!-- ⬆️ install dependencies -->
```

## Automatic Setup

```sh
bash setup.sh --path path/to/clone
```

- `--path` is optional. If not specified, the script will clone the repository to the current directory.
- The script will install `nvm`, `node`, `npm`, and the dependencies for the frontend.
- If no bash is available, you can `chmod +x setup.sh` and run `./setup.sh --path path/to/clone` instead.
- EX. `zsh setup.sh --path /Users/choimindong/Desktop/Archive/Projects`
