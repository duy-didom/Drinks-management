import React from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function Details() {
    let a = localStorage.getItem('code');
    let b = localStorage.getItem('name');
    let c = localStorage.getItem('quantity');
    let d = localStorage.getItem('price')

    return (
        <div class="center">
            <div class="card">

                <div class="card-body">
                    <h5 class="card-title"><h2>Code:{a}</h2></h5>
                    <p class="card-text">Tên sản phẩm:{b} </p>
                    <p class="card-text">Số lượng sản phẩm:{c} </p>
                    <p class="card-text">Đơn giá sản phẩm:{d} </p>
                    <div>
                        <Button variant='warning' size='lg' href='/'>Back to Home</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details