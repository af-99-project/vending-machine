// AdminPageStyles.js

import styled, { keyframes } from "styled-components";

// Define keyframes for thunder animation
const thunderAnimation = keyframes`
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
`;

export const AdminPageContainer = styled.div`
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f0f0f0;
`;

export const ProductForm = styled.form`
    display: flex;
    flex-direction: column;

    .form-group {
        margin-bottom: 15px;

        label {
            margin-bottom: 5px;
        }

        input[type="text"], input[type="file"] {
            padding: 8px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 4px;
            width: 100%;
        }
    }
`;

export const AddProductButton = styled.button`
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

export const PasswordPageContainer = styled.div`
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f0f0f0;
`;

export const PasswordInput = styled.input`
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-top: 10px;
    width: 100%;
`;

export const TogglePasswordButton = styled.button`
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

export const SubmitButton = styled.button`
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

export const ErrorMessage = styled.div`
    color: red;
    margin-top: 5px;
`;

export const ProductListContainer = styled.div`
    margin-top: 20px;
`;

export const ProductItem = styled.div`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;

    &:hover {
        background-color: #f0f0f0;
    }

    img {
        max-width: 100px;
    }
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Modal = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
`;

export const ModalImage = styled.img`
    max-width: 700px;
    max-height: 700px;
`;

export const ImagePreview = styled.img`
    max-width: 500px;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
        transform: scale(1.2);
        transition: transform 0.2s ease-in-out;
    }
`;

export const ThunderAnimation = styled.div`
    position: fixed; /* or absolute based on your requirement */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("path_to_your_thunder_image_or_animation") no-repeat center center;
    background-size: cover;
    animation: ${thunderAnimation} 1.5s ease-out;
    z-index: 100;
`;
