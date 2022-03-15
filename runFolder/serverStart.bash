#!/bin/bash
# 

currentPath=$(pwd)
root=$(dirname $currentPath)

cd $root/src

echo "Inside dir: " "$(pwd)"

node testex.js &
cd $root 
echo "Back to dir:" "$(pwd)"

while :
do
    now=$(date)
    echo "Running fetch at time: " "$now"
    node testtest.js
    sleep 60
done
