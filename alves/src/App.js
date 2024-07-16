import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Machine from "./machine";
import AdminPage from "./AdminPage";
import VODPage from "./VODPage";
import cola from "./콜라.png";
import styled from "styled-components";

function App() {
    const initialProducts = [
        {
            id: 1,
            name: 'Original_Cola',
            price: 1000,
            image: cola
        }, {
            id: 2,
            name: 'Yellow_Cola',
            price: 1000,
            image: cola
        }, {
            id: 3,
            name: 'Cool_Cola',
            price: 1500,
            image: cola
        }, {
            id: 4,
            name: 'Green_Cola',
            price: 1000,
            image: cola
        }, {
            id: 5,
            name: 'Orange_Cola',
            price: 1000,
            image: cola
        }, {
            id: 6,
            name: 'Violet_Cola',
            price: 1000,
            image: cola
        }
    ];

    const [balance, setBalance] = useState(0);
    const [Cash, setCash] = useState(35000);
    const [inputAmount, setInputAmount] = useState('');
    const [miniPurchasedItems, setMiniPurchasedItems] = useState([]);
    const [mainPurchasedItems, setMainPurchasedItems] = useState([]);
    const [products, setProducts] = useState(initialProducts);

    const StyledImg = styled.img `
        width: 26px;
        height: 35px;
    `;

    return (
        <Router>
            <div className="App">
                <nav className="navbar">
                    <ul className="nav-links">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/admin">Admin</Link>
                        </li>
                        <li>
                            <Link to="/vod">VOD</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route
                        path="/"
                        element={<> < Machine
                        Cash= {
                            Cash
                        }
                        setCash = {
                            setCash
                        }
                        balance = {
                            balance
                        }
                        setBalance = {
                            setBalance
                        }
                        inputAmount = {
                            inputAmount
                        }
                        setInputAmount = {
                            setInputAmount
                        }
                        miniPurchasedItems = {
                            miniPurchasedItems
                        }
                        setMiniPurchasedItems = {
                            setMiniPurchasedItems
                        }
                        mainPurchasedItems = {
                            mainPurchasedItems
                        }
                        setMainPurchasedItems = {
                            setMainPurchasedItems
                        }
                        products = {
                            products
                        }
                        />
                            <div className="money-area">
                                <div className="money-box">
                                    <span>소지금:</span > <span className="strong">{Cash}원</span>
                    </div>
                </div>
                <div className="get-cola-area">
                    <h3 className="strong title">획득한 음료</h3> < div className = "get-cola-box cont" > <ul>
                            {
                                mainPurchasedItems.map((item, index) => (
                                    <li className="cola-box" key={index}>
                                        <em>
                                            <StyledImg src={item.image} alt={item.name}/>
                                        </em>
                                        <span>{item.name}</span>
                                        <strong className="count">{item.quantity}</strong>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </>
                        }
                    />

                    <Route
                        path="/admin"
                        element={<AdminPage products = {
                            products
                        }
                        setProducts = {
                            setProducts
                        } />
}/>
                    <Route path="/vod" element={<VODPage />}/>
                </Routes>

                <footer className="footer">
                    <div className="instagram-link">
                        <a href="https://www.afreecatv.com/">SOOP</a>
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;
