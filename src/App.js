import UseContextHook from './useContext/UseContextHook';
import UseEffectHook from './useEffect/UseEffectHook';
import UseStateHook from './useState/UseStateHook';

function App() {
	return (
		<div className='App'>
			<UseStateHook />
			<UseEffectHook />
			<UseContextHook />
		</div>
	);
}

export default App;
