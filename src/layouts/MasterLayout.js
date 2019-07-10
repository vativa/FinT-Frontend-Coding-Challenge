/**
 * Top hierarchy UI omponent
 */
import InputForm from 'components/InputForm';
import ClockView from 'components/ClockView';

const MasterLayout = ({ cities }) => {
    const master = document.createElement('div');
    master.setAttribute('id', 'master-layout');
    master.appendChild(InputForm({ cities, addCity }));
    cities.forEach(city => master.appendChild(ClockView(city)));
    function addCity(city) {
        if (cities.length === 5) {
            cities.pop();
            const [input, firstClock] = master.childNodes;
            master.removeChild(firstClock);
        }
        cities.push(city);
        master.appendChild(ClockView(city));
    }
    return master;
};

export default MasterLayout;
