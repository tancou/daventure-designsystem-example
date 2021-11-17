# DaventureDesignsystemExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.13.

## Architecture

The projects aims to provide a documented and viewable library of components based on Angular Material and Material Design.

```
❯ tree -I node_modules -L 2
.
├── LICENSE
├── README.md
├── angular.json
├── dist // Where projects are built
│   └── ngx-daventure
├── documentation.json // Updated each time storybook is generated
├── package-lock.json
├── package.json
├── projects
│   └── ngx-daventure // The library of components
├── public // Here are stored assets
├── stories // Here are stored storybook stories
│   └── xxx.stories.ts
└── tsconfig.json
```

## Development server

You can intanciate some components into the fake app, but the current projet acts as a library, this should not be served.


Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Building

You can build the library too, run `ng build`.

## Running StoryBook

Run `npm run storybook` for a dev server. Navigate to `http://localhost:6006/`. The app will automatically reload if you change any of the source files.

## Create a new component or module

For a Module : run `ng g module <MyName>`.

For a Component : run `ng g component <MyName> --module <my-name> --style scss --export`.

Then you can find it into `projects/ngx-daventure/src/lib/<my-name>`

Then, you can move the componant/module into another subfolder in order to make it a nested package.

## Export to Chromatic

Run `npm run chromatic`. Then open the link to review changes.
