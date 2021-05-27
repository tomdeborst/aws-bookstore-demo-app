#!/usr/bin/env bash
echo $(python3 StaticCheck.py)
if [ $(python3 StaticCheck.py) = 0 ]; then
      echo 'Config not present!'
      exit 2

fi
echo 'Config check passed!'
#npm install
npm run build
cd src __tests__
jest
cd ../../../
git add .
#$1 is first argument
git commit -m $1
git push origin master
git status