import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from './styled';

export default function Repositories(){
    const navigate = useNavigate();
    const [ repositories, setRepositories ] = useState([]);

    useEffect(() => {

        let repositoriesName = localStorage.getItem('repositoriesName');
        console.log(repositoriesName);
        if ( repositoriesName ) {
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);     
            localStorage.clear();       
        } else {
            navigate("/");
        }
        console.log(repositoriesName);     
    }, [navigate]);

    return(
        <S.Container>
            <S.Title> Repositórios </S.Title>
            <S.List>
                { repositories.map ( repository => {
                    return (
                        <S.ListItem>Repositório: { repository }</S.ListItem>
                    )
                }) }                                             
            </S.List>

            <S.LinkHome to="/"> Voltar </S.LinkHome>
        </S.Container>
    )
}