# React TypeScript Components

This project contains TypeScript versions of React components. Here's a breakdown of the changes and improvements made:

## Components

### 1. Greeting Component (`Greeting.tsx`)
- Converted from JavaScript to TypeScript
- Added `GreetingProps` interface to type-check the name prop
- Uses `React.FC` type for proper function component typing

### 2. Counter Component (`Counter.tsx`)
- Converted from JavaScript to TypeScript
- Added `CounterState` interface to type-check the component's state
- Uses proper generic typing with `Component<{}, CounterState>`
- Added return type annotations for methods

## TypeScript Improvements
- Added static type checking
- Improved code documentation through interfaces
- Better IDE support with type information
- Catch potential errors at compile time

## Project Structure
```
src/
  components/
    Greeting.tsx
    Counter.tsx
```

## Key Changes from Original JavaScript Version
1. Added TypeScript type definitions
2. Introduced interfaces for props and state
3. Added explicit type annotations
4. Improved code organization and documentation
