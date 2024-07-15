import React, { useState } from "react";
import styled from "styled-components";

const AdminPage = ({ products, setProducts }) => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setNewProduct({ ...newProduct, image: file });
    };

    const handleAddProduct = () => {
        if (newProduct.name && newProduct.price && newProduct.image) {
            const nextId = products.length > 0 ? products[products.length - 1].id + 1 : 1;
            const product = {
                id: nextId,
                name: newProduct.name,
                price: parseInt(newProduct.price),
                image: URL.createObjectURL(newProduct.image),
            };

            setProducts([...products, product]);

            setNewProduct({
                name: "",
                price: "",
                image: null,
            });
        } else {
            alert("Please fill out all fields.");
        }
    };

    return (
        <AdminPageContainer>
            <h2>자판기 상품 추가 페이지</h2>
            <ProductForm className="product-form">
                <div className="form-group">
                    <label htmlFor="productName">상품명:</label>
                    <input
                        type="text"
                        id="productName"
                        name="name"
                        value={newProduct.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="productPrice">금액:</label>
                    <input
                        type="text"
                        id="productPrice"
                        name="price"
                        value={newProduct.price}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="productImage">상품 이미지:</label>
                    <input
                        type="file"
                        id="productImage"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </div>
                <AddProductButton onClick={handleAddProduct}>
                    상품 추가
                </AddProductButton>
            </ProductForm>
        </AdminPageContainer>
    );
};

const AdminPageContainer = styled.div`
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f0f0f0;
`;

const ProductForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const AddProductButton = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
        background-color: #0056b3;
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

export default AdminPage;
