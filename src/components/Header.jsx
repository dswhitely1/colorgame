import React from 'react';

const Header = ({ props }) => {
	return (
		<div>
			<h1>
				The Great<br />
				<span id='colorDisplay'>{props.colors[props.pickedColor]}</span>
				<br />Game
			</h1>
		</div>
	);
};

export default Header;
