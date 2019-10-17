import React from "react";

function Welcome(props){
    
    return(
        <div>
            <h1>HEY</h1>
            {props.users.map((user)=> (<h1>WELCOME {user.firstName}</h1>)
            )}
        </div>
    )
};
export default Welcome;