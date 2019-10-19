import React,{Component} from 'react';
import UserItem from "./UserItem"

export class Users extends Component {
    state = {
        users: [
            {
                login: "mojombo",
                id: 1,
                html_url: "https://github.com/mojombo",
                avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4"
              },
              {
                login: "defunkt",
                id: 2,
                avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
                html_url: "https://github.com/defunkt",
              },
        ]
    }
    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user=>(<UserItem key={user.id} user={user} />))}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGrap: "1rem"
}

export default Users
