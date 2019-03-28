import React, { Component } from 'react';
import Header from './Header';
import Stripe from './Stripe';
import SquareDisplay from './SquareDisplay';
import Squares from './Squares';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mode        : 'Hard', //default Mode
			numS        : 6, //default Mode
			pickedColor : 0, //winning Color
			colors      : [], // random Colors
		};
	}

	randomColor = () => {
		let r = Math.ceil(Math.random() * 256);
		let g = Math.ceil(Math.random() * 256);
		let b = Math.ceil(Math.random() * 256);
		return `rgb(${r}, ${g}, ${b})`;
	};

	pickWinningColor = (numSquares, setS) => {
		let pcindex = Math.ceil(Math.random() * numSquares - 1);
		if (!setS) {
			return pcindex;
		} else {
			this.setState({ pickedColor: pcindex });
		}
	};

	generateRandomColorsArray = (numSquares, setS) => {
		let rc = [];
		for (let i = 0; i < numSquares; i++) {
			rc = [ ...rc, this.randomColor() ];
		}
		if (!setS) {
			return rc;
		} else {
			this.setState({ colors: rc });
		}
	};
	onModeSelect = (event) => {
		let modeButtons = document.querySelectorAll('.mode');
		let resetButton = document.querySelector('#reset');
		let messageDisplay = document.querySelector('#message');
		let h1 = document.querySelector('h1');
		resetButton.textContent = 'New Colors';
		messageDisplay.textContent = '';
		for (let i = 0; i < modeButtons.length; i++) {
			modeButtons[i].classList.remove('selected');
		}
		let updates = this.state;
		if (event.target.value === 'Easy') {
			modeButtons[0].classList.add('selected');
			updates = { ...updates, mode: 'Easy', numS: 3 };
		} else if (event.target.value === 'Hard') {
			modeButtons[1].classList.add('selected');
			updates = { ...updates, mode: 'Hard', numS: 6 };
		} else if (event.target.value === 'Expert') {
			modeButtons[2].classList.add('selected');
			updates = { ...updates, mode: 'Expert', numS: 9 };
		} else {
			modeButtons[3].classList.add('selected');
			updates = { ...updates, mode: 'Master', numS: 12 };
		}
		updates = { ...updates, pickedColor: this.pickWinningColor(updates.numS, false) };
		updates = { ...updates, colors: this.generateRandomColorsArray(updates.numS, false) };
		h1.style.backgroundColor = 'steelblue';
		this.setState({
			mode        : updates.mode,
			numS        : updates.numS,
			pickedColor : updates.pickedColor,
			colors      : updates.colors,
		});
	};
	renderList = () => {
		if (this.state.colors[0] !== 'undefined') {
			const randomSquareColor = this.state.colors.map((bgColor) => {
				return <Squares square={bgColor} key={bgColor} value={bgColor} squareChoice={this.onSquareClick} />;
			});
			return randomSquareColor;
		} else {
			return null;
		}
	};
	onSquareClick = (event) => {
		let resetButton = document.querySelector('#reset');
		let messageDisplay = document.querySelector('#message');
		let h1 = document.querySelector('h1');
		let pickedColor = this.state.colors[this.state.pickedColor];
		if (event.target.style.backgroundColor === pickedColor) {
			messageDisplay.textContent = 'Winner';
			this.changeColorsWin(pickedColor);
			resetButton.textContent = 'Play Again?';
			h1.style.backgroundColor = pickedColor;
		} else {
			event.target.style.backgroundColor = '#232323';
			messageDisplay.textContent = 'Try Again';
		}
	};

	changeColorsWin = (winningColor) => {
		let squares = document.querySelectorAll('.square');
		for (let i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = winningColor;
		}
	};

	onResetButtonClick = () => {
		let resetButton = document.querySelector('#reset');
		let messageDisplay = document.querySelector('#message');
		let h1 = document.querySelector('h1');
		let newGame = this.state;
		messageDisplay.textContent = '';
		h1.style.backgroundColor = 'steelblue';
		resetButton.textContent = 'New Colors';
		this.setState({ mode: this.state.mode });
		newGame = { ...newGame, pickedColor: this.pickWinningColor(newGame.numS, false) };
		newGame = { ...newGame, colors: this.generateRandomColorsArray(newGame.numS, false) };
		this.setState({
			pickedColor : newGame.pickedColor,
			colors      : newGame.colors,
		});
	};

	componentWillMount() {
		this.pickWinningColor(this.state.numS, true);
		this.generateRandomColorsArray(this.state.numS, true);
	}

	render() {
		return (
			<div>
				<Header colors={this.state.colors} pickColor={this.state.pickedColor} />
				<Stripe changeMode={this.onModeSelect} newGame={this.onResetButtonClick} />
				<SquareDisplay children={this.renderList} />
			</div>
		);
	}
}

export default App;
