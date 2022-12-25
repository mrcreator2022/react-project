// import logo from './logo.svg';
import './App.css';
// import { Button } from 'react-bootstrap'
import Header from './Header'
import Login from './Login'
// import Register from './Register'
// import AddProduct from './AddProduct'
// import UpdateProduct from './UpdateProduct'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
    return ( <
        div className = "App" >
        <
        Router >
        <
        Header / >
        <
        h1 > Ecommerce Project < /h1>   <
        Route path = "/login" > < Login / > < /Route>  < /
        Router > <
        /div>
    );
}

export default App;