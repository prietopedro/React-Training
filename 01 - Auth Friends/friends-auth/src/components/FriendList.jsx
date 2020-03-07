import React,{useEffect,useContext} from 'react'
import FriendsForm from "./FriendsForm"
import {FriendListContext} from "../context"

export default function FriendList() {
    const {friendList,getFriends} = useContext(FriendListContext)
    useEffect(()=>{
        getFriends()
    },[])

    return (
        <div>
            <FriendsForm />
            <div>
                {
                    friendList.map(friend=>(
                        <>
                        <h1>{friend.name}</h1>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                        </>
                    ))
                }
            </div>
        </div>
    )
}
