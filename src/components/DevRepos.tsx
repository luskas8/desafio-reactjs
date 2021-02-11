import React, { useEffect, useState } from "react";

import api from "../utils/api";

import "../styles/devRepos.css";
import Repository from "./Repository";

interface iDevProps {
  username: string;
}

interface iReposName {
  name: string;
}

interface iReposInfo {
  name: string;
  description: string;
  html_url: string;
}

export default function DevRepos({ username: devUsername }: iDevProps) {
  const [repos, setRepos] = useState<Array<iReposInfo>>([]);

  useEffect(() => {
    api
      .get(`/users/${devUsername}/repos`)
      .then(({ data }) => {
        console.log(data);
        setRepos(data.map((item: any) => {
          const { name, description, html_url } = item;
          return { name, description, html_url };
        })
      )
      })
      .catch((err) => {
        alert("Erro!");
        console.error(err);
      });
    console.log(repos)
  }, []);
  
  return (
    <div id="page-repos">
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
    </div>
  );
}
