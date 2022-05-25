// Overview:
// useState with objects
// Create an object of firstname and lastname
// Change the value of firstname and lastname and preserve the previous state

import React, { useState } from 'react';

const UseStateHook2 = () => {
	const [name, setName] = useState({ firstName: '', lastName: '' });
	return (
		<div>
			<form action=''>
				<input
					type='text'
					value={name.firstName}
					onChange={(e) => setName({ ...name, firstName: e.target.value })}
					placeholder='first name'
				/>
				<input
					type='text'
					value={name.lastName}
					onChange={(e) => setName({ ...name, lastName: e.target.value })}
					placeholder='last name'
				/>
				<h2> Your first name is {name.firstName}</h2>
				<h2> Your last name is {name.lastName}</h2>
			</form>
		</div>
	);
};

export default UseStateHook2;
