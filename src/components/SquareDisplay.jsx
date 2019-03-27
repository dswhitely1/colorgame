import React from 'react';

const SquareDisplay = (props) => {
	return <div id='container'>{props.children()}</div>;
};

export default SquareDisplay;
