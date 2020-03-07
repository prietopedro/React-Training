import React,{useState,useEffect} from 'react'
import axios from 'axios'
import CoinCard from "./CoinCard"

export default function Coin(props) {
    const [coinData, setCoinData] = useState({})
    const [loading, setLoading] = useState(true)

    let coinName = props.match.params.coin;

    useEffect(()=>{
        setLoading(true)
        axios.get(`https://api.coingecko.com/api/v3/coins/${coinName}`)
        .then(res=>setCoinData(res.data))
        .then(()=>setLoading(false))
        .catch(err=>console.log(err))
    },[coinName])

   console.log(coinData)
    return (
        <div>
        {loading ? (<p>Loading...</p>): <CoinCard coinData={coinData} />}
        
        </div>
    )
}
