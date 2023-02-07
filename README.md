# Movie Forum

# Table of contents
1. [Description](#description)
2. [Screenshots](#screenshots)
3. [Setup and installation instructions](#setup-and-installation-instructions)
  - [Setting up the Backend](#setting-up-the-backend)
  - [Setting up the database](#setting-up-the-database)
  - [Setting up the Frontend](#setting-up-the-frontend)
  - [Live Links](#live-links)
4. [Known bugs](#known-bugs)
5. [Technologies used](#technologies-used)
6. [Support and Contact details](#support-and-contact-details)
7. [License](#license)
8. [Collaborators](#collaborators)


# Description
This is a simple web app that allows movie lovers around the world to come to our platform and checkout the latest and highest rated films. A user is able to to log into the plaform, view the latest titles and reviews/comments on the movies left by other users who have watched them before. A user is also able to post a review, update and delete it.
This is a line that was edited in git and we intend to push it to github.
# Screenshots
![Screenshot1](https://github.com/JosephNjeruNjenga/movie-forum/blob/main/client/src/screenshot1.png)

![screenshot2](https://github.com/JosephNjeruNjenga/movie-forum/blob/main/client/src/screenshot2.png)

# Setup and installation instructions
  ## Requirements
- Ruby 2.7.6
- Bundle 
- Rails
- NodeJS (v16), and npm

### Setting up the backend
- Start by cloning the repository to your computer from https://github.com/JosephNjeruNjenga/movie-forum
- Verify which version of Ruby you're running by entering this in the terminal:

```console
$ ruby -v
```

We recommend version 2.7.6. If you need to upgrade you can install it using rvm:

```console
$ rvm install 2.7.6 --default
```

You should also install the latest versions of `bundler` and `rails`:

```console
$ gem install bundler
$ gem install rails
```

### Install NodeJS

Verify you are running a recent version of Node with:

```sh
node -v
```

If your Node version is not 16.x.x, install it and set it as the current and
default version with:

```sh
nvm install 16
nvm use 16
nvm alias default 16
```

You can also update your npm version with:

```sh
npm i -g npm
```
- When you're ready to start running the backend server, run:
 ```
 rails server
 ```
 ### Database table relationships
 ![Database table relationships](https://github.com/JosephNjeruNjenga/movie-forum/blob/main/client/src/screenshot3.png)
 
 ### Setting up the database
 - Run the following commands to get started with the database:
 
 ```
 bundle i
 rails db:migrate
 rails db:seed
 ```
 
 ### Setting up the frontend
- When you're ready to start building your project, run:

```
npm install --prefix client
npm install @mui/material @emotion/react @emotion/styled --prefix client
npm start --prefix client
```
- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)

- Open the project using your preferred code editor, preferably Visual studio to inspect the code.

### Live Links
- Frontend- [http://localhost:4000](http://localhost:4000)
- Backend- [http://localhost:3000](http://localhost:3000)

# Known bugs
There are no known bugs in this project.

# Technologies used
1. HTML
2. CSS
3. Javascript
4. React
5. Ruby
6. Ruby on rails.

# Support and Contact details
- abdulaziz.abdullahi@student.moringaschool.com
- joseph.njenga@student.moringaschool.com
- ivan.nguyo@student.moringaschool.com
- barbra.mududa@student.moringaschool.com
- jeremiah.kungu@student.moringaschool.com

# License
This project is under [MIT](https://github.com/JosephNjeruNjenga/movie-forum/blob/main/licence) license.

# Collaborators
- Joseph Njenga
- Abdulaziz Abdullahi
- Barbra Mududa
- Ivan Nguyo
- Jeremiah Kungu
