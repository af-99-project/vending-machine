import React, { useState } from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const VendingMachine = styled.div`
  display: flex;
  background: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
`;

const ProductSection = styled.div`
  padding: 20px;
  width: 300px;
  border-right: 1px solid #ddd;
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  border: ${props => props.soldOut ? '2px solid red' : '2px solid #ddd'};
  padding: 10px;
  border-radius: 10px;
  background: ${props => props.soldOut ? '#eee' : '#fff'};
  opacity: ${props => props.soldOut ? 0.6 : 1};
`;

const ProductImage = styled.img`
  width: 50px;
  height: 100px;
`;

const ProductName = styled.div`
  margin-top: 10px;
  font-weight: bold;
`;

const ProductPrice = styled.div`
  margin-top: 5px;
  color: #333;
`;

const Button = styled.button`
  background: #6200ee;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  &:disabled {
    background: #ddd;
    cursor: not-allowed;
  }
`;

const PurchaseSection = styled.div`
  padding: 20px;
  width: 300px;
`;

const Balance = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
`;

const PurchasedItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Total = styled.div`
  margin-top: 20px;
  font-weight: bold;
`;

function App() {
  const [balance, setBalance] = useState(25000);
  const [items, setItems] = useState([
    { id: 1, name: 'Original_Cola', price: 1000, soldOut: false, quantity: 1 },
    { id: 2, name: 'Yellow_Cola', price: 1000, soldOut: false, quantity: 0 },
    { id: 3, name: 'Cool_Cola', price: 1000, soldOut: false, quantity: 0 },
    { id: 4, name: 'Green_Cola', price: 1000, soldOut: false, quantity: 2 },
    { id: 5, name: 'Orange_Cola', price: 1000, soldOut: false, quantity: 1 },
    { id: 6, name: 'Violet_Cola', price: 1000, soldOut: true, quantity: 5 },
  ]);
  const [purchased, setPurchased] = useState([]);

  const handlePurchase = (item) => {
    if (balance >= item.price && !item.soldOut) {
      setBalance(balance - item.price);
      setPurchased([...purchased, item]);
    }
  };

  return (
    <AppContainer>
      <VendingMachine>
        <ProductSection>
          {items.map(item => (
            <Product key={item.id} soldOut={item.soldOut}>
              <ProductImage src={`/images/${item.name}.png`} alt={item.name} />
              <ProductName>{item.name}</ProductName>
              <ProductPrice>{item.price}원</ProductPrice>
              <Button onClick={() => handlePurchase(item)} disabled={item.soldOut || balance < item.price}>획득</Button>
            </Product>
          ))}
        </ProductSection>
        <PurchaseSection>
          <Balance>소지금: {balance.toLocaleString()}원</Balance>
          <div>
            <h3>획득한 음료</h3>
            {purchased.map((item, index) => (
              <PurchasedItem key={index}>
                <span>{item.name}</span>
                <span>1</span>
              </PurchasedItem>
            ))}
            <Total>총금액: {purchased.reduce((total, item) => total + item.price, 0).toLocaleString()}원</Total>
          </div>
        </PurchaseSection>
      </VendingMachine>
    </AppContainer>
  );
}

export default App;
