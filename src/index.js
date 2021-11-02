import './style';
import Smooth from './components/smooth/smooth';
import Stacked from './components/stackedCards/stacked';

export default function Index() {
    let stackedCheckbox = false;

    if (!stackedCheckbox) {
        <Smooth />
    }
    
    if (stackedCheckbox) {
        <Stacked />
    }
    
    return (
        <>
            <div class="checkbox" onClick={() => {stackedCheckbox = !stackedCheckbox}}> stacked</div>
            {stackedCheckbox ? <Smooth /> : <Stacked />}
        </>
    )
};
