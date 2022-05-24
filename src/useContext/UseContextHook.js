import React, { useContext, useState } from 'react';
import '../styles/styles.scss';

// set the light and dark theme colors in themes object.
const themes = {
	light: {
		bg: '#fff',
		text: '#000',
	},
	dark: {
		bg: '#000',
		text: '#FFF',
	},
};

// create the theme constant set it to light.
const ThemeContext = React.createContext(themes.light);

// store the button in toolbar. pass setToggle and toggle as props.
function Toolbar({ setToggle, toggle }) {
	return (
		<div>
			<ThemedButton setToggle={setToggle} toggle={toggle} />
		</div>
	);
}

// create the button. will changed color based on click.
function ThemedButton({ setToggle, toggle }) {
	const theme = useContext(ThemeContext);
	return (
		<button
			style={{ background: theme?.bg, color: theme?.text }}
			onClick={() => setToggle(!toggle)}>
			Toggle light / dark mode
		</button>
	);
}

// store the toolbar inside of themecontext.provider. This will changed the color theme based on button click.
const UseContextHook = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<div className='example-box'>
			<p> useContext example</p>
			<p>
				A component calling useContext will always re-render when the context
				value changes. (button going from dark to light mode on click)
			</p>
			<ThemeContext.Provider value={toggle ? themes.dark : toggle.light}>
				<Toolbar setToggle={setToggle} toggle={toggle} />
			</ThemeContext.Provider>
		</div>
	);
};

export default UseContextHook;
