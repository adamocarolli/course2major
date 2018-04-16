# course2major

## Installation
Here we explain how to install and launch course2major locally on macOS. Although similar instructions likely work on other OS variants, we have only tested these instructions on a machine meeting the following requirements:

- macOS 10.12.6 (Sierra) or higher

Take the following steps to install and launch course2major:
1. Start a terminal (a shell). All subsequent steps are to be performed in this shell.
2. Ensure Homebrew is installed on your machine.
3. Install Node.js by issuing the following commands:
```
brew update
brew install node
```
4. Install required application dependencies by issuing the following command:
```
npm install
```
5. Compile JavaScript modules by issuing the following command:
```
npm run webpack
```
6. Issue the following command to run application:
```
npm run start
```
7. Application should now be viewable at: http://localhost:5000/
