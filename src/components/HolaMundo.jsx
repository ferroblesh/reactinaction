import React from 'react';

const HolaMundo = () => {
    const hello = 'Hola Mundo';
    const isTrue = true;
    return(
        <div className="HolaMundo">
            <h1>{hello}</h1>
            <h2>Curso Inicial de React</h2>
            <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="React"/>
            {isTrue ? <h4>Esto es verdadero</h4> : <h5>Es falso</h5>}
            {isTrue && <h4>Soy verdadero!</h4>}
        </div>
    )
}

export default HolaMundo;