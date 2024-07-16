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
    ThunderAnimation,
    ImagePreview,
    StyledAddMoreButton,
    ProductImage,
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
    const [modalImage, setModalImage] = useState(null);
    const [showThunder, setShowThunder] = useState(false);
    const [isFirstVisit, setIsFirstVisit] = useState(true);
    const [isProductAdded, setIsProductAdded] = useState(false);

    useEffect(() => {
        if (isFirstVisit) {
            setShowAdminPage(false);
        }
    }, [isFirstVisit]);

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

            const updatedProducts = [...products, product];
            setProducts(updatedProducts);

            setNewProduct({
                name: "",
                price: "",
                image: null,
            });
            setImageURL(null);

            setIsProductAdded(true);
            setTimeout(() => {
                setIsProductAdded(false);
            }, 5000); 

            setShowAdminPage(false);
        } else {
            alert("상품명,금액,이미지를 넣어주세요.");
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEnterKeyPress = (e) => {
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
            setIsFirstVisit(false);
            setShowThunder(true); // 
            setTimeout(() => {
                setShowThunder(false); 
                alert("역시 뭘 아는구만"); 
            }, );
        } else if (password === 'nobel' || password === '노벨') {
            setError(false);
            setShowThunder(true);
            setTimeout(() => {
                alert("노벨이라고 말한 당신, 미쳤습니까?");
                setShowThunder(false);
            }, );
        } else {
            setError(true);
        }
    };

    const handlePreviewImageClick = () => {
        setModalImage(imageURL);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    const handleProductClick = (product) => {
        setModalImage(product.image);
    };

    const handleReturnToAdminPage = () => {
        setIsProductAdded(false);
        setShowAdminPage(true);
    };

    return (
        <>
            {isProductAdded && (
                <div style={{ textAlign: "center", padding: "20px", backgroundColor: "#f0f0f0" }}>
                    <p>상품 추가가 완료되었습니다.</p>
                    <StyledAddMoreButton onClick={handleReturnToAdminPage}>상품 더 추가하기</StyledAddMoreButton>
                </div>
            )}

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
                                type="number"
                                id="productPrice"
                                name="price"
                                value={newProduct.price}
                                onChange={handleInputChange}
                                min="0"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ProductImage">상품 이미지:</label>
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
                                    onClick={handlePreviewImageClick}
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

            {showThunder && <ThunderAnimation />}

            {modalImage && (
                <ModalOverlay onClick={closeModal}>
                    <Modal>
                        <CloseButton onClick={closeModal}>X</CloseButton>
                        <ModalImage src={modalImage} alt="Enlarged Product Preview" />
                    </Modal>
                </ModalOverlay>
            )}

            <ProductListContainer>
                <h2>상품 목록</h2>
                {products.map((product) => (
                    <ProductItem key={product.id} onClick={() => handleProductClick(product)}>
                        <p>상품명: {product.name}</p>
                        <p>가격: {product.price}</p>
                        <ProductImage src={product.image} alt={product.name} style={{ maxWidth: "100px" }} />
                    </ProductItem>
                ))}
            </ProductListContainer>
        </>
    );
};

export default AdminPage;
