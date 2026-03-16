import {fetchAdvice} from './api.js';
import { renderAdvice } from './ui.js';

// Grab the DOM elements

const diceBtn = document.querySelector('.dice-button');

async function handleDiceClick()  {
    const slip = await fetchAdvice();
    if(!slip){
        console.log('Something went wrong, try again');
        return
    }
    renderAdvice(slip.id, slip.advice);
}

// Event handlers
diceBtn.addEventListener('click', handleDiceClick)