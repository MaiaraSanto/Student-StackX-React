import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const ImageUser = styled.div`
    width: 5.9rem;
    height: 5.9rem;
    border-radius: 50%;
    background: #27272A;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 5.6rem;
        height: 5.6rem;
        border-radius: 50%;
        object-fit: cover;
    }

`;
export const InfoUserContaier = styled.div`

    p {
        margin: 1rem 0;
        font-size: 1rem;
        line-height: 1.6rem;
        color: var(--dark-600);
    }

`;