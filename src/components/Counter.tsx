import React, { Component } from 'react';

// Define the state interface for the Counter component
interface CounterState {
  count: number;  // Explicitly typing the count as a number
}

// Convert the Counter class component to TypeScript
class Counter extends Component<{}, CounterState> {
  // Initialize the state with type information
  state: CounterState = {
    count: 0
  };

  // Define the increment method
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
