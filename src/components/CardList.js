import React, { Fragment } from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    // if (true) {
    //     throw new Error("No :(");
    // }

    return (
        <>
            <div>
                {
                    robots.map((robot, index) => {
                        return (
                            <Card 
                                key={index} 
                                id={robots[index].id} 
                                name={robots[index].name} 
                                email={robots[index].email} 
                            />
                        );
                    })
                }   
            </div>
        </>
    );
}

export default CardList;