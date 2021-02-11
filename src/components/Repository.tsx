import React from 'react';
import { Link } from 'react-router-dom';
import { RepositoryContainer, Title } from '../styles/repository';

import '../styles/repository.css';

interface iReposProps {
    name: string;
    description?: string;
    html_url: string;
  }

export default function Repository({ name, description, html_url } : iReposProps) {
    return (
        <RepositoryContainer >
            <header>
                <Title>{name}</Title>
            </header>
            <main>
                <p>{description}</p>
            </main>
            <footer>
                <a href={html_url} target="_blank">
                    Ir para repositório
                </a>
            </footer>
        </RepositoryContainer>
        // <div className="container-repository">
        // </div>
    );
}