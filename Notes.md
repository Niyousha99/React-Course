- [React Notes](#react-notes)
  - [Getting Started](#getting-started)
  - [Refreshing Next Generation JS](#refreshing-next-generation-js)
  - [Build Workflow](#build-workflow)
  - [Events](#events)
  - [Stateless vs. Stateful Components](#stateless-vs-stateful-components)

# React Notes

## Getting Started

React is a JS library for building UI's. It runs in the browser, not server.

React components are "custom HTML elements" that may be re-used throughout the app.

**Why React?**

- UI state becomes difficult to handle with Vanilla JS.
- Focus on business logic, not on preventing your app from exploding ("what" > "how").
- Huge ecosystem, active community, high performance.

**React Alternatives:**

- Angular
- Vue

**Getting started:**

- ```react-dom``` renders components to the DOM.
- ```Babel``` is a preprocessor for JSX syntax.
- ```ReactDOM.render()``` allows to render a JS function as a component to the real DOM.

**Single-page application:**

- Only ONE HTML page
- Content is (re)rendered on Client
- More popular cause you don't have to reload the server - more reactive!.
- There is one root react component.
  - Typically one ONE ```ReactDOM.render()``` call

**Multi-page applications:**

- Multiple HTML pages
- Content is rendered on server.
- A lot of the page is component and individual HTML widgets.
- One ```ReactDOM.render()``` call per "widget".

## Refreshing Next Generation JS

**JS Array Functions**

A lot of React concepts rely on working with arrays (in immutable ways).

[```map()```](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
[```find()```](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
[```findIndex()```](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
[```filter()```](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
[```reduce()```](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b)
[```concat()```](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b)
[```slice()```](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
[```splice()```](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

## Build Workflow

- Dependency management tool (```nmp``` or ```yarn```)
- Bundler (```Webpack```)
- Compiler for next-gen JS (```Babel``` + presets)
- Development server

## Events

List of supported events: https://reactjs.org/docs/events.html#supported-events

## Stateless vs. Stateful Components

Stateful a.k.a. "smart"/"container" components manage state either through hooks or state property in class-based approach.

Stateless a.k.a "dumb" components have no internal logic or are presentational components (only output data). You should have more of these than stateful components!
