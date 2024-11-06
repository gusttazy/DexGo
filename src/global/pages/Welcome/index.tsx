import React from "react";
import * as S from './styles';
import { Button } from '../../../components/Button';

const logoImage = require('../../../assets/images/icon.png');

export function Welcome() {
    return (
        <S.Container>
            <S.Content>
                <S.ImageStyled 
                    source={logoImage} 
                />
                <S.Title>DexGo</S.Title>
            </S.Content>
            <S.Footer>
                <Button title='EXPLORAR'/>
            </S.Footer>
        </S.Container>
    );
}