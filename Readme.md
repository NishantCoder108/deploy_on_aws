## Step to deploy

1. create your application 
2. push your code on github
3. create aws instance and store pem file in compute ,it will use to login in aws server
4. In aws , you can go in security options and go in `INBOUND rules` and edit INBOUND rules and add port `3000` (it may be any port , your application is running) and add extra port like for ssh (22) ,for http(80) , for https (443).
5. login with credentials on aws server (ssh -i pemfile.pem ubuntu@23.35.6)
6. Install git and configure your application with (your email address and your name ). you can generate ssh key pairs that will paste inside github setting in `SSH Settings option` , for commiting your code on github.
   ```bash
   sudo apt update
   
   git --version
   
   git config --global user.name "Nishant K"

   git config --global user.email "youremail@gmail.com"

   ssh-keygen -t  rsa -b 4096 -C "youremail@gmail.com"  // Generate ssh key pairs and secure connection with remote server and github services

   eval  "$(ssh-agent -s)"  //Ensure the ssh agent is started

   ssh-add  ~/.ssh/id_rsa.pub  // Add private key to the ssh agent

   cat ~/.ssh/id_rsa.pub // Add to github for comment and push
   ```
7. Copy the generated ssh key file and paste it into in `SSH Settings option` in Github Settings.
8. Create folder in aws server and clone the code by ssh url of the repository.
9. Install `NodeJS` by nvm. After installing  nodejs, go to root folder where you package.json file is located and then run `npm install`.

    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash


    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
    [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion


    nvm install node

    nvm alias default node

    pm2 start npm --name "my-app" -- start    // Start with pm2
    ```
10. Run your application `npm start` (with pm2 install) .
11. See the url of ipaddress of ec2 instance like `http://13.245.35.356:3000
12. Point your EC2 instance IP address to godaddy subdomain .
13. Implement `Nginx` and `SSL certificates` in your application.
    ```bash

    sudo apt-get install nginx

    sudo vi /etc/nginx/nginx.conf  //For creating file and updating

    sudo rm /etc/nginx/nginx.conf  // For removing

    sudo nginx -s reload  // Restart the nginx

    pm2 start "npm start"  // Restart your application

    ```
    - For SSL certificate  (https://certbot.eff.org/)

    ```bash

    install snapd  // if aws is using , not necessary this command to run

    sudo snap install --classic certbot

    sudo ln -s /snap/bin/certbot /usr/bin/certbot

    sudo certbot --nginx // Must be ensure instance is running on port 443 and 80 i.e https and https

    ```
    

14. Implement `CI CD` pipeline with ` Github Actions`
   - Make .github/workflows folder  and make deploy.yml file and just copy paste
   - Make deploy.sh file for executing command line by line on server  

15. Test your application with actual live url like `https://deploy.example.com`.
