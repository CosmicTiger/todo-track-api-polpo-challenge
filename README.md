# todo-track-api-polpo-challenge: Quick-Td API
> @author: Luisangel Marcia - @CosmicTiger

## Technologies
  ***JavaScript***
  - Node.JS
  - Express.JS
  - JWT
  - BcryptJS
  - Nodemon(dev)
  - BodyParser
     
## Description

  This project consists in a evaluation by Polpo recruiter team.

  This `API` consists in a simple `CRUD` about a `ToDo APP` called QuickTd in which possess *server side validation*, `JWT Authentication` for `users`, *relations between the `data` of the `users` and its `tasks`* inside the application.

## Project Structure
  This Project possess a standard structure for Node.JS API Rest.

  1. `controllers`: In which possess all the functions that controls the data.
  2. `middleware`: Consists in the implementation of `JWT` as a middleware in order to permit access with `decoded` and `uncoded` token authentication for the `users`.
  3. `models`: Carries out the models for the `Task`s and `User`s Schema from the `mongodb`.
  4. `routes`: Gives the routes in which a frontend application could request certain data in will have `responses` in dependency of the method.
  5. `app.js`: Possess the main execution of `node.js` server in which the `API` run.

## API Routes
  In the following section the routes would be explained.

  ### `Auth routes`
  1. `/auth/signup/`: It will create a new `user`;
  2. `/auth/login/`: It will let the `user` to log in the application;

  ### `Task routes`
  ***In order to use this routes its necessary to have a user registered***

  1. `/api/tasks/`: Will apply a GET method in which will send all the tasks of the user.
  2. `/api/task/`: Will create task through a POST method for the data sent by the user.
  3. `/api/task/:taskId`: Will search through a GET method for a specific task of the user.
  4. `/api/task/:taskId`: Will update through a PUT method a specific task selected by the user.
  5. `/api/task/:taskId`: Will eliminate a task through a DELETE method selected by the user.
## Available Scripts:
  Only run the command yarn start.

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

~~Not implemented~~


