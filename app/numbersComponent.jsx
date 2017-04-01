import React from 'react';

class NumbersComponent extends React.Component {

	render () {
		var numbersButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8 , 9].map((num) => {
			return (
				<button ref='button'>{num}</button>
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