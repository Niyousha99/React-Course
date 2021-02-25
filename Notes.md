- [React Notes](#react-notes)
  - [Getting Started](#getting-started)
  - [Refreshing Next Generation JS](#refreshing-next-generation-js)
  - [Build Workflow](#build-workflow)
  - [Events](#events)
  - [Stateless vs. Stateful Components](#stateless-vs-stateful-components)
  - [Dynamic CSS](#dynamic-css)
    - [```Radium```](#radium)
    - [Styled Components](#styled-components)
    - [CSS Modules](#css-modules)

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

## Dynamic CSS

### ```Radium```

Popular package used for inline CSS styles for media queries and pseudo selectors.

```
npm install --save radium
```

### Styled Components

Has HTML elements as methods.

```
npm install --save styled-components
```

### CSS Modules

The following command ejects from the underlying configurations and gives access to webpack congif files so that you can tweak how your code is bundled together.

```
npm run eject
```

Change ```webpack.config.dev.js``` and ```webpack.config.prod.js```
(line 160-ish):

```
test: /\.css$/,
use: [
  require.resolve('style-loader'),
  {
    loader: require.resolve('css-loader'),
    options: {
      importLoaders: 1,
      modules: true, // enables CSS module feature
      localIndent: '[name]__[local]__[hash:base64:5]' // used to dunamically generate unique CSS class names
    },
  },
```

CSS Modules are a relatively new concept (you can dive super-deep into them here: https://github.com/css-modules/css-modules). With CSS modules, you can write normal CSS code and make sure, that it only applies to a given component.

It's not using magic for that, instead it'll simply automatically generate unique CSS class names for you. And by importing a JS object and assigning classes from there, you use these dynamically generated, unique names. So the imported JS object simply exposes some properties which hold the generated CSS class names as values.

Example:

In ```Post.css``` File

```
.Post {
    color: red;
}
```

In Post Component File

```
import classes from './Post.css';
 
const post = () => (
    <div className={classes.Post}>...</div>
);

```
Here, ```classes.Post```  refers to an automatically generated ```Post``` property on the imported classes object. That property will in the end simply hold a value like ```Post__Post__ah5_1```.

So your .```Post``` class was automatically transformed to a different class (```Post__Post__ah5_1```) which is unique across the application. You also can't use it accidentally in other components because you don't know the generated string! You can only access it through the classes  object. And if you import the CSS file (in the same way) in another component, the classes  object there will hold a Post  property which yields a different (!) CSS class name. Hence it's scoped to a given component.

By the way, if you somehow also want to define a global (i.e. un-transformed) CSS class in such a .css  file, you can prefix the selector with :global .

Example:

```
:global .Post { ... } 
```

Now you can use ```className="Post"```  anywhere in your app and receive that styling!