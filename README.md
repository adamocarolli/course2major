# course2major

### [Demo](https://calm-headland-39002.herokuapp.com/)

[![Demo](./misc/example.gif)](https://calm-headland-39002.herokuapp.com/)

Course2major is a web application that recommends programs of study to University of Toronto students based on the courses students have previously taken or are interested in taking.  

Course2major is a project conceived of by members of the Victoria College Office of the Registrar and built in collaboration with the University of Toronto Design Club.


## Installation
Here we explain how to install and launch course2major locally on macOS. Although similar instructions likely work on other OS variants, we have only tested these instructions on a machine meeting the following requirements:

- macOS 10.12.6 (Sierra) or higher

Take the following steps to install and launch course2major:
1. Ensure Homebrew is installed on your machine.
2. Ensure MongoDB is installed on your machine.
3. Start a terminal (a shell). Subsequent steps are to be performed in this shell.
4. Install Node.js by issuing the following commands:
```
brew update
brew install node
```
5. Install required application dependencies by issuing the following command:
```
npm install
```
6. Compile JavaScript modules by issuing the following command:
```
npm run build
```
7. Open a new terminal (a shell). Subsequent steps are to be performed in this shell.
8. Start MongoDB server by issuing the following command:
```
mongod
```
9. Open a new terminal (a shell). Subsequent steps are to be performed in this shell.
```
npm run start
```
10. Application should now be viewable at: http://localhost:5000/

## Design Assets

At the below link all design assets can be found (Created by the University of Toronto Design Club):

https://drive.google.com/drive/folders/11yYBeQG-lQp3qtue83Oyl8DNAW8Zsi3b
