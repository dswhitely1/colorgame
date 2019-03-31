import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeGameMode, newGame, winGame, updateMessage } from '../actions';
import { getRandomColors, pickWinningColor, changeColorsWin, modeButtonId, numSquare } from '../functions';
import Header from './Header';
import Stripe from './Stripe';
import SquareDisplay from './SquareDisplay';
import Squares from './Squares';

import './App.css';

class App extends Component {
	onModeSelect = (e) => {
		const { changeGameMode } = this.props;
		const { mode } = this.props.colorgame;
		let modeButtons = document.querySelectorAll('.mode');
		modeButtons[modeButtonId(mode)].classList.remove('selected');
		e.target.classList.add('selected');
		changeGameMode(
			e.target.value,
			numSquare(e.target.value),
			pickWinningColor(numSquare(e.target.value)),
			getRandomColors(numSquare(e.target.value)),
		);
	};

	renderList = () => {
		const { colors } = this.props.colorgame;
		let i = -1;
		if (colors[0] !== 'undefined') {
			const randomSquareColor = colors.map((bgColor) => {
				i++;
				return <Squares square={bgColor} key={i} value={bgColor} squareChoice={this.onSquareClick} />;
			});
			return randomSquareColor;
		} else {
			return null;
		}
	};
	onSquareClick = (e) => {
		const { winGame, updateMessage } = this.props;
		const { colors, numS, pickedColor } = this.props.colorgame;
		if (e.target.style.backgroundColor === colors[pickedColor]) {
			winGame(changeColorsWin(numS, colors[pickedColor]));
		} else {
			updateMessage('Try Again');
			e.target.style.backgroundColor = '#232323';
		}
	};

	onResetButtonClick = () => {
		const { newGame } = this.props;
		const { numS } = this.props.colorgame;
		newGame(pickWinningColor(numS), getRandomColors(numS));
	};

	render() {
		return (
			<div>
				<Header props={this.props.colorgame} />
				<Stripe changeMode={this.onModeSelect} newGame={this.onResetButtonClick} props={this.props.colorgame} />
				<SquareDisplay children={this.renderList} />
			</div>
		);
	}
}

const mapStatesToProps = (state) => {
	return {
		colorgame : state.game,
	};
};

export default connect(mapStatesToProps, { updateMessage, changeGameMode, newGame, winGame })(App);
