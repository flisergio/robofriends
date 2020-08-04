import React, { Fragment } from 'react';
import './Card.css';

const Card = ({ name, email, id }) => {
    return (  
        // <> is the same as <Fragment> to wrap many things in return statement
        <>
            <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img src={`https://robohash.org/${id}`} className='robot_img' alt='robots' />

                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </> // </> is the same as </Fragment> to wrap many things in return statement
    );
} 

export default Card;