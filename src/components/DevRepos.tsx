import React, { useEffect, useState } from "react";

import api from "../utils/api";

import '../styles/repos.css';

interface iDevProps {
  username: string;
}

export default function DevRepos({ username: devUsername }: iDevProps) {
  const [repos, setRepos] = useState<Array<any>>([]);

  useEffect(() => {
    api
      .get(`/users/${devUsername}/repos`)
      .then(({ data }) => {
        console.log(data);
        setRepos(data.map((item: any) => {return item}));
      })
      .catch((err) => {
        console.log("Nenhum repositória encontrado.");
      });
  }, [devUsername]);

	if (!repos) return <h1>Carregando...</h1>
  return (
    <div id="page-repos">
      {
        repos.map((item, idx) => {
          return (
            <div className="item" key={idx}>
              <h1>{item.name} a</h1>
            </div>
          )
        })
      }
    </div>  
  );
}
