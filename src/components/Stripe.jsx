import React from 'react';

const Stripe = (props) => {
	return (
		<div id='stripe'>
			<button id='reset' onClick={props.newGame}>
				New Colors
			</button>
			<span id='message' />
			<button onClick={props.changeMode} value='Easy' className='mode'>
				Easy
			</button>
			<button onClick={props.changeMode} value='Hard' className='mode selected'>
				Hard
			</button>
			<button onClick={props.changeMode} value='Expert' className='mode'>
				Expert
			</button>
			<button onClick={props.changeMode} value='Master' className='mode'>
				Master
			</button>
		</div>
	);
};

export default Stripe;
