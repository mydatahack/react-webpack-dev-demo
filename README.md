# react-webpack-dev-demo
Example of setting up local React dev environment with webpack

## How to set up dev environment for React with Webpack 4 and Babel 7

Prerequisit
- nodejs & npm installation

# (1) Project setup

To use bootstrap as css, add bootstrap.min.css to the css folder.

```
Project
    - public
        - css
            - bootstrap.min.css
        - img
            - imagefile.png
        - index.html
    - source
        - client.js
    - package.json
    - webpack.config.js
```

Script to create project
```
mkdir webpack-dev-test
cd webpack-dev-test
mkdir css
mkdir img
touch index.html
mkdir source
cd source
touch client.js
cd ..
touch webpack.config.js
npm init -y
```

# (2) Package Installation

- Need to install dev dependency
- Polyfill runs before the source code, it needs to be a dependency not a devDependency.

installation for all packages
```
npm i --save-dev webpack@4.19.1 webpack-dev-server@3.1.8 webpack-cli@3.1.1
npm i --save-dev babel-loader@8.0.4 @babel/core@7.1.0 @babel/preset-env@7.1.0 @babel/preset-react@7.0.0
npm i --save @babel/polyfill@7.0.0
npm i --save react@16.5.2 react-dom@16.5.2
```

Installing from package.json
```
npm install
```

### (3) configure webpack-dev-server

webpack.config.js

Add mode: 'development'
Add entry for polyfill and the main javascript file. Polyfill gives greater support for browser that doesn't support ES5
Add output with absolute path for the project folder and filename as index.js.
Add module to include all javascript file and exclude node_modules folder.

```
module.exports = {
    mode: 'development',
    entry:['@babel/polyfill','./source/client.js'],
    output: {
        path: '<full path>/ReactNode/webpack-dev-test',
        filename: 'index.js'
    },
    devServer:{
        inline:true,
        contentBase:'./public',
        port:3000
    },
    module: {
        rules: [
            {test:/\.js$/,
             exclude:/node_modules/,
             loader:'babel-loader'
            }
        ]
    }
}
```

### (4) configure package.json

Add index.js to main
Add babel presets. @babel/preset-env compiles ES6 code down to ES5.
Add scripts to start web-dev-server with npm start.
```
{
  "name": "webpack-dev-test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "babel": {
    "presets": [
      "@babel/preset-react",
      "@babel/preset-env"
    ]
  },
  "scripts": {
    "start": "webpack-dev-server"
  },
  ...
```

### (5) Add html code to index.html

You can import css in the link tag in the head. The source javascript will be index.js.


### (6) Import React and ReactDom into client.js

