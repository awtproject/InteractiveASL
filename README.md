# Interactive ASL

Interactive ASL is a web application built with the MEAN stack for learning American Sign Language in a easy and intuitive way. This web application has been developed as a final proyect for the [Lecture Advance Web Technologies](https://www.uni-due.de/soco/teaching/courses/lecture-advwebtech-ss18.php).

## Features and Overview

### Features
The project has been focused on giving the user the best experience and resources for learning American Sign Language, so the main features are: 

* Learning section: Allow the user to learn progressively.
* Practicing section: The user can reinforce the knowledge acquired.
* Testing section: Test and consolidate what has been learned.

There is also an user authentication service, the application is only available for registered users. New user should create a new account, the data is stored safely on the database provided by MongoDB, then user can login and access to the main dashboard with the previous features , charts and advices for monitoring progress.

### Overview

A quick overview of the full project and features is available on the following [youtube video](https://www.youtube.com/watch?v=CTCzfniKJE8). There is also a teaser image and more screenshots on the screenshot folder.

For trying the app please go to the [live demo on Heroku](https://interactive-asl.herokuapp.com/) or download and deploy it locally following the steps described on the get started and deploy section.

## Built With

For this project we have used the MEAN stack (Mongo DB, ExpressJS, Angular and NodeJS) in addition to Bootstrap css framework.

* [Mongo DB](https://www.mongodb.com/) - Document database – used in the back-end application to store the user data as JSON (JavaScript Object Notation) documents.
* [Express JS](https://expressjs.com/) - Back-end web application framework running on top of Node.js  used for creating robust API quickly and easy.
* [Angular](https://angular.io/) - Front-end web app framework; runs the JavaScript code in the user's browser, allowing the application UI to be dynamic.
* [Node JS](https://nodejs.org/en/) - JavaScript runtime environment, implements the application back-end in JavaScript.
* [Bootstrap](https://getbootstrap.com/) - CSS Framework used on the Frontend for styling.

In addition to these technologies [Fontawesome](https://fontawesome.com/) has been used for the icons, as well as [Bootswatch](https://bootswatch.com/) for the custom theme of Bootstrap.

## Getting Started

Follow these instructions if you want to get a copy of the project  and run it on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

If you want to run the project locally you will need to install the following software:

* Node.js and npm - Details on installing Node.js on different operating systems using package managers can be found on the [website](https://nodejs.org/en/download/package-manager/#windows).
* MongoDB - Details  on  installing  MongoDB  on  macOS  and  Linux  can  be  found  on  the  [official  MongoDB  website](https://docs.mongodb.com/manual/administration/install-community/).
* The Angular CLI - The Angular CLI can be installed globally with the following command:

```
npm install -g@angular/cli
```

### Installing

1. Clone or download the project as compressed file and then extract the zip file.
2. Open a terminal in the folder containing “app.js” file and execute the following command:

```
npm install 
```

3. Move to the AngularFrontEnd folder and again execute the command:

```
npm install 
```
If there are some errors then execute the following commands:

```
npm audit fix
```
```
npm audit dedupe
```

## Deployment

Once the installation is properly done the steps for runnig the app locally are the following:

1. On the 'root folder' open a comand window and run the following command:

```
npm start
```

2. On the AngularFrontEnd folder run the command.

```
ng serve -o
```

The app should be opened on the broswer on http://localhost:4200/.


## Authors

* **Agustín Gázquez Hurtado** - *work done : Backend development (NodeJS+ExpressJS+ MongoDB), Frontend development ( Navbar , footer, Login page, Register page, Home page, Reset page, About us, Dashboard, Practice and user-service) and Github deployment. * 
* **Aynaz Khoshkhoo** - *work done : Frontend development (Contact us, Test, Practice, Models, helper service and quiz service), youtube video presentation and and Github deployment.* 
* **Anusha Bangaru** - *work done: Frontend development (Dashboard, Learning: number, alphabet and phrases), Heroku deployment and Github deployment. * 

## Acknowledgments

* Special Thanks to Prof. Dr. Chatti and Dr. Muslim to support us during this class project.
* ASL Numbers and Sign Language Alphabet collection by [Stephanie Leeson](https://thenounproject.com/DesignPirate/) has been used on the proyect.
