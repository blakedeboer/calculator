import React from 'react';
import { render } from 'react-dom';
import Numbers from './numbersComponent.jsx';
import Operators from './operatorsComponent.jsx';
import Output from './outputComponent.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {ouput: ""};
	}

	onInput (val) {
		this.setState({output: val});
	}
	onEnter () {
		console.log("ENTER")
	}
	render () {
		return (
			<div>
				<p> Welcome to the calculator</p>
				{/* OUTPUT */}
				<Output value={this.state.output} />
				<Numbers onInput={this.onInput} />
				<Operators onInput={this.onInput}/>
				<div>
					<button onClick={this.onEnter}>ENTER</button>
				</div>
			</div>
		);
	}
}

render(<App/>, document.getElementById('app'));