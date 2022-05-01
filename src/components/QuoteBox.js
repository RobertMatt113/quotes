import React from 'react';
import quotes from '../quotes.json'
import { useState } from 'react';

const QuoteBox = () => {

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const [next, setNext] = useState(randomIndex);

    const change = ()=>{
        const random = Math.floor(Math.random() * quotes.length);
        setNext(random);
    }

    const colors = ["var(--pink)", "var(--green)", "var(--blue)", "var(--darkBlue)", "var(--strawberry)"]
    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style = `background: ${colors[randomColor]}`;

    return (
        <div className='Quote-box' style={{color: colors[randomColor]}}>

            <div className='quote-content'>
                <i class='bx bxs-quote-alt-left'></i>
                <p className='quote-phrase'>    
                   {quotes[next].quote}
                </p>
            </div>
            
            <div className='quote-author' style={{background: colors[randomColor]}}>
               {quotes[next].author}
            </div>

            <div className='icon-content' style={{background: colors[randomColor]}}>
                <button onClick={change}>
                    <i id='arrow-icon' class='bx bxs-chevron-right'></i>
                </button>
            </div>

        </div>
    );
};

export default QuoteBox;