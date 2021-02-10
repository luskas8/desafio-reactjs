import React, { FormEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Dev from "../components/Dev";
import api from "../utils/api";

import '../styles/landing.css';

interface iDevInfo {
  id: number;
  name: string;
  avatar_url: string;
  public_repos: number;
  bio: string;
  login: string;
}

export default function Landing() {
  const [devName, setDevName] = useState("");
  const [devsNames, setDevsNames] = useState<Array<string>>([]);
  const [devsInfo, setDevsInfo] = useState<Array<iDevInfo>>([]);

  const getDevFromApi = (name: string) => {
    // Pesquisa na API do GitHub o nome de usuário
    api
      .get(`/users/${name}`)
      .then(({ data }) => {
        const { id, name, avatar_url, public_repos, bio, login } = data;

        const newDevInfo = [
          ...devsInfo,
          { id, name, avatar_url, public_repos, bio, login },
        ];
        setDevsInfo(newDevInfo);
      })
      .catch((err) => {
        console.error("Erro dev não encontrado!");
        alert("Error: Dev não encontrado!");
      });
  };

  const onSubmitForm = (e: FormEvent) => {
    e.preventDefault();

    // Adiciona a url ao vetor de nomes existente
    const newDevsNames = [...devsNames, devName];
    setDevsNames(newDevsNames);

    getDevFromApi(devName);

    // Limpa input do nome
    setDevName("");
  };

  return (
    <div id="page-landing">
      <header>
        <h2>Pesquise o nome do dev que deseja</h2>
        <form onSubmit={onSubmitForm}>
          <input
            type="text"
            name="dev"
            value={devName}
            onChange={(evt) => setDevName(evt.target.value)}
          />

          <button type="submit">
            <FaSearch size={16} color="#000" />
          </button>
        </form>
      </header>

      <main>
        {devsInfo.length && devsInfo[0] !== null ? (
          devsInfo.map((dev) => {
            return (
              <Dev
                key={dev.id}
                id={dev.id}
                name={dev.name}
                bio={dev.bio}
                avatar_url={dev.avatar_url}
								public_repos={dev.public_repos}
                username={dev.login}
              />
            );
          })
        ) : (
          <h1 >Nenhum dev encontrado!</h1>
        )}
      </main>
    </div>
  );
}
