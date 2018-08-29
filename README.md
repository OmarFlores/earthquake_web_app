# earthquake_web_app
Web App which reads the USGS daily data feed and display the earthquake events on a map

The structure of the project is the following:

The folder structure is as follows

```
earthquake_web_app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    charts/
    maps/
    ui-components/
    overflow/
    utils/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
    registerServiceWorker.js
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

For the FrontEnd Application, which was built within ReactJS. It needs to be done first the installation of Node.js:

https://nodejs.org/en/download/

and NPM package manager service

https://www.npmjs.com/get-npm

Then, execute the next command under the main folder "earthquake_web_app":

npm install

Finally, execute the following command again under the folder "earthquake_web_app":

nom start

Where the main URL is:

http://localhost:3000/

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
