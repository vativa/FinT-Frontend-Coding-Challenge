/**
 * Component responsible to render input to retrieve a city name
 */
import axios from 'axios';
import complete from 'lib/autocomplete';

const InputForm = ({ cities, addCity }) => {
    let zones = [];
    // Fetch timezones, and refetch on failure
    fetchAvailableTimezones().then(data => {
        if (!(Array.isArray(data) && data.length)) {
            setTimeout(fetchAvailableTimezones, 15000);
        }
    });
    
    function fetchAvailableTimezones() {
        return axios('http://worldtimeapi.org/api/timezone').then(({ data }) => {
            data.forEach(zone => zones.push(zone));
            complete(city, zones);
            return data;
        }).catch(console.error);
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        const [city] = e.target;
        const errorMessage = validate(city.value);
        if (errorMessage) {
            error.innerText = errorMessage;
        } else {
            error.innerText = '';
            addCity(city.value);
            city.value = '';
        }
    }
    
    function validate(city) {
        // Case empty input
        if (!city) {
            return "Please fill out before submitting.";
        }
        // Case wrong type
        if (typeof city !== 'string') {
            return "Ups... Something went wrong.";
        }
        // Case wrong format
        if (city.length > 30) {
            return "Please provide under 30 characters."
        }
        // Case city already added to the stack
        if (cities.includes(city)) {
            return "Selected city is already present."
        }
        // Well done
        return null;
    }
    
    const wrapper = document.createElement('div');
    wrapper.setAttribute('id', 'form-wrapper');
    
    const form = document.createElement('form');
    form.setAttribute('id', 'input-form');
    form.setAttribute('autocomplete', 'off');
    form.addEventListener('submit', handleSubmit);
    wrapper.appendChild(form);
    
    const autocomplete = document.createElement('div');
    autocomplete.setAttribute('class', 'autocomplete');
    form.appendChild(autocomplete);
    
    const city = document.createElement('input');
    city.setAttribute('id', 'city-input');
    city.setAttribute('type', 'text');
    city.setAttribute('name', 'city');
    city.setAttribute('placeholder', `Add more cities...`);
    autocomplete.appendChild(city);
    
    const button = document.createElement('input');
    button.setAttribute('type', 'submit');
    button.setAttribute('value', 'Go!');
    form.appendChild(button);
    
    const error = document.createElement('p');
    error.setAttribute('id', 'input-error');
    wrapper.appendChild(error);
    
    return wrapper;
};

export default InputForm;
