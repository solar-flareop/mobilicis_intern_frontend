
# React App 

This repository contains a React application with several components and routes. 

## App.jsx

The `App.jsx` file is the main entry point of the application. It imports the `Home` component and sets up the routing for the different tasks. Each route corresponds to a specific task and renders the corresponding component.

The app uses the `react-router-dom` package to handle routing.


## Components

The app includes several components, each corresponding to a different task. These components are:

- `Home`: the landing page of the application.
- `Task0`: a component displaying a list of users.
- `Task1`: a component displaying a list of users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
- `Task2`: a component displaying a list of male users which have phone price greater than 10,000
- `Task3`: a component displaying a list of users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
- `Task4`: a component displaying a list of users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit
- `Task5`: a component displaying a list of top 10 cities with highest number of users and their average income.

## Conclusion

This React app is set up with routing and several components to display user data with specific criteria. It also preview scripts in the `package.json` file.
