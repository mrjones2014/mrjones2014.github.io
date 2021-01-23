#! /bin/bash

export NVM_DIR="$HOME/.nvm"
. $NVM_DIR/nvm.sh
nvm use 14.15.3
yarn install
yarn build
yarn export
