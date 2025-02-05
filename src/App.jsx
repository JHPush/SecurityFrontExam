import { Link, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Logout from './components/Logout';
import { useSelector } from 'react-redux';
import Item from './components/Item';

function App() {

    const email = useSelector(state => state.loginSlicer.email)
    console.log("email :", email)

    return (
        <>
            <div>
                <Link to={'/'}>Home</Link>&nbsp;
                <Link to={'/item'}>Item</Link>&nbsp;
                {
                    !email ? <Link to={'/login'}>Login</Link> : <Link to={'/logout'}>Logout</Link>
                }


            </div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/item' element={<Item />} />
                <Route path='/login' element={<Login />} />
                <Route path='/logout' element={<Logout />} />
            </Routes>
        </>
    )
}

export default App;
