import { useDispatch } from "react-redux"
import { logout } from "../slice/loginSlicer";
import { useNavigate } from "react-router-dom";

const Logout =()=>{
    const dispatch = useDispatch();
    const navi = useNavigate();
    const handleClick = ()=>{
        console.log('---- handleClick Logout')
        dispatch(logout())
        navi('/', { replace: true })
    }
    return(
        <>
            <h1> Logout Page </h1>
            <button onClick={handleClick}>로그아웃</button>
        </>
    )
}

export default Logout;