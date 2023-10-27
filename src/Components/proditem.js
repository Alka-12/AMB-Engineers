// import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt } from 'react-icons/fa';
import React from "react";
import "./common.css";
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function MyVerticallyCenteredModal(props) {
    // const name =p
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Product Description</h4>
                <p>
                    {props.description}
                </p>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    );
}


function Items(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (

        <div className='productList'>
            <div key={props.id} className='productCard' onClick={() => setModalShow(true)}>
                <img src={props.image} alt='product-img' className='productImage'></img>



                {/* <FaShoppingCart className={"productCard__cart"} />
                <FaRegBookmark className={"productCard__wishlist"} />
                <FaFireAlt className={"productCard__fastSelling"} /> */}



                <div className='productCard__content'>
                    <h3 className='productName'>{props.name}</h3>


                    {/* =======================================================================================

                    <div className='displayStack__1'>
                        <div className='productPrice'>${props.price}</div>
                        <div className='productSales'>{props.totalSales} units sold</div>
                    </div>
                    <div className='displayStack__2'>
                        <div className='productRating'>
                            {[...Array(props.rating)].map((index) => (
                                <FaStar id={index + 1} key={index} />
                            ))}
                        </div>
                        <div className='productTime'>{props.timeLeft} days left</div>
                    </div>

                    ======================================================================================= */}


                </div>

            </div>
            <MyVerticallyCenteredModal
                show={modalShow}
                name={props.name}
                description={props.desc}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}

export default Items;