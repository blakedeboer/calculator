import React from 'react';
import { render } from 'react-dom';
import NumbersComponent from './numbersComponent.jsx';

class App extends React.Component {
	render () {
		return (
			<div>
				<p> Welcome to the calculator</p>
				<NumbersComponent/>
			</div>
		);
	}
}

render(<App/>, document.getElementById('app'));