import React from 'react';
import { render } from 'react-dom';
import Numbers from './numbersComponent.jsx';
import Operators from './operatorsComponent.jsx';
import Output from './outputComponent.jsx';
import Input from './inputComponent.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {output: ""};
		this.onInput = this.onInput.bind(this);
	}
	onInput (val) {
		console.log("value is ", val, " before", this.state);
		this.setState({output: val}, () => { console.log("after:", this.state); });
	}
	onEnter () {
		console.log("ENTER")
	}
	render () {
		return (
			<div>
				<p> Welcome to the calculator</p>
				<span>Output:</span>
				<Output value={this.state.output} />
				<div>Input:</div>
				<Input />
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