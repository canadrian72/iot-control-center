#!/bin/bash
cd /home/pi/led-control-Center
git pull origin master

cd /home/pi/led-control-center/LedController
docker-compose up --build -d