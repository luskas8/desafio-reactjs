import React from 'react';
import { BsBoxArrowInRight } from 'react-icons/bs';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { useSelector } from "react-redux";
import { Store } from "../store/dev/types";

import { Main, RepositoryContainer, Title } from '../styles/repository';

interface iReposProps {
    name: string;
    description?: string;
    html_url: string;
  }

export default function Repository({ name, description, html_url } : iReposProps) {
    const { theme } = useSelector((state: Store) => state.themeReducer);

    return (
        <RepositoryContainer theme={theme}>
            <header>
                <Title theme={theme}>
                    <RiGitRepositoryLine size={25} />
                    {name}
                </Title>
            </header>
            <Main theme={theme}>
                <p>{description}</p>
            </Main>
            <footer>
                <a href={html_url} target="_blank" rel="noreferrer">
                    Ir para repositório
                    <BsBoxArrowInRight size={25} />
                </a>
            </footer>
        </RepositoryContainer>
    );
}