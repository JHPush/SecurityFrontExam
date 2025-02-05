import { useRef, useState } from 'react';
import './Login.css'
// import { postLogin } from '../API/security';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import ResultModal from './ResultModal';
import { useDispatch } from 'react-redux';
import { /*login,*/ loginPostAsync } from '../slice/loginSlicer';

const initForm = {
    email: '',
    password: ''
}

const Login = () => {
    const [loginform, setLoginForm] = useState({ ...initForm });
    const navi = useNavigate()
    const [result, setResult] = useState(null);
    const dispatch = useDispatch();

    const closeModal = () => {
        if (result == 'Go') {
            // dispatch(login(loginform)) // login 액션 객체 생성하는 함수
            navi('/', { replace: true })
        }
        setResult(null)
    }

    const handleOnChange = (e) => {
        setLoginForm({ ...loginform, [e.target.name]: e.target.value })
    }
    const handleOnClick = (e) => {
        if (!loginform.email) {
            alert('이메일을 입력하세요')
            return;
        }
        else if (!loginform.password) {
            alert('패스워드를 입력하세요')
            return;
        }

        dispatch(loginPostAsync(loginform))
            .unwrap() // 비동기 작업 결과를 Promise 형태로 변환
            .then(data => {
                console.log('data : ', data);
                (data.error) ? setResult('Fail') : setResult('Go')
            })
            .catch(e => {
                setResult('Fail')
                console.log('request error : ', e)
            })
    }
    // const handleOnClick = (e)=>{
    //     if(!loginform.email){
    //         alert('이메일을 입력하세요')
    //         return;
    //     }
    //     else if(!loginform.password){
    //         alert('패스워드를 입력하세요')
    //         return;
    //     }
    //     else{
    //         postLogin(loginform).then((data)=>{
    //             console.log(data);
    //             (data.error)?setResult('Fail') : setResult('Go')                
    //         }).catch((e)=>{
    //             setResult('Fail')
    //             console.log('request error : ', e)
    //         })
    //     }
    // }


    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <Form>
                    <label htmlFor="email">Email:</label>
                    <Form.Control type="text" name="email" placeholder="Enter your email" value={loginform.email} onChange={handleOnChange} />
                    <label htmlFor="password">Password:</label>
                    <Form.Control type="password" name='password' placeholder="Enter your Password" value={loginform.password} onChange={handleOnChange} />
                    <button type="button" onClick={handleOnClick}>Login</button>
                </Form>
            </div>
            {result == null ? <></> : result == 'Go' ? <ResultModal title={'로그인'} contents={'성공'} callbackFn={closeModal} /> : <ResultModal title={'로그인'} contents={'실패'} callbackFn={closeModal} />}
        </div>
    );
};


export default Login;