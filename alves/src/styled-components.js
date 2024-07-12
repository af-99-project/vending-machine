import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e5e5ff;
`;

export const VendingMachine = styled.div`
  display: flex;
  background: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
`;

export const ProductSection = styled.div`
  padding: 20px;
  width: 350px;
  border-right: 1px solid #ddd;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid ${props => (props.soldOut ? 'blue' : '#ddd')};
  padding: 10px;
  border-radius: 10px;
  background: ${props => (props.soldOut ? '#eee' : '#fff')};
  opacity: ${props => (props.soldOut ? 0.6 : 1)};
  position: relative;
`;

export const SoldOutOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  border-radius: 10px;
`;

export const ProductImage = styled.img`
  width: 50px;
  height: 100px;
`;

export const ProductName = styled.div`
  margin-top: 10px;
  font-weight: bold;
  text-align: center;
`;

export const ProductPrice = styled.div`
  margin-top: 5px;
  color: #333;
`;

export const Button = styled.button`
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

export const PurchaseSection = styled.div`
  padding: 20px;
  width: 300px;
`;

export const Balance = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: right;
`;

export const InputSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 60%;
  font-size: 16px;
`;

export const AcquiredDrinksTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  text-align: right;
`;

export const PurchasedItemList = styled.div`
  margin-top: 20px;
`;

export const PurchasedItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 5px 0;
  border-bottom: 1px solid #ddd;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
`;

export const Quantity = styled.span`
  font-size: 18px;
  margin: 0 10px;
`;

export const Total = styled.div`
  margin-top: 20px;
  font-weight: bold;
  text-align: right;
`;
