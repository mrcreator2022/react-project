import React, { useState } from "react"
import {} from 'react-router-dom'

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = userHistory();

    async function singUp() {
        let item = { name, password, email }
            // console.warn(item)
        let result = await fetch("http://localhost:8000/api/register", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        })
        result = await result.json();
        console.warn("result", result);
        localStorage.setItem("user-info", JSON.stringify(result));
        history.push("/add")

    }

    return ( <
        div className = "col-sm-6 offset-sm-3" >
        <
        h1 > User Sign up < /h1> 

        <
        form className = "demoForm" >
        <
        h2 > Sign up < /h2>  <
        div className = "form - group" >
        <
        label htmlFor = "name" > Name < /label> <
        input type = "text"
        className = "form - control"
        name = "name" / value = "{name}"
        onChange = {
            (e) =>
            setName(e.target.value)
        } > < /h2> <
        div className = "form - group" >
        <
        label htmlFor = "email" > Email address < /label> <
        input type = "email"
        className = "form - control"
        name = "email"
        value = "{email}"
        onChange = {
            (e) =>
            setEmail(e.target.value)
        }
        / > < /
        div > <
        div className = "form - group" >
        <
        label htmlFor = "password" > Password < /label> <
        input type = "password"
        className = "form - control"
        name = "password"
        value = "{password}"
        onChange = {
            (e) =>
            setPassword(e.target.value)
        }
        / > < /
        div > <
        button type = "submit"
        className = "btn btn - primary"
        onClick = { singUp } >
        Sign up <
        /button> < /
        form > <
        /div >
    )
}

export default Register