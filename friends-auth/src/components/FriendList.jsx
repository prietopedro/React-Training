import React,{useState,useEffect} from 'react'
import FriendsForm from "./FriendsForm"

import AxiosWithAuth from "../utils/AxiosWithAuth"

export default function FriendList() {
    const [friendList , setFriendList] = useState([])
    useEffect(()=>{
        AxiosWithAuth().get("/api/friends").then(res=>setFriendList(res.data)).catch(err=>console.log(err))
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
