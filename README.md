## General Information

- Restaurant owners are one of our services’ users. To help them manage
their business better, I have built an interface to display upcoming reservations,
so that they can take action on them.

## Features

- List Reservations
- User can search, filter and sort reservations
- Using "React Bootstrap" for UI styling.
- Linter and Prettier added
- Added Airbnb
- Using React Toastify to show success, error and warning
- Using JSON Server for mock api
- Axios
- React Routing Dom
- Vite

## Setup

Following instructions will get you a copy of the project up and running on your local machine for development purpose.

1.  Install following on your local machine
    - [Git](https://git-scm.com)
    - [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com))
2.  Clone the repository by running this following command
    ```bash
    git clone https://github.com/AhmedFarazQaimkhani/yassir_frontend_challenge
    ```
3.  Start project by running following commands

    ```bash
    yarn install

    # once node_modules gets install, run next command
    yarn dev

    ```

4.  Once your app is running, you can access it on the following address in your browser
    - Json server
    - Resources
    - [http://127.0.0.1:5173/api/reservations](http://127.0.0.1:5173/api/reservations)
    - Frontend
    - [http://127.0.0.1:5173](http://127.0.0.1:5173)

## Versions

Following versions are being used while creating this guide.

```
node@v16.15.0 or higher
npm@8.1.3 or higher
```

## Branches

Current branches and their purposes are as follow.

```
main -> contains latest changes

```

# Room For Improvement

## Improvements

- Add E2E test cases.
- Add Unit test cases.
- Add SonarQube to analyze code quality and code security.
- UI
- Linter Rules

## Features that can be added

- React Query to cache data

## Challanges faced and Decision Taken

- Having issues of date in Reservations Json showing dates of 2018 updated those dates to 2022.
- Upcoming reservations I think should be any of present/after current time not for tomorrow only. 
- If its a requirement we just need to update a code on Reservation.tsx at line 46.

## About Me

_Hi, I'm Ahmed Faraz a BS(CE) graduate working as software developer in the industory for about 4 years, I am an experienced developer skilled in Javascript and its frameworks._
