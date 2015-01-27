React Mocha Starter
===

Test your react components on the client and server

[![Build Status](https://travis-ci.org/kolodny/react-mocha-starter.svg?branch=master)](https://travis-ci.org/kolodny/react-mocha-starter)

Here's a basic workflow:

```bash
git clone https://github.com/kolodny/react-mocha-starter new-react-project
cd new-react-project
rm -rf .git/
git init
echo node_modules/ >> .gitignore
npm install
subl .

#later...
npm test
```