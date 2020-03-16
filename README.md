# Growth Hackers Test Frontend

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Quality assurance](#quality-assurance)
- [Setup](#setup)

## General info

The project is a mercado livre clone, that has just some features related with
the e-commerce:

- It list products of diferents graphql sources;
- Has some filters that can be applied by the user, ex: like select which category (source) the user want;
- Can order the products ascending or descending by title;
- Can search for keywords;
- Can paginate throught the selected products (or by all if no filter is applied);
- Has a login/signup system that is stored on the localStorage of the browser;
- The user can select favorites products and can see the list on another page of the project;
  P.S: Because of the limitation of the free graphql API's, I load all the data inside the redux, and I do all the process's of pagination on the client-side.

## Technologies

Project is created with:

- @ant-design/icons version 4.0.2
- Ant Design version 4.0.2
- Commitizen version 4.0.3
- Commitlint version 8.3.5
- Cross-env version 7.0.0
- Eslint version 5.16.0
- Faker version 4.1.0
- Husky version 4.2.1
- Lint-staged version 10.0.8
- Jest version 24.9.0
- Prettier version 1.19.1
- Puppeteer version 2.1.1
- React version: 16.13.0
- React-router-dom version 5.1.2
- Reactotron version 0.9
- Redux version: 7.2.0
- Redux-saga version 1.1.3
- Styled-components version 5.0.1
- Stylelint version 13.2.0

## Quality assurance

To assure the quality of the project, some measures have been taken:

- Clean code;
- Eslint & prettier monitoring, alert and fix the code pattern of javascript related files following the airbnb styleguide;
- Directory structure design to be easy to find specific components & features;
- EditorConfig configure to force a code pattern independent of the editor;
- End-to-End test coveraging the "happy path" of a user;
- Git-hooks and automated tools (husky, lint-staged, commitizen, commitlint to padronize commit messages and test procedures before pushing the code on the online repository to avoid sending bug code to it;
- Git-flow to padronize the git structure of branchs and release;
- Unit/Integration test coverage;
- Reactotron to debug the redux & redux-saga middleware more efficiently;
- Stylelint to monitore, alert and fix de code pattern of style related files;

## Setup

To run this project on development mode, install it locally using yarn:

```
$ cd ~/directory-where-the-project-was-cloned/growth-test
$ yarn
$ yarn start
```

To run tests, execute the following command `$ yarn test`

To run the depuration with reactotron, install it locally following those [instructions](https://github.com/infinitered/reactotron/blob/master/docs/installing.md). After the installation of reactotron locally execute reactotron and start the application on development mode.

To run this project on production mode build it using yarn `$ yarn build` then deploy the builded bundle to the desired host.
