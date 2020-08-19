import React, { PropTypes } from 'react';

const Image = ({src, fallbackSrc, ...other}) => {
    let element;
    const changeSrc = newSrc => {
        element.src = newSrc;
    };
    return (
        <img src={src} 
             onError={() => changeSrc(fallbackSrc)} 
             ref={el => element=el} 
             {...other} />
    );
};

export default Image;