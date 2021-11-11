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
├── dist // Where projects are build and where the assets are exported for StoryBook
│   ├── empty-app // Storybook use that folder to serve static content
│   └── ngx-daventure
├── documentation.json // Updated each time storybook is generated
├── package-lock.json
├── package.json
├── projects
│   ├── empty-app // The fake empty project for extracting assets
│   └── ngx-daventure // The library of components
├── stories // Here are stored storybook stories
│   └── xxx.stories.ts
└── tsconfig.json
```

## Development server

You can intanciate some components into the fake app, but the current projet acts as a library, this should not be served.


Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Building

Before running StoryBook you must export Angular Material style sheets. You can achieve that building the project, run `ng build empty-app`

You can build the library too, run `ng build`.

## Running StoryBook

Run `npm run storybook` for a dev server. Navigate to `http://localhost:6006/`. The app will automatically reload if you change any of the source files.

## Create a new component or module

For a Module : run `ng g module <MyName>`.

For a Component : run `ng g component <MyName> --module <my-name> --style scss --export`.

Then you can find it into `projects/ngx-daventure/src/lib/<my-name>`

Then, you can move the componant/module into another subfolder in order to make it a nested package.
