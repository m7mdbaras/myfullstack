import { navigate } from "@reach/router"
import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default props => {
    const { id } = props;
    const [titel, setTitel] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitel(res.data.titel);
                setPrice(res.data.price);
            })
    }, [])
    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            titel,
            price,
            description
        })
            .then((res) => {
                console.log(res)
                // navigate to /product/:id
                navigate(`/product/${id}`)
            })
    }
    return (
        <div>
            <h1>Update a PupdateProduct</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>titel</label><br />
                    <input type="text"
                        name="titel"
                        value={titel}
                        onChange={(e) => { setTitel(e.target.value) }} />
                </p>
                <p>
                    <label>price</label><br />
                    <input type="text"
                        name=" price"
                        value={price}
                        onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>description</label><br />
                    <input type="text"
                        name=" description"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}