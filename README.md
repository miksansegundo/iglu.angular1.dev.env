## Frameworks, Libraries, Tools

Babel ES2015 - Standard Style
AngularJS - Component-based App
UI Router - Bootstrap UI
CSS Modules & PostCSS - cssnext
NPM Scripts - Webpack - JSON Server
KARMA - Mocha - Chai - Chrome


## Work Done

- The app has a dummy authentication so you have to log in with any Username / Password
- In the home page you will find the **List Component**
- The app is compiled in the /build folder
- The sources are in the /src folder
- The test folder has an entry point but the specs are in each component folder
- There are two specs files with 21 unit test for the list and list-item components
- The List Component code is in the folder src/app/components/list
- It is composed by 5 sub-components:
	- list
		- list-item
			- metrics-box
			- build-box
			- test-box
			- result-box
- The List Service fetch the data from a JSON-Server mocked in db.json
- The JSON API Response is from the end-point at http://locahost:3000/list
- The List JSON data is editable to play with the component state
- The component features and behaviours are shown in the video


## How to Run

- Node.js & NPM installed in an UNIX based system are the prerequisites.
- The app is built but to view it first we will need to start the Static Server & JSON Server
- The package.json has all the commands available to run the development environment
- The dependencies node_modules are not included in this zip
- You will need to download and install them


### To quickly view the app from the build folder

- Run this command from the root of the Code folder to install the 3 dependencies:
```
	npm i http-server json-server concurrently
```
- When that finish run "npm start" and then open your browser in http://127.0.0.1:8080


### To run the test

- You will need to install all the dependencies running the next command:
```
 	npm i
```
- Then run "npm run test" and the report is shown in console


### To start the live development environment

- Run the command: "npm run build:dev" and open your browser in http://127.0.0.1:8080


### To build the app

- Run the command: "npm run build" and wait because the browser will be opened magically ;)


--
Best,

Miguel