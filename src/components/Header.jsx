import React from 'react';

const Header = ({ colors, pickColor }) => {
	return (
		<div>
			<h1>
				The Great<br />
				<span id='colorDisplay'>{`${colors[pickColor]}`}</span>
				<br />Game
			</h1>
		</div>
	);
};

export default Header;
