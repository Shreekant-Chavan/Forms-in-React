import { useState } from "react";

export default function Form() {

    let [fullName, setFullName] = useState("");

    let handleNameChange = (event) => {
        // console.log(event.target.value);
        setFullName(event.target.value);
    }

    return (
        <form>
            <label htmlFor="username">Enter Name</label>
            <input placeholder="Enter Full Name" type="text" value={fullName} onChange={handleNameChange} id="username" ></input>
            <button>Submit</button>
        </form>
    )
}