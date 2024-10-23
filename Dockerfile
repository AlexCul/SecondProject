from debian:12.7

workdir /home/

run apt-get update && apt-get upgrade
run apt-get install nodejs npm -y

copy . react-app-js

workdir /home/react-app-js

run npm install
