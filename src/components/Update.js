import React, { useEffect, useState } from "react";
import { Button, Form, FormLabel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import product from "./data";

function Update() {

    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setprice] = useState('');

    let history = useNavigate();

    var index = product.map(function (e) { return e.code; }).indexOf(code);
    const handelSubmit = (e) => {
        e.preventDefault();
        let a = product[index]

        a.code = code;
        a.name = name;
        a.price = price;
        a.quantity = quantity;
        history('/')
    }
    useEffect(() => {
        setCode(localStorage.getItem('code'))
        setName(localStorage.getItem('name'))
        setprice(localStorage.getItem('price'))
        setQuantity(localStorage.getItem('quantity'))

    }, [])
    return (
        <div className="edit">
            <h1>Chỉnh sửa sản phẩm</h1>
            <Button variant='success' size='lg' href='/'>Back to Home</Button>
            <Form>
                <FormLabel>Mã sản phẩm</FormLabel>
                <Form.Group>

                    <Form.Control value={code} readonly="readonly"
                        type="text" placeholder="Enter code" />
                </Form.Group>
                <FormLabel>Tên sản phẩm</FormLabel>
                <Form.Group>

                    <Form.Control value={name}
                        onChange={e => setName(e.target.value)}
                        type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group>
                    Đơn giá
                    <Form.Control value={price}
                        onChange={e => setprice(e.target.value)}
                        type="text" placeholder="Enter price" />
                </Form.Group>
                <Form.Group>
                    Số lượng
                    <Form.Control value={quantity}
                        onChange={e => setQuantity(e.target.value)}
                        type="text" placeholder="Enter quantity" />
                </Form.Group>

                <Button onClick={e => handelSubmit(e)}
                    variant="warning" type="submit" size="lg">
                    Cập nhật
                </Button>

            </Form>
        </div>
    )

}
export default Update