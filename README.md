# sustainable-fisheries
Challenge #3 for the [Florida Hacks with IBM](https://floridahackswithibm.bemyapp.com/) project

## Developers
Member 1: Vince Duarte

Member 2: Jason Lusk

Member 3: Aadesh Thirukonda

Member 4: Kevin Tang

## Setup
### Dependencies

- Node.js
``` node -v ```

- Node Package Manager
``` npm -v ```

- Create the application
``` npx create-react-app sustainable-fisheries ```
NOTE: make sure npm is not installed globally in root directory or there will be an error with node_modules. There should be a relative local node_modules with the app.

if you haven't already, 
``` cd sustainable-fisheries && npm install ```

- Install MUI Elements
- ``` yarn add @material-ui/icons ```
- ``` yarn add @material-ui/core ```
- ``` yarn add fontsource-roboto ```



- Install [Routing](https://reactrouter.com/web/guides/quick-start)
``` yarn add react-router-dom ```

### Tutorial

- Start the app locally
``` cd sustainable-fisheries && yarn start ```

Setup the server configuration
``` npm install mongodb express cors dotenv ```

Update the config.env file with your credentials:
Replace ``` <username> ``` and ``` <password> ```

Install the nodemon module to run the server
``` sudo npm install -g nodemon ```
``` nodemon server ```
