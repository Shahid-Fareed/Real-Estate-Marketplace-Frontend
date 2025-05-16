import React, { useState, useEffect } from 'react';
import MyHelmet from '../../components/MyHelmet';
import Sidebar from '../../components/dashboard/Sidebar';
import PageTitle from '../../components/dashboard/PageTitle';
import Footer from '../../components/dashboard/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import PackageServices from '../../services/dashboard/packageServices';
import OrderServices from '../../services/dashboard/orderServices';

interface PackageDetails {
    price: number;
    name: string;
    id: number;
}

const SelectPayment: React.FC = () => {
    const navigate = useNavigate();
    const params = useParams<{ id: string }>();
    const paramId = parseInt(params?.id || '');
    const [packageDetails, setPackageDetails] = useState<PackageDetails | null>(null);


    let userId: number | null = null;
    const authUser = localStorage.getItem("authUser");
    if (authUser) {
        const parsedAuthUser: { id: number }[] = JSON.parse(authUser);
        if (Array.isArray(parsedAuthUser) && parsedAuthUser.length > 0) {
            userId = parsedAuthUser[0].id;
        }
    }

    const getPackageDetail = () => {
        let body = null;
        PackageServices.getPackageDetails(body, paramId)
            .then((res) => {
                const data = res.data[0];
                setPackageDetails(data);
            })
            .catch((err) => {
                console.log('error on package details', err);
            });
    };

    useEffect(() => {
        getPackageDetail();
    }, []);

    const handleOrder = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const body = {
            user_id: userId,
            package_id: packageDetails?.id,
            package_price: packageDetails?.price,
            payment_method: 'PayPal',
        };
        OrderServices.createOrder(body)
            .then((res) => {
                navigate('/order-history');
            })
            .catch((err) => {
                console.log('Error on creating order:', err);
            });
    };

    return (
        <>
            <MyHelmet title="Advertisement" />
            <Sidebar />
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                        <div className="row">
                            <PageTitle pagename="Advertisement" />
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <span className='fw-bold'>Payment Method</span>
                                                <div className="card">
                                                    <div className="accordion" id="accordionExample">
                                                        <div className="accordion-item">
                                                            <div className="">
                                                                <div className="card-header p-0" id="headingOne">
                                                                    <h2 className="mb-0">
                                                                        <button
                                                                            className="accordion-button btn btn-light btn-block text-left collapsed p-3 rounded-0 border-bottom-custom"
                                                                            type="button"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#collapseOne"
                                                                            aria-expanded="true"
                                                                            aria-controls="collapseOne"
                                                                        >
                                                                            <div className="d-flex align-items-center justify-content-between">
                                                                                <span>Paypal</span>
                                                                                <img src="https://i.imgur.com/7kQEsHU.png" width={30} alt="" />
                                                                            </div>
                                                                        </button>
                                                                    </h2>
                                                                </div>
                                                                <div
                                                                    id="collapseOne"
                                                                    className="accordion-collapse collapse show"
                                                                    aria-labelledby="headingOne"
                                                                    data-bs-parent="#accordionExample"
                                                                >
                                                                    <div className="accordion-body">
                                                                        <div className="card-body">
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                placeholder="Paypal email"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="accordion-item">
                                                            <div className="">
                                                                <div className="card-header p-0" id="headingTwo">
                                                                    <h2 className="mb-0">
                                                                        <button
                                                                            className="accordion-button btn btn-light btn-block text-left collapsed p-3 rounded-0 border-bottom-custom"
                                                                            type="button"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#collapseTwo"
                                                                            aria-expanded="true"
                                                                            aria-controls="collapseTwo"
                                                                        >
                                                                            <div className="d-flex align-items-center justify-content-between">
                                                                                <span>Credit card</span>
                                                                                <div className="icons">
                                                                                    <img src="https://i.imgur.com/2ISgYja.png" width={30} alt="" />
                                                                                    <img src="https://i.imgur.com/W1vtnOV.png" width={30} alt="" />
                                                                                    <img src="https://i.imgur.com/35tC99g.png" width={30} alt="" />
                                                                                    <img src="https://i.imgur.com/2ISgYja.png" width={30} alt="" />
                                                                                </div>
                                                                            </div>
                                                                        </button>
                                                                    </h2>
                                                                </div>
                                                                <div
                                                                    id="collapseTwo"
                                                                    className="accordion-collapse collapse"
                                                                    aria-labelledby="headingTwo"
                                                                    data-bs-parent="#accordionExample"
                                                                >
                                                                    <div className="accordion-body">
                                                                        <div className="card-body payment-card-body">
                                                                            <span className="font-weight-normal card-text">Card Number</span>
                                                                            <div className="inputi">
                                                                                <input
                                                                                    type="text"
                                                                                    className="form-control"
                                                                                    placeholder="0000 0000 0000 0000"
                                                                                />
                                                                            </div>
                                                                            <div className="row mt-3 mb-3">
                                                                                <div className="col-md-6">
                                                                                    <span className="font-weight-normal card-text">
                                                                                        Expiry Date
                                                                                    </span>
                                                                                    <div className="input">
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control"
                                                                                            placeholder="MM/YY"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-6">
                                                                                    <span className="font-weight-normal card-text">CVC/CVV</span>
                                                                                    <div className="input">
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <span className="text-muted certificate-text">
                                                                                <i className="fa fa-lock" /> Your transaction is secured with
                                                                                ssl certificate
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <span className='fw-bold'>Order Summary</span>
                                                <div className="card">
                                                    <div className="d-flex justify-content-between p-3">
                                                        <div className="d-flex flex-column">
                                                            <span>
                                                                {packageDetails?.name}
                                                            </span>
                                                        </div>
                                                        <div className="mt-1">
                                                            <sup className="super-price">Rs {packageDetails?.price}</sup>
                                                            {/* <span className="super-month">/Month</span> */}
                                                        </div>
                                                    </div>
                                                    <hr className="mt-0 line" />
                                                    <div className="p-3 d-flex justify-content-between">
                                                        <div className="d-flex flex-column">
                                                            <span>Today you pay</span>
                                                            {/* <small>After 30 days $9.59</small> */}
                                                        </div>
                                                        <span>Rs {packageDetails?.price}</span>
                                                    </div>
                                                    <div className="p-3 text-end">
                                                        <button onClick={(e) => handleOrder(e)} className="btn btn-primary glow">
                                                            Proceed To Payment
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SelectPayment;
