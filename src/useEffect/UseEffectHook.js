// useEffect hook
import React, { useEffect, useState } from 'react';
import '../styles/styles.scss';

const UseEffectHook = () => {
	// set the three different counters
	const [count, setCount] = useState(0);
	const [count2, setCount2] = useState(0);
	const [count3, setCount3] = useState(0);

	// useEffect to console.log number of clicks each time count 2 is clicked.
	useEffect(() => {
		console.log(`You have clicked ${count2} number of times.`);
	}, [count2]);

	return (
		<div className='example-box'>
			<p> useEffect example</p>
			<button onClick={() => setCount(count + 1)}>Count 1</button>
			<p>{count}</p>
			<button onClick={() => setCount2(count2 + 1)}>Count 2</button>
			<p>{count2}</p>
			<button onClick={() => setCount3(count3 + 1)}>Count </button>
			<p>{count3}</p>
		</div>
	);
};

export default UseEffectHook;
