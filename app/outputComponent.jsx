import React from 'react';

class Output extends React.Component {

	render () {
		var styleProps = {
			width: '200px',
		 	height: '30px', 
		 	border: '1px solid black',
		 	margin: '5px',
		 	padding: '5px'
		};
		return (
		<div style={styleProps}>{this.props.value}
		</div>
		)
	}
}

export default Output; 