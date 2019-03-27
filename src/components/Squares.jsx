import React from 'react';

const Squares = (props) => {
	let divStyle = { backgroundColor: props.square };
	return <div onClick={props.squareChoice} className='square' style={divStyle} />;
};

export default Squares;
