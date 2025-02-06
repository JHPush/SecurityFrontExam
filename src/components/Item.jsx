import { useEffect, useState } from "react";
import { getItems } from "../API/itemApi";
import { createSearchParams, useNavigate } from "react-router-dom";

const Item = () => {
    const [item, setItem] = useState([])
    const navi = useNavigate();
    useEffect(() => {
        getItems().then(data => {
            console.log('data : ', data);
            setItem(data.data);
            console.log('item : ', item.data);
        }).catch((e) => {
            const err = e.response.data.error;
            const queryStr = createSearchParams({ error: err }).toString()
            
            if (err == 'ERROR_ACCESS_DENIED') {
                alert('권한이 없슴')
                navi({ pathname: '/', search: queryStr })
            }
            else if (err == 'REQUIRED_LOGIN') {
                alert('로그인 하세요')
                navi({ pathname: '/login', search: queryStr })
            }

        });
    }, [])

    return (
        <>
            <h1>상품조회 페이지</h1>
            {
                item.map((i) => {
                    return (
                        <div key={i.id}>
                            <span style={{ margin: '2px' }}> {i.id} </span>
                            <span style={{ margin: '2px' }}> {i.name} </span>
                        </div>
                    );
                })
            }
        </>
    )
}

export default Item;