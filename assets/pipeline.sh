#!/usr/bin/env bash

echo $(python3 StaticCheckComments.py)
if [ $(python3 StaticCheckComments.py) = 0 ]; then
       echo 'Comments not present!'
       exit 2
fi
echo 'Comments check passed!'

#npm install
npm run build
npm run test /src/__tests__ --watch=false
if [ $? ==1 ]; then  
       echo 'One or more tests have failed, exiting...'
       exit 3
fi
echo 'Tests passed, committing...'
git add *
git commit -m $1 
git push origin master
git status
