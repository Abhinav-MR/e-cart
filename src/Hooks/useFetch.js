import { useEffect, useState } from "react"


const useFetch = (url)=>{
const [data,setdata] = useState(null)
    useEffect(()=>{
        fetch(url).then(res=>{
            res.json().then(result=>{
               setdata(result.products)
            })
        })
    },[url]) 
    return data

}

export default useFetch