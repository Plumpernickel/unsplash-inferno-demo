### This project was bootstrapped with the [create-inferno-app](https://github.com/infernojs/create-inferno-app) package. Please refer to the README linked above for any detailed configuration instructions.

Basic dependencies required for this project include:

[Node 8+ and NPM 5+](https://nodejs.org/en/)

Installation/Build Steps
=
1. After cloning this repository, run `npm install` inside the project directory.
2. Copy the local environment file and place it in the root of the directory: 

    `cp ./fixtures/kitchensink/.env.local .env`
3. Inside of your newly created `.env` file There are 3 environment variables whose keys follow the pattern of `INFERNO_APP_UNSPLASH_*`. Replace the placeholder values given next to them with the appropriate Unsplash Application values provided for you. This application is effectively useless without these credentials.
4. Run the development script `npm start`, it should automatically open a new window or tab in your default browser pointing to *localhost:3000* where the application is being served from.