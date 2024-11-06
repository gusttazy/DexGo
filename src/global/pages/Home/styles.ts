import styled, { css } from '@emotion/native';

export const Container = styled.View`
    ${({theme}) => css`
        flex: 1;
        background-color: ${theme.colors.background};
        padding: 20px;
    `}
`;
