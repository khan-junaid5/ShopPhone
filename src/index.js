import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import phones from './data';
import Phone from './phoneComp';

const Phonelist = () => {
    return(
        <div>
            <h1>Amazon<span className="headPrime">✔prime</span></h1>
            <section className='phonelist'>
                {phones.map((phone, index) =>{
                    return <Phone {...phone} number={index}></Phone>
                })}
            </section>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // <App />
    <Phonelist />
);



