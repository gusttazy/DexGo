import styled, { css } from '@emotion/native';

export const Container = styled.View`
    ${({theme}) => css`
        flex: 1;
        background-color: ${theme.colors.welcomePrimary};
    `}
`;

export const Content = styled.View`
    height: 60%;
    justify-content: center;  
    align-items: center;
`;

export const Footer = styled.View`
   ${({theme}) => css`
        height: 40%;
        border-top-right-radius: 25px;
        border-top-left-radius: 25px;
        padding: 120px;
        background-color: ${theme.colors.background};
    `}
`;

export const ImageStyled = styled.Image`
    width: 280px;  
    height: 280px;
    resize-mode: contain; 
`;

export const Title = styled.Text`
    ${({theme}) => css`
        font-size: 50px;
        font-weight: bold;
        color: ${theme.colors.textWhite};
        margin-top: 40px;
    `}
`;

