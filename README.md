# Listera

*Note: This project is under construction*
---

This is a planner and todo app that allows the user to manage a task list. 

The following operations are allowed on tasks:

- View
- Add
- Configure
- Reorder
- Delete

As part of the task configuration, a task can have

- Main task text/name 
- Due date
- Description
- Subtasks
- Status
- Progress
- Importance
- Tags

Besides, users can use the following views or functionality

- View tasks grouped by due date (today, this week, this month, etc)
- Search
- Filter
 
## Tech Stack

This project is using the following technologies

- React
- TypeScript
- CSS Modules
- MobX
- GraphQL
- Prisma

## Development

### Frontend

The frontend project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts

In the frontend directory, you can run:

`npm install`

To install all dependencies.

`npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

`npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### Deploying the frontend app

In the root folder of this repo, run

`git subtree push --prefix frontend heroku-frontend master`

### Backend

*The backend project requires prisma to be installed globally.*

#### Deploying the backend app

In the root folder of this repo, run

`git subtree push --prefix backend heroku-backend master`
