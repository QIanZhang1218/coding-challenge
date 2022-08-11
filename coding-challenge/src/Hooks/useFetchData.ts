import {useState, useEffect} from "react"

export const useFetchData = () => {
    const [ data, setData ] = useState<any[]>([]);
    console.log(1)

    // useEffect(() => {
      
    // },[]);

    const fetchData = () =>{
        //fetch data
        fetch("../../data.json",{
            headers: {
                "content-type": "application/json;charset=UTF-8",
              },
        }).then(
            res => res.json()
        ).then(
            jsonData => {
                setData(jsonData);
            }
        )
    }
    fetchData();
    
    return data;
}