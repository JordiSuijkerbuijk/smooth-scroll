import { h } from 'preact';

import cardsArray from '../assets/data/cards.json'

import style from './app.scss'

console.log('cardsArray', cardsArray);

const colorArray = [{ from: '#f85362', to: '#ff8ea2' }, { from: '#264e8c', to: '#5591e7' }, { from: '#748ca4', to: '#9fb2cb' }];

const card = (bankName, balance, cardNumber, key) => (
	<div key={key} className={style.card} style={{ backgroundImage: `linear-gradient(to right top, ${colorArray[key % colorArray.length].from}, ${colorArray[key % colorArray.length].to})` }}>
		<div className={style.bankName}>
			{bankName}
		</div>
		<div className={style.columnWrapper}>
			<div className={style.balanceWrapper}>
				<div className={style.balance}>
					${balance}
				</div>
				<div className={style.text}>
					BALANCE
				</div>
			</div>
			<div className={style.cardNumber}>
				{cardNumber}
			</div>
		</div>
	</div>
)

const App = () => (
	<div id="app" className={style.app}>
		{cardsArray.map((item, key) => (
			<div key={key} className={style.flex}>
				{card(item.title, item.balance, item.cardNumber, key)}
			</div>
		))}
	</div>
)

export default App;
