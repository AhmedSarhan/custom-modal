import React from 'react';
import './App.css';
import FirstEvent from './components/FirstEvent';
import SecondEvent from './components/SecondEvent';
const App = () => {
	return (
		<div className="app">
			<FirstEvent />
			<SecondEvent />
		</div>
	);
};

export default App;
