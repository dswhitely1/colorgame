import React from 'react';

const Header = ({ props }) => {
	let divStyle = { backgroundColor: props.headerColor };
	let displayText =
		props.pickedColorText === props.colors[props.pickedColor]
			? props.pickedColorText
			: props.colors[props.pickedColor];
	return (
		<div>
			<h1 style={divStyle}>
				The Great<br />
				<span id='colorDisplay'>{displayText}</span>
				<br />Game
			</h1>
		</div>
	);
};

export default Header;
