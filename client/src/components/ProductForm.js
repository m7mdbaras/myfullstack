import React, { useState } from 'react'
import axios from 'axios'

export default () => {
    //keep track of what is being typed via useState hook
    const [titel, setTitel] = useState(""); 
    const [price, setPrice] = useState("");
    const [ description, setDescription] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/product', {
            titel,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label> titel</label><br/>
                <input type="text" onChange = {(e)=>setTitel(e.target.value)}/>
            </p>
            <p>
                <label>price</label><br/>
                <input type="text" onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>description</label><br/>
                <input type="text" onChange = {(e)=>setDescription(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}