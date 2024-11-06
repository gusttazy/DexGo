import styled, { css } from '@emotion/native';
import theme from '../../global/styles/theme';
import { TouchableOpacityProps } from 'react-native';

type PokemonType = TouchableOpacityProps & {
    type: keyof typeof theme.colors.backgroundCard;
};

export const PokemonCard = styled.TouchableOpacity<PokemonType>`
    ${({ theme, type }) => css`
        background: ${theme.colors.backgroundCard[type]};
        border-radius: 10px;
        margin-top: 30px;
        flex-direction: row;
        padding: 20px;
    `}
`;

export const LeftSide = styled.View`
    width: 50%;
    position: relative;
`;

export const PokemonId = styled.Text`
    ${({theme}) => css`
        font-weight: bold;
        font-size: 12px;
        line-height: 14px;
        color: ${theme.colors.lightText};
    `}
`;

export const PokemonName = styled.Text`
    ${({theme}) => css`
        font-weight: bold;
        font-size: 28px;
        line-height: 31px;
        margin-top: 5px;
        text-transform: capitalize;
        color: ${theme.colors.textWhite};
    `}
`;

export const PokemonContentType = styled.View`
    flex-direction: row;
`;

export const PokemonType = styled.View<PokemonType>`
    ${({theme, type}) => css`
        background: ${theme.colors.boxType[type]};
        padding: 5px;
        width: 65px;
        height: 25px;
        border-radius: 3px;
        margin-left: 5px;
        margin-top: 5px;
        align-items: center;
        justify-content: center;
    `}
`;

export const PokemonTypeText = styled.Text`
    ${({theme}) => css`
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        color: ${theme.colors.textWhite};
        text-transform: capitalize;
    `}
`;

export const ImageCardDetailLeftSide =  styled.Image`
    position: absolute;
    width: 74px;
    height: 32px;
    left: 90px;
    top: -10px;
`;

export const RightSide = styled.View`
    justify-content: center;
    align-items: center;
    width: 50%;
    position: relative;
`;

export const PokemonImage = styled.Image`
    margin-top: -40px;
    margin-left: 40px;
    width: 130px;
    height: 130px;
`;

export const PokeballDetail = styled.Image`
    position: absolute;
    right: -20px;
    width: 132px;
    height: 132px;
`;