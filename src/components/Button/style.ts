import styled, { css } from '@emotion/native';

export const Container = styled.TouchableOpacity`
    ${({ theme }) => css`
        width: 100%;
        height: 60px;
        background-color: ${theme.colors.welcomeSecondary};
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        border-radius: 8px;
        position: relative;
        overflow: hidden;
    `}
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: 20px;
        font-weight: bold;
        color: ${theme.colors.textWhite};
    `}
`;
