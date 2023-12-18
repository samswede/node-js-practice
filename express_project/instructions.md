

## Install express
npm install express

# Install nodemon
npm install nodemon --save-dev

The --save-dev puts this under the 'dev dependencies',
which also indicates that this package is not needed for
production.

We need to add something to the package.json file too.

"scripts": {
    "watch": "nodemon server.js"
}

This will let us start a server and not have to restart
it on every change.

we can now call:
    npm run watch

and now we to restart, we just have to call:
    rs

