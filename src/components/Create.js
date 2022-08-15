import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import myproducts from "./data";
import { v4 as uuid } from 'uuid'
import { useNavigate } from "react-router-dom";
function Create() {

    let history = useNavigate()

    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setprice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const uid = uuid();
        let bid = uid.slice(0, 8);

        let a = name, b = quantity, c = price; 

        myproducts.push({ code: bid, name: a, quantity: b, price: c });

        history('/');
    }

    return (
        <div>
            <Form>
                <Button variant='warning' size='lg' href='/'>Back to Home</Button>
                <br></br>
                <span>Mã sản phẩm</span>
                <Form.Group>
                    <Form.Control value={code} onChange={e => setCode(e.target.value)} type="text" placeholder="Enter code" />

                </Form.Group>
                <span>Tên sản phẩm</span>
                <Form.Group>
                    <Form.Control value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Enter name" />

                </Form.Group>
                <span>Số lượng sản phẩm sản phẩm</span>
                <Form.Group>
                    <Form.Control value={quantity} onChange={e => setQuantity(e.target.value)} type="text" placeholder="Enter quantity" />

                </Form.Group>
                <span>Đơn giá sản phẩm</span>
                <Form.Group>
                    <Form.Control value={price} onChange={e => setprice(e.target.value)} type="text" placeholder="Enter price" />

                </Form.Group>

                <Button
                    onClick={e => handleSubmit(e)}
                    variant='warning' size='lg'>Create new product</Button>
            </Form>
        </div>
    )
}

export default Create