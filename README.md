Express & Typescript project
----------------------------

This repository contains a basic configuration of an express application
that would be written using typescript features.

### Linters & Formatters

This project is pre-configured to use `eslint` and `prettier` to work as 
linter and formatter, respectively.

### Package managers

The initial setup is based on `Yarn` and maybe be changed to another Package Manager.
But that's your responsibility.

### Commands

To run the project on watch/development mode, you must execute:
```{sh}
$ yarn start:dev
```

To run the project on production mode:
```{sh}
$ yarn start
```

To only build the project but not run:
```{sh}
 $ yarn build
```
or 
```{sh}
$ yarn run tsc
```
