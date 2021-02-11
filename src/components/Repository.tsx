import React from 'react';
import { Main, RepositoryContainer, Title } from '../styles/repository';
import { BsBoxArrowInRight } from 'react-icons/bs';
import { RiGitRepositoryLine } from 'react-icons/ri';

interface iReposProps {
    name: string;
    description?: string;
    html_url: string;
  }

export default function Repository({ name, description, html_url } : iReposProps) {
    return (
        <RepositoryContainer >
            <header>
                <Title>
                    <RiGitRepositoryLine size={25} />
                    {name}
                </Title>
            </header>
            <Main>
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