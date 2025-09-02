Application created using this tutorial https://www.youtube.com/watch?v=SqcY0GlETPk

To run the app:
npm run dev

# Notes

- extension .tsx is used for react components
- 2 ways to create a component:

  - function based components
    - concise and easier to write
    - recommended
  - javascript class

## TypeScript vs JavaScript

- TypeScript is a superset of JavaScript
- Every valid JavaScript program is a valid TypeScript program
- TypeScript builds upon JavaScript by adding static type checking
- TypeScript has the following additional features:
  - Interfaces, Enums (named constants), Generics, Modules
- Typescript code is transpiled into plain JavaScript using the TransScript compiler to ensure compatability with Javascript environements (i.e. browsers, Node.js etc.)

## React

- react takes a component tree and builds a virtual dom (in memory representation of our component tree)

  - when the data component changes, it updates the virtual dom
  - it then compares the virtual dom with the actual dom
  - react-dom is the library responsible for updating the dom
    - <React.StrictMode> identifies problems within the react code
  - similar to react-dom, another lib react-native is used for mobile devices (i.e. react is not platform dependent)
    12345

  - react is a javascript library to build a UI
  - library = tool
  - framework = toolset
  - react only creates the UI but it can use other libraries for things like: routing, http, managing app state, internationalization, form validation, animations

  ### Components

  - Can only return 1 element
    - To work around you can wrap with a div. This adds an div to the dom that really doesn't do anything.
    - Or, you can use a Fragment. This prevents the div added simply to make React compile. The following syntax can be used <></>

  ### JSX

  - There is no such thing as a for loop, so use the map function instead
