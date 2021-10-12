# React Redux Notes

## Containers


Containers fetch state data and use it to render (display) components.
- state data will become components props

Containers are similar to components. However, only containers have access to state data in Redux.
- components are sometimes called "dumb components" or "presentational components"

Containers are very similar to components, the only difference is that containers are aware of application state. If
part of your webpage is only used for displaying data (dumb) then make it a component. If you need it to be smart and
aware of the state (whenever data changes) in the application then make it a container.

## Reducers

Reducers take in actions and update part of application state.
- We combine all reducers into a single object before updated data is dispatched (sent) to store
- Your entire applications state (store) is just whatever gets returned from all your reducers

```
const allReducers = combineReducers({
    users
});
```


## Actions

Actions are just things that happen *(seriously, that's it)*.
- most actions are user events (clicked a button, submitted a form, etc...)
- can also be other events such as an API call returning data

### Actions are (usually) made up of two parts


**type** - describes the action that occurred
```
ADD_USER_BUTTON_CLICKED
```


**payload** - *(optional)* any extra data that is needed
```
{
    first: "Samantha",
    last: "Williams",
    age: 52,
    description: "Samantha is a good woman with a heart of gold."
}
```

### Actions vs. Action Creators

Action creators are functions that create objects, actions are the objects that get created.

**Action creator**
```
export default function () {
    return {
        first: "Samantha",
        last: "Williams",
        age: 52,
        description: "Samantha is a good woman with a heart of gold."
    }
}
```

**Action**
```
{
    first: "Samantha",
    last: "Williams",
    age: 52,
    description: "Samantha is a good woman with a heart of gold."
}
```

### What happens next?

All actions are automatically sent to **all** reducers. It is the reducers job to determine how to handle that action
(can also just ignore it).
