import React,{ createContext , useReducer } from "react"
import AxiosWithAuth from "./utils/AxiosWithAuth"


export const FriendListContext = createContext()





export const FriendListReducer = (state,action) => {
    switch(action.type){
        case "FETCH_FRIENDS":
                return{
                    ...state,
                    friendList: action.payload
                }
        case "ADD_FRIEND":
                return{
                    ...state,
                    friendList: action.payload
                }
                default:
                    return state
                }
            }

            
        export const FriendListState = ({children}) => {
                
                const initialState = {
                    friendList: [],
                }
                
                const [state,dispatch] = useReducer(FriendListReducer,initialState)
                
                const getFriends = () => {
                    AxiosWithAuth().get("/api/friends").then(res=>dispatch({type: "FETCH_FRIENDS" , payload: res.data})).catch(err=>console.log(err))
                }
                
                const addFriend = (obj) => {
                    AxiosWithAuth().post('/api/friends',obj).then(res=>dispatch({type: "ADD_FRIEND" , payload: res.data})).catch(err=>console.log(err))
                }
                return (
                    <FriendListContext.Provider value={{
                        friendList: state.friendList,
                        getFriends,
                        addFriend
                    }}>
                    {children}
                    </FriendListContext.Provider>
                    )
                }
            export default FriendListState