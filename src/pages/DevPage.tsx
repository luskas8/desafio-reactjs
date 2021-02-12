import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Store } from "../store/dev/types";
import { useDispatch, useSelector } from "react-redux";

import DevRepos from "../components/DevRepos";
import Loading from '../components/Loading';

import api from "../utils/api";

import { Aside, DevContainer, ImageBlock, Info, Footer } from "../styles/devPage";
import { green } from "../styles/colors";
import { darkTheme, lightTheme } from "../store/dev/actions";

interface iDevParams {
  username: string;
  theme: string;
}

interface iDevInfo {
  name: string;
  username: string;
  avatar_url?: string;
  bio?: string;
  location?: string;
}

export default function DevPage() {
  const { theme } = useSelector((state: Store) => state.themeReducer);
  const dispatch = useDispatch();
  const params = useParams<iDevParams>();
  const [devInfo, setDevInfo] = useState<iDevInfo>();

  useEffect(() => {
    if (params.theme === "DARK") {
      dispatch(darkTheme());
    } else {
      dispatch(lightTheme());
    }

    api
      .get(`/users/${params.username}`)
      .then(({ data }) => {
        const { name, avatar_url, bio, login, location } = data;

        setDevInfo({ name, avatar_url, bio, username: login, location });
      })
      .catch((err) => {
        console.error("Dev não encontrado.");
      });
  }, [params.username, params.theme, dispatch]);

  if (!devInfo) return <Loading time={0} color={theme === 'DARK' ? green.dark : green.light}/>;

  return (
    <DevContainer theme={theme}>
      <Aside theme={theme}>
        <header>
          <ImageBlock theme={theme}>
            <img src={devInfo.avatar_url} alt={`Avatar de ${devInfo.name}`} />
          </ImageBlock>
        </header>
        <main>
          <Info theme={theme}>
            <h1>{devInfo.name}</h1>
            <h2>{devInfo.username}</h2>
            <p>{devInfo.bio}</p>
          </Info>
        </main>
        <Footer>
          {
            devInfo.location && (
              <h3>
                <HiOutlineLocationMarker size={18} color="#fff"/>
                {devInfo.location}
              </h3>
            )
          }
        </Footer>
      </Aside>

      <DevRepos username={devInfo.username}/>
    </DevContainer>
  );
}
