import { useEffect, useState } from "react";
import { getItems } from "../API/itemApi";

const Item = ()=>{
    const [item, setItem] = useState([])
    useEffect(()=>{
        getItems().then(data=>{
            
        }).catch(e=>{
            console.log("error : ", e)
        });
    },[])
    return(
        <>
        <h1>상품조회 페이지</h1>
        </>
    )
}

export default Item;