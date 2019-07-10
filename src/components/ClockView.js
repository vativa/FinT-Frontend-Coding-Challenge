/**
 * Component responsible to visualize a world clock
 */
import axios from 'axios';
import moment from 'moment';
import trans from 'lib/trans';

const ClockView = zone => {
    // Run every 10 sec
    getWorldTime(zone);
    setInterval(() => getWorldTime(zone), 10000);
    
    const wrapper = document.createElement('div');
    wrapper.setAttribute('id', 'clock-wrapper');
    
    const label = document.createElement('div');
    label.setAttribute('id', 'clock-label');
    const [area, city] = zone.split('/');
    label.innerHTML = `${trans(city).ucfirst()} (${area})`;
    wrapper.appendChild(label);
    
    const clock = document.createElement('div');
    clock.setAttribute('id', 'clock-view');
    wrapper.appendChild(clock);
    
    function getWorldTime(zone) {
        axios(`http://worldtimeapi.org/api/timezone/${zone}`).then(({ data: { datetime } }) => {
            clock.innerHTML = moment(datetime).parseZone().format('LTS');
        }).catch(console.error);
    }
    
    return wrapper;
};

export default ClockView;
