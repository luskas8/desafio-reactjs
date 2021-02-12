import React, { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import {
  LandingContainer,
  DevInput,
  Form,
  Header,
  Main,
} from "../styles/landing";
import { Store } from "../store/dev/types";
import { addDev } from "../store/dev/actions";

import Dev from "../components/Dev";

import api from "../utils/api";

export default function Landing() {
  const dispatch = useDispatch();
  const { devs } = useSelector((state: Store) => state.devReducer);
  const { theme } = useSelector((state: Store) => state.themeReducer);
  const [devName, setDevName] = useState("");

  const getDevFromApi = (name: string) => {
    // Pesquisa na API do GitHub o nome de usuário
    api
      .get(`/users/${name}`)
      .then(({ data }) => {
        const { id, name, avatar_url, public_repos, bio, login } = data;

        const payload = { id, name, avatar_url, public_repos, bio, login };
        dispatch(addDev(payload));
      })
      .catch((err) => {
        console.error("Erro dev não encontrado!");
        alert("Erro Dev não encontrado!");
      });
  };

  const onSubmitForm = (e: FormEvent) => {
    e.preventDefault();

    // Adiciona ao vetor de devs existente
    getDevFromApi(devName);

    // Limpa input do nome
    setDevName("");
  };

  return (
    <LandingContainer theme={theme}>
      <Header theme={theme}>
        <h2>Pesquise o nome do dev que deseja</h2>
        <Form onSubmit={onSubmitForm} theme={theme}>
          <DevInput
            theme={theme}
            type="text"
            name="dev"
            value={devName}
            onChange={(evt) => setDevName(evt.target.value)}
          />

          <button type="submit">
            <FaSearch size={16} />
          </button>
        </Form>
      </Header>

      <Main theme={theme}>
        {devs.length ? (
          devs.map((dev) => {
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
          <h1>Nenhum dev encontrado!</h1>
        )}
      </Main>

      
    </LandingContainer>
  );
}
