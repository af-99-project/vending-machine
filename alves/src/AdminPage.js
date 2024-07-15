import React, { useState, useEffect } from "react";
import styled from "styled-components";

const AdminPage = ({ products, setProducts }) => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: null,
    });

    const [password, setPassword] = useState("");
    const [showAdminPage, setShowAdminPage] = useState(false);
    const [error, setError] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // 눈 모양 버튼 클릭으로 비밀번호 보기 여부 제어

    useEffect(() => {
        if (password.toLowerCase() === "알베스" || password.toLowerCase() === "alves") {
            setShowAdminPage(true);
            setError(false);
        } else if (password.toLowerCase() === "노벨" || password.toLowerCase() === "nobel") {
            setShowAdminPage(false);
            setError(false);
        } else {
            setShowAdminPage(false);
            setError(false);
        }
    }, [password]);

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

            // Logging the product before adding to state
            console.log("Adding product:", product);

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

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            {showAdminPage ? (
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
            ) : (
                <PasswordPage>
                    <h2>SOOP에서 가장 섹시한 남자를 입력하세요</h2>
                    <PasswordInput
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <TogglePasswordButton onClick={togglePasswordVisibility}>
                        {showPassword ? "숨기기" : "보이기"}
                    </TogglePasswordButton>
                    {error && <ErrorMessage>잘못된 비밀번호입니다</ErrorMessage>}
                    {password.toLowerCase() === "노벨" || password.toLowerCase() === "nobel" ? (
                        <NobelMessage>노벨이라고 했습니까? 미쳤습니까 닝겐!</NobelMessage>
                    ) : null}
                </PasswordPage>
            )}
        </>
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

const PasswordPage = styled.div`
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f0f0f0;
`;

const PasswordInput = styled.input`
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-top: 10px;
    width: 100%;
`;

const TogglePasswordButton = styled.button`
    padding: 6px 12px;
    font-size: 14px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 5px;

    &:hover {
        background-color: #0056b3;
    }
`;

const ErrorMessage = styled.div`
    color: red;
    margin-top: 5px;
`;

const NobelMessage = styled.div`
    color: red;
    margin-top: 10px;
    font-weight: bold;
`;

export default AdminPage;
