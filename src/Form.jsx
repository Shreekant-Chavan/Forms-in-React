import { useState } from "react";

export default function Form() {

    let [formData, setFormData] = useState({
        fullName : "",
        userName : "",
        password : ""
    })

    // let [fullName, setFullName] = useState("");
    // let [userName, setUserName] = useState("");

    // let handleNameChange = (event) => {
    //     // console.log(event.target.value);
    //     setFullName(event.target.value);
    // }

    // let handleUserName = (event) => {
    //     setUserName(event.target.value);
    // }

    let handleInputChange = (event) => {
        // let fieldName = event.target.name;
        // let newValue = event.target.value; First & Second Way 1, 2, 3

        // setFormData( (currData) => {
        //     currData[fieldName] = newValue;
        //     return {...currData};
        // }) One Way 1

        // setFormData( (currData) => {
        //     return {...currData, [fieldName] : [newValue]};
        // }) Second Way 2

        setFormData( (currData) => {
            return {...currData, [event.target.name] : event.target.value};
        })
    }


    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
        setFormData({
            fullName : "",
            userName : "",
            password : "",
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Enter Name</label>
            <input placeholder="Enter Full Name" type="text" value={formData.fullName} onChange={handleInputChange} id="fullname" name="fullName" ></input>
            <br /> <br />
            <label htmlFor="username">User Name</label>
            <input placeholder="Enter Username" type="text" value={formData.userName} onChange={handleInputChange} id="username" name="userName" />
            <br /> <br />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter Password" value={formData.password} onChange={handleInputChange} id="password" name="password" />
            <br /><br />
            <button>Submit</button>
        </form>
    )
}