# Coinzzz

### Project Description

<ul style="margin-left: 40px; list-style-type: none;">
  
This project purpose is creating baseline for stock market application which has login, register functionalities and information about coins on this website.

### Usage Scenario

**1)** Register

**2)** Login

**3)** Mainpage

**4)** Coins

**5)** Sign out


### <i>First time user scenario </i>

Users can register the website on register page, then they can login the system with their account.

 - Users have to fill all input fields on the registeration form.
 - First Name and Last Name can be up to 25 characters.
 - Password can be mininum 6, maximum 25 characters
 - E-mail must be unique.
 - If an input field is empty or given e-mail has already in the system, users will see warning message.

### <i>Existed user scenario </i>
Users can use the website by login their account.
  - Users must use e-mail and password to login.
  - E-mail and password must be correct and match otherwise users will see warning message.
  - Users can see their information on the top panel of mainpage.
  - Users can see detailed informaition about coins by clicking the coins icons.
  - Users can sign out their account. 

</ul>
  
### Project Member
  - Göksel Can Önal
  
### Instruction for how to run the application
  - Clone the repository
  - Install Node.js https://nodejs.org/en/download/
  - Run bellow commands on cmd for installations
  
    ```npm install```
  
    ```npm install react-router-dom```
  
    ```npm install react-bootstrap bootstrap```
  
    ```npm install -g json-server```
  
    ```npm install axios```
  
  - Run ```json-server --watch users.json``` on fake-server directory for starting server
  - Run ```npm start``` on repository directory for starting application


### Used Libraries
  - React https://tr.reactjs.org
  - React-router-dom https://reactrouter.com
  - React-bootstrap https://react-bootstrap.github.io
  - Json-server https://github.com/typicode/json-server
  - Axios https://github.com/axios/axios
