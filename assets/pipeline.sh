#!/usr/bin/env bash
echo $(python3 StaticCheckComments.py)
if [ $(python3 StaticCheckComments.py) = 0 ]; then
      echo 'Comments not present!'
      exit 2

fi
echo 'Comments check passed!'
#npm install
npm run build
cd src _tests_
jest
cd ../../../
git add .
#$1 is first argument
git commit -m $1
git push origin master
git status