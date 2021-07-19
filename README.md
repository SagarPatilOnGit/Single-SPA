# Single-SPA
Microfrontend architecture - single SPA framework evaluation and proof of concept

Create SPA

1. npm install --global create-single-spa

2. create-single-spa --framework react
directory E:/SagarGit/Single-SPA/react
E:/SagarGit/Single-SPA/angular
E:/SagarGit/Single-SPA/vue
E:/SagarGit/Single-SPA/root


create-single-spa --moduleType root-config

If angular appplication is already created without above command,use below in angular cli application to add sing spa :
ng add single-spa-angular


Run the application
Navigate to the angular-app folder and run the below command

$ npm run serve:single-spa:angular
Navigate to the react-app folder and run the below command

$ npm start
Navigate to the root-config folder and run the below command

$ npm start
In the browser open the application at http://localhost:9000

Now in the top navigation bar click on React, you will be routed to the React app, on click of Angular you will be redirected to angular app

http://localhost:9000/react -> React App http://localhost:9000/angular/ -> Angular App
