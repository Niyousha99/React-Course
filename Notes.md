- [React Notes](#react-notes)
  - [Getting Started](#getting-started)
  - [Refreshing Next Generation JS](#refreshing-next-generation-js)

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

