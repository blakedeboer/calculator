import React from 'react';

class Operators extends React.Component {
	handleClick (value) {
		this.props.onInput(value);
	}
	render () {
		const operatorSymbols = [
			{id: 1, value: '+'}, 
			{id: 2, value: '-'},
			{id: 3, value: '*'},
			{id: 4, value: '/'}
		];
		let buttons = operatorSymbols.map((symbol) => {
			return (
				<button key={symbol.id} onClick={this.handleClick.bind(this, symbol.value)}>{symbol.value}</button>
			)
		});
		return (
			<div>
				{buttons}
			</div>
		)

	}
}

export default Operators;