// Mostly just here for reference.
// Is the method Dustin taught to do axios with headers.
import axios from 'axios';

export default function() {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            "Content-Type": "application/json",
            'Authorization': `${token}`
        }
    })
}