import React from 'react';

class NumbersComponent extends React.Component {
	handleClick (obj) {
		console.log(obj);
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
				<div key={num.id}>
					<button ref='button' onClick={this.handleClick}>{num.value}</button>
				</div>
			)
		});
		return (
			<div>
				{numbersButtons}
			</div>
		)
	}

}

export default NumbersComponent;