import React from 'react';

class Output extends React.Component {

	render () {
		var styleProps = "width: 100px; height: 30px; border: 1px solid black";
		return (
		<div>{this.props.value}
		</div>
		)
	}
}

export default Output; 