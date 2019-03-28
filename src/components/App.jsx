import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeGameMode, newGame } from '../actions';
import { getRandomColors, pickWinningColor } from '../functions';
import Header from './Header';
import Stripe from './Stripe';
import SquareDisplay from './SquareDisplay';
import Squares from './Squares';

import './App.css';

class App extends Component {
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
		let updates = this.props;
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
		updates = { ...updates, pickedColor: pickWinningColor(updates.numS) };
		updates = { ...updates, colors: getRandomColors(updates.numS) };
		h1.style.backgroundColor = 'steelblue';
		this.props.changeGameMode(updates.mode, updates.numS, updates.pickedColor, updates.colors);
	};

	renderList = () => {
		if (this.props.colors[0] !== 'undefined') {
			const randomSquareColor = this.props.colors.map((bgColor) => {
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
		let pickedColor = this.props.colors[this.props.pickedColor];
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
		let newColors = getRandomColors(this.props.numS);
		let newWinColor = pickWinningColor(this.props.numS);
		messageDisplay.textContent = '';
		h1.style.backgroundColor = 'steelblue';
		resetButton.textContent = 'New Colors';
		this.props.newGame(this.props.mode, this.props.numS, newWinColor, newColors);
	};

	render() {
		return (
			<div>
				<Header props={this.props} />
				<Stripe changeMode={this.onModeSelect} newGame={this.onResetButtonClick} />
				<SquareDisplay children={this.renderList} />
			</div>
		);
	}
}

const mapStatesToProps = (state) => {
	return {
		mode        : state.gameMode.mode,
		numS        : state.gameMode.numS,
		pickedColor : state.gameMode.pickedColor,
		colors      : state.gameMode.colors,
	};
};

export default connect(mapStatesToProps, { changeGameMode, newGame })(App);
