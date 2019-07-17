import axios from 'axios';

// AXIOS
export default axios.create({
    headers: {
        "Accept": "application/json",
        "Content-Type": 'application/json'
    }
});
