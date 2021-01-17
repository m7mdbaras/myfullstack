import { Link } from "@reach/router"
import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default props => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(res => setProduct(res.data))
    }, [])
    return (
        <div>
            <p>titel: {product.titel}</p>
            <p>price: {product.price}</p>
            <p>description: {product.description}</p>
            <Link to={"/product/" + product._id + "/edit"}>
                Edit
</Link>
        </div>
    )
}