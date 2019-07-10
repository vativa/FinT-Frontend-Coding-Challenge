## FinT-Frontend-Coding-Challenge

### WorldClockApp

The WorldClockApp is a vanilla JavaScript Node.js Application transpiled with Babel.js and bundled with Webpack.

The app laverages 2 components:
- autocomplete input with submit button
- rendering clock component with label on the left

At the beginning the user faces an empty input, and typing into it gives him the ability to add up to 5 different timezone clocks. Empty input, duplicates, or too long city names are prevented by internal validation. When the number of clocks exceeds the maximum of 5, the first clock in stack is being removed, giving room for the new one. This action appears as shifting of the items upwards.

Only two libraries have been used as regular dependencies:
- axios: api requests
- moment: parsing and formatting datetime

The following libraries are developer tools dependencies:
- babel: transpiling ES2015
- autoprefixer: (S)CSS processing
- clean-webpack-plugin: removing build folder
- copy-webpack-plugin: copying files to the build folder
- css-loader: (S)CSS processing
- file-loader: loading ttf file
- html-webpack-plugin: generating index.html
- jest: unit testing
- node-sass: (S)CSS processing
- path: providing paths for webpack config
- postcss-loader: (S)CSS processing
- precss: (S)CSS processing
- sass-loader: (S)CSS processing
- style-loader: (S)CSS processing
- webpack: project bundler
- webpack-cli: command line tools
- webpack-dev-server: development server

