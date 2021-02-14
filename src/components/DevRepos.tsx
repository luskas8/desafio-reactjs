import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { Store } from '../store/dev/types';

import Repository from "./Repository";
import Loading from "./Loading";

import styled from "styled-components";

import api from "../utils/api";
import { green } from "../styles/colors";



interface iDevProps {
  username: string;
}

interface iReposInfo {
  name: string;
  description: string;
  html_url: string;
}

export default function DevRepos({ username: devUsername }: iDevProps) {
  const { theme } = useSelector((state: Store) => state.themeReducer);
  const [repos, setRepos] = useState<Array<iReposInfo>>([]);

  useEffect(() => {
    // Deixa o vetor de repositórios do dev sempre vazio ao iniciar a página
    setRepos([]);

    api
      .get(`/users/${devUsername}/repos`)
      .then(({ data }) => {
        setRepos(data.map((item: any) => {
          const { name, description, html_url } = item;
          return { name, description, html_url };
        })
      )
      })
      .catch((err) => {
        alert("Erro ao procurar repositórios.");
        console.error(err);
      });
    console.log(repos)
    // eslint-disable-next-line
  }, [devUsername]);
  
  if (!repos.length) return <Loading spinnerType="TailSpin" time={10000} text="Só mais um pouco... desculpe a demora :)" color={theme === "DARK" ? green.dark : green.light}/>

  const PageRepositories = styled.div`
    width: 100%;
    min-height: 100vh;

    padding: 50px 0 25px 380px;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

    @media only screen and (max-width: 970.99px) {
      padding: 50px 0 25px 80px;
    }
  `

  return (
    <PageRepositories theme={theme}>
      {repos.map((item, idx) => {
        return (
          <Repository
            key={idx}
            name={item.name}
            description={item.description}
            html_url={item.html_url}
          />
        );
      })}
    </PageRepositories>
  );
}
