import React from 'react'
import { Button, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";
import myproducts from './data';

function Index() {
    let history = useNavigate()

    function deleteItem(code) {
        var index = myproducts.map(function (e) {
            return e.id
        }).indexOf(code);
        myproducts.splice(index, 1);
        history('/');
    }
    function setDataStorage(_code, _name, _quantity, _price) {
        localStorage.setItem('code', _code);
        localStorage.setItem('name', _name);
        localStorage.setItem('quantity', _quantity);
        localStorage.setItem('price', _price);
    }
    return (

        <div>
            <div id='left'>
                <h3>Danh sách sản phẩm</h3>
                <p>Tổng cộng có:  </p>
                <Link to="/Create">
                    <Button variant="warning" size="lg" >Tạo mới</Button>
                </Link>
            </div>
            <Table striped border hover size="sm" align='center'>
                <thead>
                    <tr>
                        <th>Tên sản phẩm</th>
                        <th>Đơn giá</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {myproducts.map((item) => {
                        return (
                            <tr>
                                {item.counter} 
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td><Link to={'/details'}>
                                    <Button variant='btn btn-info'onClick={e => setDataStorage(item.code, item.name, item.quantity, item.price)}>Chi tiết</Button>
                                </Link>

                                </td>
                                <td>
                                    <Link to={'/update'}>
                                        <Button variant='btn btn-warning'>Chỉnh sửa</Button>
                                    </Link>
                                </td>
                                <td onClick={e => deleteItem(item.code)}><Button variant='btn btn-danger'>Xóa</Button></td>

                            </tr>
                        )
                    })}
                </tbody>
            </Table>

        </div>
    )
}
export default Index