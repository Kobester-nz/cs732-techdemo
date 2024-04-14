# cs732 assignment
This is for cs732 assignment tech demo, the topic of this assignment is to illustrate the feasures of Angular, React and make comparisons with Angular, on top of that covered in depth on integratoin with Amazon Web Services (AWS) reached and developed the solution that the repository is deployed on AWS Amplify for application deployment, CI/CD and mornitoring. The solution also leveraged Bootstrap for css styling. Used GitHub for Source control including branch management, PR integration with AWS, etc. The code is quite self-explanatory but I added some necessary comments. Happy hacking!
![Tools](images/Tools.png "Tools")


# Description:

This README file contains 6 main sections:
 1. 1st is check if you have required environment settings. 
 2. 2nd part is to start the Angular application. 
 3. 3rd part is Create AWS accounts and AWS Identity Centre Users. 
 4. 4th part is to Set up AWS Amplify, integration with GitHub and configure the code CICD pipeline, Build and Deploy the application on AWS environment. 
 5. 5th part is showcasing the GitHub repository configuration and DevOps practices. 
 6. 6th part is references of documentation I have used. 
 7. Last but not least, the 7th part is my conclusion of this assignment. 


# 1. Before you begin:
0. Clone the code (can use GitHub link: https://github.com/Kobester-nz/cs732-techdemo) and navigate to cs732-techdemo/angular-app folder for cs732 techdemo assignment:
    cd cs732-techdemo/angular-app
1. Check node version: 
    node -v
2. Install correct version of node.js for angular: 
    Download link: https://nodejs.org/en/download/
3. Install latest version of Angular: 
    npm install -g @angular/cli
4. Install bootstrap: 
    npm i bootstrap@5.3.3
5. install required npm dependencies: 
    npm install
   


# 2. To Start the Angular application
0. Navigate to cs732-techdemo/angular-app folder
    cd cs732-techdemo/angular-app
1. Start the server
    ng serve
2. Direct to local host home page:
    http://localhost:4200/home
    ![app-home](images/app-home.png "app-home")
3. Direct to local host Angular page:
    http://localhost:4200/angular
    ![app-angular](images/app-angular.png "app-angular")
3. Direct to local host React page:
    http://localhost:4200/react
    ![app-react](images/app-react.png "app-react")
3. Direct to local host React vs Angular page:
    http://localhost:4200/comparsion
    ![app-comparsion](images/app-comparsion.png "app-comparsion")
4. For any page that's not exist in router, navigate to 404 error page:
    eg. http://localhost:4200/error
    ![app-error](images/app-error.png "app-error")




 
# 3. Set up AWS Account for AWS Amplify:
1. Create an AWS Account 
2. Navigate to Account Settings, which you should be logged in as management account. 
3. Go to AWS Organizations -> AWS Accounts.
4. Create a new environment called 'dev' along side management account under Root.
5. Navigate to IAM Identity Centre, select ap-southeast-2 Sydney as Region.
6. Enable IAM Identity Centre
7. After Identity Centre is enabled, select Dashboard -> Users
8. Create a new user (your name), then add the user into the new account 'dev'
9. Then log in as the new user (your name) to complete the registration.
![AWS-IAM](images/AWS-IAM.png "AWS-IAM")
10. In management account, Navigate to Organizations -> AWS accounts -> Invitations -> Invite AWS Account. 
![AWS-Org](images/AWS-Org.png "AWS-Org")
11. Add the new user (your name) to the 'dev' account, and create group (admin) with Admin permission then add the new user into this group. 
12. SSO will be automatically enabled now if you log in to 'dev' account, Click on AdministratorAccess link and you will be directed to AWS console. 
![AWS-SSO](images/AWS-SSO.png "AWS-SSO")


# 4. Set up AWS Amplify:

0. Make sure Git repo, Anguar app and AWS account set up properly
1. Open Amplify console on AWS 'dev' account
2. Choose Get Started at the top of the page, at the bottom of the page, locate the Amplify Hosting section, and choose Get started.
3. On the Get started with Amplify Hosting page, choose your Git repository provider, then choose Continue.
4. On the Add repository branch page,  the Recently updated repositories list, select the name of the repository to connect, for our case it's cs732-techdemo.
5. In the Branch list, select the repository cs732-techdemo main branch to connect, then click next.
6. Set up Pipeline in the Build settings, and make sure to match below settings.
![AWS-Amplify-Buil](images/AWS-Amplify-Buil.png "AWS-Amplify-Buil")
7. Deploy the application to AWS CDN (Content Delivery Network). On the Review page, confirm that your repository details are correct.
8. Set up CICD Pipelines for Pull request previews

8.1. Choose App settings, Previews and then choose Enable previews. In the Install GitHub App to enable previews window, choose Install GitHub app, Select the GitHub account where you want to configure the Amplify GitHub App. A page opens on Github.com to configure repository permissions for your account. To limit the installation to the specific repositories that you select, choose Only select repositories, and select 'cs732-techdemo'. Choose Save.
![Git-Amplify](images/Git-Amplify.png "Git-Amplify")
8.2. Confirm Pipeline in the Build settings are correctly set up.
8.3. Therefore when new Pull request created, before merge into main branch, Amplify Pull Request will pick up and display in Preview as shown below.
![AWS-Amplify-PR](images/AWS-Amplify-PR.png "AWS-Amplify-PR")
As shown here the Pipeline is built and deployed successfully.
![AWS-Amplify-success](images/AWS-Amplify-success.png "AWS-Amplify-success")

9. Monitoring the Pipeline and Application on AWS Cloud Watch:
![AWS-Monitoring](images/AWS-Monitoring.png "AWS-Monitoring")


# 5. GitHub
1. GitHub page, the home page of the assigment. Link: https://github.com/Kobester-nz/cs732-techdemo
![Git-Hub](images/Git-Hub.png "Git-Hub")
2. Application branch - Have main and dev and followed good practice of deparating the main branch and development branch  
![Git-Branch](images/Git-Branch.png "Git-Branch")
3. Commits, adding tags to make deparate commits purposes, eg. 'feat' means feature commit and 'fix' means fix commit
![Git-Commit](images/Git-Commit.png "Git-Commit")
4. Before the Pull Request Merge, AWS Amplify and GitHub will check if the code is good to be merged into the main branch.
![Git-Merge-Check](images/Git-Merge-Check.png "Git-Merge-Check")

5. Pull Requests, have made sure application is working perfectly fine before merge to the main branch, carefully checked the differences, etc and peer-review with myself. 
![Git-PR](images/Git-Commit.png "Git-PR")


# 6. More Documentation:
1. Amplify Documentation:
https://aws.amazon.com/amplify/?gclid=Cj0KCQjw2uiwBhCXARIsACMvIU2wEOL2KhtJrWfDqBipei2emecwCiUepAB0Wpt0ZrwT8Hg9A-xVi4QaAj7GEALw_wcB&trk=eeb323c0-b1c5-47b2-820a-ad0189f77c2c&sc_channel=ps&ef_id=Cj0KCQjw2uiwBhCXARIsACMvIU2wEOL2KhtJrWfDqBipei2emecwCiUepAB0Wpt0ZrwT8Hg9A-xVi4QaAj7GEALw_wcB:G:s&s_kwcid=AL!4422!3!647374792061!e!!g!!aws%20amplify!19613643828!149167002121

2. Bootstrap Documentation:
https://getbootstrap.com/

3. AWS Identity Centre Documentation:
https://aws.amazon.com/iam/identity-center/

4. AWS Amplify hosting Web App Documentation:
https://aws.amazon.com/amplify/hosting/?gclid=EAIaIQobChMIn8eNtMjAhQMVNss8Ah0OgAIpEAAYASAAEgJlEPD_BwE&trk=eeb323c0-b1c5-47b2-820a-ad0189f77c2c&sc_channel=ps&ef_id=EAIaIQobChMIn8eNtMjAhQMVNss8Ah0OgAIpEAAYASAAEgJlEPD_BwE:G:s&s_kwcid=AL!4422!3!647374792037!e!!g!!aws%20amplify%20ci%2Fcd!19613643828!149167002201

5. Angular Documentation:
https://angular.io/

6. React Documentation:
https://react.dev/learn

7. GitHub Documentation:
https://docs.github.com/en/get-started/using-github/github-flow

8. AWS Cloud Watch Documentation:
https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_architecture.html


# 7. Conclusions:
For this assignment, I have spent well over 80 hours on this tech demo to learn about Angular, GitHub bootstrap and especially AWS and AWS Amplify. I have learned so much about all the different and how they integrate with each other, have been through a lot of debugging and some bugs even became a new features!!! I really enjoyed the experience of doing this assignment. If you read through this far, thank you very much and hope all the best to you! 