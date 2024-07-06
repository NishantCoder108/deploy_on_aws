## Step to deploy

1. create your application 
2. push your code on github
3. create aws instance and store pem file in compute ,it will use to login in aws server
4. In aws , you can go in security options and go in `INBOUND rules` and edit INBOUND rules and add port `3000` (it may be any port , your application is running) and add extra port like for ssh (22) ,for http(80) , for https (443).
5. login with credentials on aws server (ssh -i pemfile.pem ubuntu@23.35.6)
6. Install git and configure your application with (your email address and your name ). you can generate ssh key pairs that will paste inside github setting in `SSH Settings option` , for commiting your code on github.
7. Copy the generated ssh key file and paste it into in `SSH Settings option` in Github Settings.
8. Create folder in aws server and clone the code by ssh url of the repository.
9. Install `NodeJS` by nvm. After installing  nodejs, go to root folder where you package.json file is located and then run `npm install`.
10. Run your application `npm start` (with pm2 install) .
11. See the url of ipaddress of ec2 instance like `http://13.245.35.356:3000
12. Connect your EC2 instance IP address with godaddy subdomain .
13. Implement `Nginx` and `SSL certificates` in your application.
14. Implement `CI CD` pipeline with ` Github Actions`
15. Test your application with actual live url like `https://deploy.example.com`.