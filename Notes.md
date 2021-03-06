- [React Notes](#react-notes)
  - [Getting Started](#getting-started)
  - [Refreshing Next Generation JS](#refreshing-next-generation-js)
  - [Build Workflow](#build-workflow)
  - [Events](#events)
  - [Stateless vs. Stateful Components](#stateless-vs-stateful-components)
  - [Dynamic CSS](#dynamic-css)
    - [Inline Styles](#inline-styles)
    - [Radium](#radium)
    - [Styled Components](#styled-components)
    - [CSS Modules](#css-modules)
  - [React Components](#react-components)
    - [Class-based vs Functional Components](#class-based-vs-functional-components)
    - [Class-based Component Lifecycle](#class-based-component-lifecycle)
      - [Creation](#creation)
      - [Update for Props and State Changes](#update-for-props-and-state-changes)
  - [Functional Component 'Lifecycle'](#functional-component-lifecycle)
  - [Cleanup using Lifecycle Hooks and `UseEffect`](#cleanup-using-lifecycle-hooks-and-useeffect)
  - [Optimizing Functional Components with `React.memo()`](#optimizing-functional-components-with-reactmemo)
  - [Conditional Rendering](#conditional-rendering)

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

**Note**: Do not do this mutation of state at run time:
```
this.state.persons[0].name = "Not Niyousha";
```

`setState` updates react of the change in state and is only available in **class-based** components.THIS DOES NOT MERGE WITH OLD STATE BUT OVERRIDES IT WITH NEW STATE:
```
switchNameHandler = (newName) => {
  this.setState({
    persons: [
      { name: "daughter2", age: 21 },
      { name: "mom2", age: 44 },
      { name: newName, age: 48 }
    ]
  })
}
```

- JS class extends from Component object; think of variable as property of a class
- `state` is managed from inside the component; this property only works in class-based components unless using hooks!
- `state` stores JS object as internal data
- if `state` changes, it will re-render the DOM

## Dynamic CSS

### Inline Styles

Inline styles are good for scoping the style, but not making it global!

### Radium

Popular package used for inline CSS styles for media queries and pseudo selectors.

```
npm install --save radium
```

Example of using Radium for pseudo-selector in in-line style:
```
import Radium, { StyleRoot } from 'radium';

const style = { // doens't work with pseudo selectors (e.g., hover)
  backgroundColor: "green",
  color: "white",
  font: "inherit", // inherit from surrounding font
  border: "1px solid blue",
  padding: "8px",
  cursor: "pointer",
  ":hover": { // using Radium for pseudo selector
    backgroundColor: "lightgreen",
    color: "black"
  }
};
 
style.backgroundColor = "red"; // change style
style[":hover"] = {
  backgroundColor: "salmon",
  color: "black"
};
```

### Styled Components

Has HTML elements as methods.

```
npm install --save styled-components
```

Example:

```
import styled from 'styled-components';

// write regular CSS in string template argument of styled-component
// can add dynamic values in string
// ternary expression: if props.alt === true, then rurn red, otherwise turn green

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover: { 
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;
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

## React Components

Clearly, writing code like this is very cumbersome:
```
return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'m a React App!!!'), null);
```

The "App" component should have a very lean `render()` body and not deal with UI rendering too much.

`this` refers to the component object at runtime!

**`JSX`**

- Syntaxial sugar that works in .jsx and .js
- Allows to write "HTML-ish" code but can't use certain words
  - e.g., "class" => "className" which translates to "class" once rendered
- It is best practise to wrap everything into one root element per component!

React callas `render()` to render some HTML code to the screen.

**Note:** Can use console->rendering to flash component when it renders on the browser!

### Class-based vs Functional Components

Both have access to state.

Functional components don't have lifecycle hooks. For a functional component, you can replace {} with () for just return statement in arrow function

### Class-based Component Lifecycle

**Note:** unsafe legacy lifecycles will not be called for components using new component APIs

#### Creation

1. `constructor(props)`
   - Default ES6 class feature
   - Initial i.e., setting initial state
   - Call super(props)
   - Don't use to cause side-effects!

2. `getDerivedStateFromProps(props, state)`
   - Sync internal state of component to props whenever they are changed
   - Static method
   - Very rarely used

3. `render()`
   - Prepare and structure `JSX` code
   - Render `HTML` code
   - Also renders child components

4. `componentDidMount()`
   - Used for causing side-effects (e.g., sending HTTP requests for data)
   - Don't use to update state (triggers re-render which is bad for performance) - don't use setState synchronously!

#### Update for Props and State Changes

1. `getDerivedStateFromProps(props, state)`
   - Syncs state of component that updates based on props
   - Static method
   - eg., Form control with external properties
   - Don't use too often (more elegant way to do this)

2. `shouldComponentUpdate(nextProps, nextState`
   - Allows to cancel updating process
   - Returns `true` or `false` depending on how you compare previous and current props/state
   - Whether react should continue re-rendering a component
   - Gets rid of unnecessary updating cycles
   - Used for performance optimization
   - Use carefully as you can stop components from rendering!

3. `render()`
   - Prepare and structure `JSX` code
   - Render `HTML` code
   - Also renders child components

4. `getSnapshotBeforeUpdate(prevProps, prevState`
   - Returns snapshot object of previous props and state to be freely reconfigured
   - Used for last-minute DOM operations (e.g., last scrolling position of user)

5. `componentDidUpdate()`
   - Signals that you are done with updating
   - Good for fetching new data from server
   - Can now cause side-effects (e.g., send HTTP requests) but careful to not enter infinite loop!
   - Do not call `setState` here (unless result of async task) as it will trigger unnecessary re-render cycle

## Functional Component 'Lifecycle'

- Most useful hook after `useState`
- Combines all use cases you can cover of all class-based component lifecycle hooks into one react hook.
- Equivalent to: `componentDidMount()` + `componentDidUpdate()`
- Executes the passed function for the creation as well as every render cycle (in virtual DOM) of the functional component.

To run `useEffect` only for the first time and not rerun again:

```
useEffect(() => {
    // some function...
}, []); // pass empty array meaning that there are no dependencies that will change for useEffect to rerun
```

To make `useEffect` rerun for a specific change:
```
useEffect(() => {
  // some function...
}, [props.persons]);
```

If you want to update using useEffect on more than one data, can call useEffect multiple times!

## Cleanup using Lifecycle Hooks and `UseEffect`

Good to clean up event handlers after removing a component.

**Class-based component:** `componentWillUnmount()`

**Functional component:** return a function in `useEffect` at the end. This will run before the main useEffect function runs, but after the (first) render cycle!

## Optimizing Functional Components with `React.memo()`



## Conditional Rendering

Another option: Ternary expression (but hard to work with):

```
this.state.showPersons === true ?
<div>
...
</div> : null // else condition (render null)
```