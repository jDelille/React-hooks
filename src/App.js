import UseContextHook from './useContext/UseContextHook';
import UseEffectHook from './useEffect/UseEffectHook';
import UseReducerHook from './useReducer/UseReducerHook';
import UseStateHook from './useState/UseStateHook';

function App() {
	return (
		<div className='App'>
			<UseStateHook />
			<UseEffectHook />
			<UseContextHook />
			<UseReducerHook />
		</div>
	);
}

export default App;
