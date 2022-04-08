#!/bin/bash
# 

currentPath=$(pwd)
root=$(dirname $currentPath)

cd $root/src2

echo "Inside dir: " "$(pwd)"


cd $root 
echo "Back to dir:" "$(pwd)"

while :
do
    now=$(date)
    echo "Running fetch at time: " "$now"
    node handleData.js &
    sleep 60
done
