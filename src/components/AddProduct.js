import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {

    let navigate=useNavigate()

    const[pro, setProd]=useState({name:"", cost:""})

    const{name,cost}=pro;

    const onInputChange =(e)=>{
        setProd({...pro,[e.target.name]:e.target.value});
    }

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/item", pro)
        navigate("/")

    }



    return (
        <div>
            <h4>Add a new Product</h4>
            <form onSubmit={(e)=>onSubmit(e)}>
                <div>
                    <label for="name">Name: </label>
                    <input type='text' id='name' name='name' value={name} onChange={(e)=>onInputChange(e)}></input>
                </div>
                <div>
                    <label for="cost">Cost: </label>
                    <input type='number' id='cost' name='cost' value={cost} onChange={(e)=>onInputChange(e)}></input>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>

        </div>
    );
}