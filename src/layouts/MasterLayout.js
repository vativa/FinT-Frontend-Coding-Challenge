/**
 * Top hierarchy UI omponent
 */
import AppBar from 'components/AppBar';
import InputForm from 'components/InputForm';
import ClockView from 'components/ClockView';

const MasterLayout = ({ cities }) => {
    const master = document.createElement('div');
    master.setAttribute('id', 'master-layout');
    master.appendChild(AppBar({ title: 'World Clocks App' }));
    master.appendChild(InputForm({ cities, addCity }));
    
    const clockContainer = document.createElement('div');
    clockContainer.setAttribute('id', 'content');
    master.appendChild(clockContainer);
    
    cities.forEach(city => master.appendChild(ClockView(city)));
    function addCity(city) {
        if (cities.length >= 5) {
            cities.pop();
            const [clock1] = clockContainer.childNodes;
            clockContainer.removeChild(clock1);
        }
        cities.push(city);
        clockContainer.appendChild(ClockView(city));
    }
    return master;
};

export default MasterLayout;
