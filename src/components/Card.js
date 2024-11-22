import React from "react";

// destructuring : need not be in the same order
const Card = ({id, name, email, linkedin, username}) => {
    return (
        // since this is JSX we use className insted of class
        <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
            <img alt="friends" src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <a href={linkedin}> {username}</a>
            </div>
        </div>
        
    );
}

export default Card; 
// we can only export one default 
// since it is default, we can simply import without destructuring