import {useState, useEffect} from "react"

const location = `../../data.json`

export const useFetchData = () => {
    const [ data, setData ] = useState<any[]>([])

    useEffect(() => {
        const fetchData = async () =>{
            const response = await fetch(location)
            const jsonData = await response.json()
            setData(jsonData.data) 
        }

        fetchData()
        
    },[])
    return data
}