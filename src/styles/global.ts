import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    : root {
        --background: #283142;;
        --white: #FFFFFF;
        --white-600: #F0F0F0;
        --white-400: #EDEDED;        

        --grey-300: #C6C6D3;
        --grey-400: #A1A1AA;

        --dark-300: #3F3F46;
        --dark-400: #27272A;
        --dark-500: #3E3E41;
        --dark-600: #1C1C1C;

        border-radius: 10px;
        padding: 30px 10px;

    }

    * {
        margin: 0;
        pading: 0;
        box-sizing: border-box;
    }

    body{
        background: var(--background);
        webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family:'Inter', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        widht: 100%;
        max-width: 576px;
        background: #D9D9D9;
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }
`;