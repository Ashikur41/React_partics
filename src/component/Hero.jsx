import React from 'react';

const Hero = (props) => {
    return (
        <div>
            <h1>{props.title} </h1>
            <p>{props.description}</p>
        </div>
    );
};

export default Hero;