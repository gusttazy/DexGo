import React from "react";
import * as S from './styles';
import dotsImage from '../../assets/images/dots.png';
import { TouchableOpacityProps } from "react-native";
import pokeball from "../../assets/images/pokeballCard.png"

export type ValidPokemonTypes = "grass" | "fire" | "water" | "poison" | "normal" | "bug" | "flying" | "eletric" | "ground";

export type PokemonType = {
    type: {
        name: ValidPokemonTypes;
    }
}

export type Pokemon = {
    name: string;
    url: string;
    id: number;
    types: PokemonType[]
}

type Props = {
    data: Pokemon
} & TouchableOpacityProps;

function getValidPokemonType(type: string): ValidPokemonTypes {
    const validTypes: ValidPokemonTypes[] = ["grass", "fire", "water", "poison", "normal", "bug", "flying", "eletric", "ground"];
    return validTypes.includes(type as ValidPokemonTypes) ? (type as ValidPokemonTypes) : "normal";
}

function getPokemonSprite(id: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

export function Card({ data, ...rest }: Props) {
    return (
        <S.PokemonCard type={getValidPokemonType(data.types[0].type.name)} {...rest}>
            <S.LeftSide>
                <S.PokemonId>{data.id}</S.PokemonId>
                <S.PokemonName>{data.name}</S.PokemonName>
                <S.ImageCardDetailLeftSide source={dotsImage} /> 

                <S.PokemonContentType>
                  {data.types.map((pokemonType, index) => (
                    <S.PokemonType key={index} type={getValidPokemonType(pokemonType.type.name)}>
                        <S.PokemonTypeText>{pokemonType.type.name}</S.PokemonTypeText>
                    </S.PokemonType>
                  ))}
                </S.PokemonContentType> 
            </S.LeftSide>
            
            <S.RightSide>
                <S.PokeballDetail source={pokeball} />
                <S.PokemonImage 
                    source={{ uri: getPokemonSprite(data.id) }}
                    resizeMode="contain" 
                />
            </S.RightSide>
        </S.PokemonCard>
    );
}
