#!/bin/bash

export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v22.4.0/bin




npm install


# Check if PM2 is running
if pgrep pm2 > /dev/null; then
  echo "PM2 is running. Killing PM2 processes."
  pm2 kill
else
  echo "PM2 is not running."
fi

pm2 start "npm start"