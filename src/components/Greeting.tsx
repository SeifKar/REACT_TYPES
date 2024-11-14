import React from 'react';

// Define the props interface for the Greeting component
interface GreetingProps {
  name: string;  // Explicitly typing the 'name' prop as a string
}

// Convert the Greeting component to TypeScript using the defined props interface
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
