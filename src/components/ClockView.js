/**
 * Component responsible to visualize a world view
 */
import axios from 'actions/axios';
import moment from 'moment';
import trans from 'lib/trans';

const ClockView = zone => {
    // Run every 10 sec
    getWorldTime(zone);
    setInterval(() => getWorldTime(zone), 10000);
    
    const clock = document.createElement('div');
    clock.setAttribute('id', 'clock');
    
    const label = document.createElement('div');
    label.setAttribute('id', 'clock-label');
    const [area, city] = zone.split('/');
    label.innerHTML = `${trans(city).ucfirst()} (${area})`;
    clock.appendChild(label);
    
    const view = document.createElement('div');
    view.setAttribute('id', 'clock-view');
    clock.appendChild(view);
    
    function getWorldTime(zone) {
        axios(`http://worldtimeapi.org/api/timezone/${zone}`).then(({ data: { datetime } }) => {
            view.innerHTML = moment(datetime).parseZone().format('LTS');
        }).catch(console.error);
    }
    
    return clock;
};

export default ClockView;
