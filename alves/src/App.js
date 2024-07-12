import React, { useState } from "react";
import "./App.css";
import "./reset.css";
import cola from "./콜라.png";

function App() {
    const [balance, setBalance] = useState(5000);
    const [inputAmount, setInputAmount] = useState('');
    const [miniPurchasedItems, setMiniPurchasedItems] = useState([]);
    const [mainPurchasedItems, setMainPurchasedItems] = useState([]);
    
    const products = [
        { id: 1, name: 'Original_Cola', price: 1000, image: cola },
        { id: 2, name: 'Yellow_Cola', price: 1000, image: cola },
        { id: 3, name: 'Cool_Cola', price: 1000, image: cola },
        { id: 4, name: 'Green_Cola', price: 1000, image: cola },
        { id: 5, name: 'Orange_Cola', price: 1000, image: cola },
        { id: 6, name: 'Violet_Cola', price: 1000, image: cola }
    ];

    const handleDeposit = () => {
        const amount = parseInt(inputAmount, 10);
        if (!isNaN(amount) && amount > 0) {
            setBalance(balance + amount);
            setInputAmount('');
        }
    };

    const handleReturnChange = () => {
        alert(`${balance}원이 반환되었습니다`);
        setBalance(0);
    };

    const handlePurchase = (product) => {
        if (balance >= product.price) {
            setBalance(balance - product.price);
            setMiniPurchasedItems((prevItems) => {
                const existingItem = prevItems.find(item => item.id === product.id);
                if (existingItem) {
                    return prevItems.map(item =>
                        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                    );
                }
                return [...prevItems, { ...product, quantity: 1 }];
            });
        } else {
            alert("금액이 부족합니다");
        }
    };

    const handleRetrievePurchased = () => {
        if (miniPurchasedItems.length > 0) {
            alert("음료수를 획득하였습니다");
            setMainPurchasedItems((prevItems) => {
                return miniPurchasedItems.reduce((acc, item) => {
                    const existingItem = acc.find(i => i.id === item.id);
                    if (existingItem) {
                        return acc.map(i =>
                            i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
                        );
                    }
                    return [...acc, { ...item }];
                }, prevItems);
            });
            setMiniPurchasedItems([]);
        } else {
            alert("획득할 음료수가 없습니다");
        }
    };

    const handleIncrement = (product) => {
        if (balance >= product.price) {
            setBalance(balance - product.price);
            setMiniPurchasedItems((prevItems) =>
                prevItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        } else {
            alert("금액이 부족합니다");
        }
    };

    const handleDecrement = (product) => {
        const updatedItems = miniPurchasedItems.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
        ).filter((item) => item.quantity > 0);

        // 총 감소한 수량 계산
        const decreasedQuantity = miniPurchasedItems.reduce((total, item) => {
            if (item.id === product.id) {
                return total + 1;
            }
            return total;
        }, 0);

        // 총 감소한 수량만큼 잔액 추가
        if (decreasedQuantity > 0) {
            setBalance((prevBalance) => prevBalance + decreasedQuantity * product.price);
        }

        setMiniPurchasedItems(updatedItems);
    };

    return (
        <div className="App">
            <div className="vending-area">
                <ul className="cola-list">
                    {products.map((product) => (
                        <li className="cola-item" key={product.id}>
                            <em>
                                <img src={product.image} alt={product.name} />
                            </em>
                            <span className="title">{product.name}</span>
                            <strong className="cost" onClick={() => handlePurchase(product)}>{product.price}원</strong>
                        </li>
                    ))}
                </ul>
                <div className="vending-wrap">
                    <div className="money-box">
                        <span>잔액:</span>
                        <span className="strong">{balance}원</span>
                    </div>
                    <button className="change-btn" onClick={handleReturnChange}>거스름돈 반환</button>
                    <div>
                        <input
                            type="text"
                            className="send-input"
                            placeholder="입금액 입력"
                            value={inputAmount}
                            onChange={(e) => setInputAmount(e.target.value)}
                        />
                    </div>
                    <button className="change-btn" onClick={handleDeposit}>입금</button>
                    <div className="get-cola-area-mini">
                        <div className="get-cola-box">
                            <ul>
                                {miniPurchasedItems.map((item, index) => (
                                    <li className="cola-box" key={index}>
                                        <em>
                                            <img src={item.image} alt={item.name} />
                                        </em>
                                        <span>{item.name}</span>
                                        <strong className="count">{item.quantity}</strong>
                                        <button onClick={() => handleIncrement(item)}>+</button>
                                        <button onClick={() => handleDecrement(item)}>-</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <button className="get-btn" onClick={handleRetrievePurchased}>획득</button>
                </div>
            </div>
            <div className="money-area">
                <div className="money-box">
                    <span>소지금:</span>
                    <span className="strong">{balance}원</span>
                </div>
            </div>
            <div className="get-cola-area">
                <h3 className="strong title">획득한 음료</h3>
                <div className="get-cola-box cont">
                    <ul>
                        {mainPurchasedItems.map((item, index) => (
                            <li className="cola-box" key={index}>
                                <em>
                                    <img src={item.image} alt={item.name} />
                                </em>
                                <span>{item.name}</span>
                                <strong className="count">{item.quantity}</strong>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
