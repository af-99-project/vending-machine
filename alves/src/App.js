import React, { useState } from 'react';
import * as Styled from './styled-components'; // 스타일 컴포넌트 import

function App() {
  const [balance, setBalance] = useState(25000);
  const [inputAmount, setInputAmount] = useState('');
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
      setPurchased((prevPurchased) => {
        const existingItem = prevPurchased.find(p => p.id === item.id);
        if (existingItem) {
          return prevPurchased.map(p =>
            p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
          );
        }
        return [...prevPurchased, { ...item, quantity: 1 }];
      });
    }
  };

  const handleInputAmountChange = (e) => {
    setInputAmount(e.target.value);
  };

  const handleDeposit = () => {
    const amount = parseInt(inputAmount, 10);
    if (!isNaN(amount) && amount > 0) {
      setBalance(balance + amount);
      setInputAmount('');
    }
  };

  const handleReturnChange = () => {
    setBalance(0);
  };

  const handleRetrievePurchased = () => {
    setPurchased([]);
    alert('음료를 뽑았습니다!');
  };

  const handleDecreaseQuantity = (item) => {
    setPurchased((prevPurchased) => {
      const updatedPurchased = prevPurchased.map(p =>
        p.id === item.id ? { ...p, quantity: p.quantity - 1 } : p
      ).filter(p => p.quantity > 0);
      return updatedPurchased;
    });
  };

  const handleIncreaseQuantity = (item) => {
    setPurchased((prevPurchased) => {
      return prevPurchased.map(p =>
        p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
      );
    });
  };

  const totalCost = purchased.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <Styled.AppContainer>
      <Styled.VendingMachine>
        <Styled.ProductSection>
          <Styled.ProductGrid>
            {items.map(item => (
              <Styled.Product key={item.id} soldOut={item.soldOut}>
                <Styled.ProductImage src={`/images/${item.name}.png`} alt={item.name} />
                <Styled.ProductName>{item.name}</Styled.ProductName>
                <Styled.ProductPrice>{item.price}원</Styled.ProductPrice>
                {item.soldOut && <Styled.SoldOutOverlay>품절</Styled.SoldOutOverlay>}
                <Styled.Button onClick={() => handlePurchase(item)} disabled={item.soldOut || balance < item.price}>획득</Styled.Button>
              </Styled.Product>
            ))}
          </Styled.ProductGrid>
        </Styled.ProductSection>
        <Styled.PurchaseSection>
          <Styled.Balance>소지금: {balance.toLocaleString()}원</Styled.Balance>
          <Styled.InputSection>
            <Styled.Input
              type="number"
              placeholder="입금액 입력"
              value={inputAmount}
              onChange={handleInputAmountChange}
            />
            <Styled.Button onClick={handleDeposit}>입금</Styled.Button>
          </Styled.InputSection>
          <Styled.Button onClick={handleReturnChange}>거스름돈 반환</Styled.Button>
          <Styled.AcquiredDrinksTitle>획득한 음료</Styled.AcquiredDrinksTitle>
          <Styled.PurchasedItemList>
            {purchased.map((item, index) => (
              <Styled.PurchasedItem key={index}>
                <span>{item.name}</span>
                <Styled.QuantityControl>
                  <Styled.Button onClick={() => handleDecreaseQuantity(item)}>-</Styled.Button>
                  <Styled.Quantity>{item.quantity}</Styled.Quantity>
                  <Styled.Button onClick={() => handleIncreaseQuantity(item)}>+</Styled.Button>
                </Styled.QuantityControl>
              </Styled.PurchasedItem>
            ))}
            <Styled.Total>총금액: {totalCost.toLocaleString()}원</Styled.Total>
            <Styled.Button onClick={handleRetrievePurchased} disabled={totalCost > balance}>음료 뽑기</Styled.Button>
          </Styled.PurchasedItemList>
        </Styled.PurchaseSection>
      </Styled.VendingMachine>
    </Styled.AppContainer>
  );
}

export default App;
