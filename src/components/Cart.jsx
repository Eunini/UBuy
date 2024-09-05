import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { delItem } from '../redux/actions/index'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
    const state = useSelector((state) => state.addItem)
    const dispatch = useDispatch()

    const handleClose = (item) => {
        dispatch(delItem(item))
    }

    const cartItems = (cartItem) => {
        return (
            <div className="container py-5" key={cartItem.id}>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card mb-4">
                            <div className="card-body">
                                <button onClick={() => handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
                                <div className="dets">
                                    <div className="col-md-4">
                                        <img src={cartItem.img} alt={cartItem.title} className="img-fluid" />
                                    </div>
                                    <div className="col-md-4">
                                        <h3 className='lead fw-bold'>{cartItem.title}</h3>
                                        <p className="lead fw-bold">${cartItem.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const emptyCart = () => {
        return (
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="alert alert-warning" role="alert">
                            Your Cart is Empty
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const button = () => {
        return (
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 justify-content-center align-center flex">
                        <NavLink to="/checkout" className="genbtn btn-primary ">Proceed To Checkout</NavLink>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </>
    )
}

export default Cart