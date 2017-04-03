import React from 'react';

class Numbers extends React.Component {
	handleClick (value) {
		console.log(value);
		this.props.onInput(value);
	}
	render () {
		let start = 0;
		const numbers = [];
		while (start <= 9) {
			numbers.push({id: start, value: start});
			start += 1;
		}

		var numbersButtons = numbers.map((num) => {
			return (
				<button key={num.id} ref='button' onClick={this.handleClick.bind(this, num.value)}>{num.value}</button>
			)
		});
		return (
			<div>
				{numbersButtons}
			</div>
		)
	}

}

export default Numbers;