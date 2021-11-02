import { h } from 'preact';

import cardsArray from '../../assets/data/cards.json'

import style from './smooth.scss'

const colorArray = [{ from: '#f85362', to: '#ff8ea2' }, { from: '#264e8c', to: '#5591e7' }, { from: '#748ca4', to: '#9fb2cb' }];

const card = (bankName, balance, cardNumber, key) => (
	<div key={key} id="card" className={style.card} style={{ backgroundImage: `linear-gradient(to right top, ${colorArray[key % colorArray.length].from}, ${colorArray[key % colorArray.length].to})` }}>
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

function Smooth() {
	let ticking = false;

    document.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(() => {
                const boxes = document.querySelectorAll('#flex');

                function getIntersectionRatio(index) {
                    const a = [window.scrollY, window.scrollY + window.innerHeight];
                    const b = [boxes[index].offsetTop, boxes[index].offsetTop + boxes[index].clientHeight];

                    const max = Math.max(a[0], b[0]);
                    const min = Math.min(a[1], b[1]);

                    return Math.max(0, (min - max) / (b[1] - b[0]));
                }

                for(let i = 0; i < boxes.length; i += 1) {
                    const intersection = getIntersectionRatio(i)
                    const top = boxes[i].offsetTop - window.pageYOffset < 0;
                    boxes[i].firstChild.style.cssText += `
                    transform-origin: ${top ? "center center" : "top center"};
                    position: ${top ? "fixed" : "absolute"};
                    transform: scale(${intersection});
                    opacity: ${intersection};
                    `
                }
                ticking = false;
            });
            ticking = true;
        }
    })

	return(
	<div id="app" className={style.app}>
		{cardsArray.map((item, key) => (
			<div key={key} id="flex" className={style.flex}>
				{card(item.title, item.balance, item.cardNumber, key)}
			</div>
		))}
	</div>
	);
}

export default Smooth;
