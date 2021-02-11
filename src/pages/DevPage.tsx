import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";

import DevRepos from "../components/DevRepos";
import Loading from '../components/Loading';

import api from "../utils/api";

import "../styles/devPage.css";

interface iDevParams {
  username: string;
}

interface iDevInfo {
  name: string;
  username: string;
  avatar_url?: string;
  bio?: string;
  location?: string;
}

export default function DevPage() {
  const params = useParams<iDevParams>();
  const [devInfo, setDevInfo] = useState<iDevInfo>();

  useEffect(() => {
    api
      .get(`/users/${params.username}`)
      .then(({ data }) => {
        const { name, avatar_url, bio, login, location } = data;

        setDevInfo({ name, avatar_url, bio, username: login, location });
      })
      .catch((err) => {
        console.error("Dev não encontrado.");
      });
  }, [params.username]);

  if (!devInfo) return <Loading />;

  return (
    <div id="page-dev">
      <aside>
        <header>
          <div className="image-block">
            <img src={devInfo.avatar_url} alt={`Avatar de ${devInfo.name}`} />
          </div>
        </header>
        <main>
          <div className="infos">
            <h1>{devInfo.name}</h1>
            <h2>{devInfo.username}</h2>
            <p>{devInfo.bio}</p>
          </div>
        </main>
        <footer>
          <h3>
            <HiOutlineLocationMarker size={18} color="#fff" />{" "}
            {devInfo.location}
          </h3>
        </footer>
      </aside>

      <DevRepos username={devInfo.username} />
    </div>
  );
}
