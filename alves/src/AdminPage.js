// AdminPage.js

import React, { useState, useEffect } from "react";
import {
    AdminPageContainer,
    ProductForm,
    AddProductButton,
    PasswordPageContainer,
    PasswordInput,
    TogglePasswordButton,
    SubmitButton,
    ErrorMessage,
    ProductListContainer,
    ProductItem,
    ModalOverlay,
    Modal,
    CloseButton,
    ModalImage,
    ThunderAnimation, // ThunderAnimation 스타일 import
    ImagePreview, // ImagePreview 스타일 import 추가
} from "./AdminPageStyles";

const AdminPage = ({ products, setProducts }) => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: null,
    });

    const [password, setPassword] = useState("");
    const [showAdminPage, setShowAdminPage] = useState(false);
    const [error, setError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [imageURL, setImageURL] = useState(null);
    const [modalImage, setModalImage] = useState(null); // 모달 이미지 상태 추가
    const [showThunder, setShowThunder] = useState(false); // 천둥번개 애니메이션 상태 추가

    useEffect(() => {
        // 비밀번호를 묻는 페이지를 처음 렌더링 시에만 보여주도록 설정
        if (!showAdminPage) {
            setShowAdminPage(false);
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setNewProduct({ ...newProduct, image: file });
        setImageURL(URL.createObjectURL(file));
    };

    const handleAddProduct = () => {
        if (newProduct.name && newProduct.price && newProduct.image) {
            const nextId = products.length > 0 ? products[products.length - 1].id + 1 : 1;
            const product = {
                id: nextId,
                name: newProduct.name,
                price: parseInt(newProduct.price),
                image: imageURL,
            };

            // 기존 상품 목록에 새로운 상품 추가
            const updatedProducts = [...products, product];
            setProducts(updatedProducts);

            // 입력 필드 초기화
            setNewProduct({
                name: "",
                price: "",
                image: null,
            });
            // 이미지 URL 초기화
            setImageURL(null);

            console.log("Product added: ", product);
            console.log("Updated products: ", updatedProducts);

            // 비밀번호 입력 페이지로 돌아가기
            setShowAdminPage(false);
        } else {
            alert("Please fill out all fields.");
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEnterKeyPress = (e) => {
        // 엔터키를 눌렀을 때도 확인되도록 처리
        if (e.key === "Enter") {
            validatePassword();
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const validatePassword = () => {
        if (password === 'alves' || password === '알베스') {
            setShowAdminPage(true);
            setError(false);
        } else if (password === 'nobel' || password === '노벨') {
            setError(false);
            setShowThunder(true); // 천둥번개 애니메이션 활성화
            setTimeout(() => {
                alert("노벨이라고 말한 당신, 미쳤습니까?");
                setShowThunder(false); // 천둥번개 애니메이션 비활성화
            }, 1500); // 애니메이션 지속 시간
        } else {
            setError(true);
        }
    };

    const handlePreviewImageClick = () => {
        // 미리보기 이미지 클릭 시 모달에 이미지 표시
        setModalImage(imageURL);
    };

    const closeModal = () => {
        // 모달 닫기
        setModalImage(null);
    };

    const handleProductClick = (product) => {
        // 클릭한 상품을 크게 확대해서 보여주는 기능
        setModalImage(product.image);
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
                            {imageURL && (
                                <ImagePreview
                                    src={imageURL}
                                    alt="Product Preview"
                                    onClick={handlePreviewImageClick} // 미리보기 이미지 클릭 이벤트 추가
                                />
                            )}
                        </div>
                        <AddProductButton onClick={handleAddProduct}>
                            상품 추가
                        </AddProductButton>
                    </ProductForm>
                </AdminPageContainer>
            ) : (
                <PasswordPageContainer>
                    <h2>SOOP 속에 사는 섹시하면서도 상남자의 닉네임은?</h2>
                    <PasswordInput
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={handlePasswordChange}
                        onKeyPress={handleEnterKeyPress}
                    />
                    <TogglePasswordButton onClick={togglePasswordVisibility}>
                        {showPassword ? "숨기기" : "보이기"}
                    </TogglePasswordButton>
                    <SubmitButton onClick={validatePassword}>확인</SubmitButton>
                    {error && <ErrorMessage>잘못된 비밀번호입니다</ErrorMessage>}
                </PasswordPageContainer>
            )}

            {/* 천둥번개 애니메이션 */}
            {showThunder && <ThunderAnimation />}

            {/* 확대된 이미지 모달 */}
            {modalImage && (
                <ModalOverlay onClick={closeModal}>
                    <Modal>
                        <CloseButton onClick={closeModal}>X</CloseButton>
                        <ModalImage src={modalImage} alt="Enlarged Product Preview" />
                    </Modal>
                </ModalOverlay>
            )}

            {/* 상품 목록 확인용 */}
            <ProductListContainer>
                <h2>상품 목록</h2>
                {products.map((product) => (
                    <ProductItem key={product.id} onClick={() => handleProductClick(product)}>
                        <p>상품명: {product.name}</p>
                        <p>가격: {product.price}</p>
                        <img src={product.image} alt={product.name} style={{ maxWidth: "100px" }} />
                    </ProductItem>
                ))}
            </ProductListContainer>
        </>
    );
};

export default AdminPage;
