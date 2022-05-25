import UseContextHook from './useContext/UseContextHook';
import UseEffectHook from './useEffect/UseEffectHook';
import UseReducerHook from './useReducer/UseReducerHook';
import UseStateHook from './useState/UseStateHook';
import UseStateHook2 from './useState/UseStateHook2';

function App() {
	return (
		<div className='App'>
			<UseStateHook />
			<UseStateHook2 />
			<UseEffectHook />
			<UseContextHook />
			<UseReducerHook />
		</div>
	);
}

export default App;
