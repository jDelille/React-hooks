// useState hook
import React, { useState } from 'react';
import '../styles/styles.scss';

const UseStateHook = () => {
	// set the state, set counter to 0
	const [counter, setCounter] = useState(0);

	// function to increment counter on click
	function increment() {
		setCounter(counter + 1);
	}
	return (
		<div className='example-box'>
			<p> useState Example </p>
			<p> Increment count on click </p>
			<button onClick={increment}>Add</button>
			<p>{counter}</p>
		</div>
	);
};

export default UseStateHook;
