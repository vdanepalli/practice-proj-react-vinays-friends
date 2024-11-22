import React from 'react';
import Card from './Card';

const CardList = ({friends}) => {
    return (
        <div>
            {
                friends.map((user) => {
                    // console.log(user)
                    return (
                        <Card
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            username={user.username}
                            email={user.email}
                            linkedin={user.linkedin}
                        />
                    )  
                })
            }
        </div>
    )
};

export default CardList;