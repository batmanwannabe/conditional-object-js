// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

 let data = {}
                    Object.assign(data, 1 === 1 ? { 1: 1 } : null,
                        1 === 1 ? { 1: 1 } : null,
                        1 === 1 ? { 1: 1 } : null);


                        appDiv.innerHTML = `${JSON.stringify(data)}`