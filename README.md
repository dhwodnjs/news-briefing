# Genie news briefing

## Installation

Please refer `setup.sh` for installation
- [setup.sh](setup.sh)
- [SETUP.md](SETUP.md) can help too

**Overview**

1. Install `nvm` and `node`
2. Install `npm`
3. Clone the repository
4. Install dependencies for the frontend
5. Make virtual environment for the backend
6. Install dependencies for the backend

## Run

**First**, set your genie labs api keys to the
`server/config.json`
```{
  "CLIENT_ID": "",
  "CLIENT_SECRET": "",
  "CLIENT_KEY": ""
}
```

After the setup, you can run the project with either
- `npm run start` with local server
- Direct access to the server

### Overview

Please refer `server.sh` for running the project. Implemented mac and linux auto run script.

- [server.sh](server.sh)

1. Check build folder inside `server/` if exist, remove it
2. Export IP address as environment variable and build the frontend
3. Copy files to the server
4. Export IP address to the server and run the server
5. Run uvicorn server

### Run with local server

- open another terminal and copy code from `frontend/sh`. It includes exporting IP address as environment variable and running the frontend

### Direct access to the server

- Access the URL uvicorn informs you

## Version

- Backend versions
  goto [server/requirments.txt](server/requirements.txt)
- Frontend versions
  goto [frontend/package.json](frontend/package.json)
