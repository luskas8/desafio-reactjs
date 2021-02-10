import React, { useEffect, useState } from "react";

import api from "../utils/api";

import "../styles/devRepos.css";

interface iDevProps {
  username: string;
}

interface iReposName {
  name: string;
}

interface iReposInfo {
  description: string;
  topics: Array<string>;
}

export default function DevRepos({ username: devUsername }: iDevProps) {
  const [reposName, setReposName] = useState<Array<iReposName>>([]);
  const [repos, setRepos] = useState<Array<iReposInfo>>([]);

  useEffect(() => {
    api
      .get(`/users/${devUsername}/repos`)
      .then(({ data }) => {
        setReposName(
          data.map((item: any) => {
            return item.name;
          })
        );
      })
      .catch((err) => {
        console.log("Nenhum repositória encontrado.");
      });

    reposName.map((name) => {
      api
        .get(`/repos/${devUsername}/${name}`)
        .then(({ data }) => {
          console.log(data);
          setReposName(
            data.map((item: iReposInfo) => {
              return item;
            })
          );
        })
        .catch((err) => {
          console.log("Nenhum repositória encontrado.");
        });
    });
  }, [devUsername]);

  if (!reposName) return <h1>Carregando...</h1>;
  return (
    <div id="page-repos">
      {repos.map((item, idx) => {
        return (
          <div className="item" key={idx}>
            <h1>{item}</h1>
            <div className="topics">
              {
                item.topics.map((topic, topic_idx) => {
                  return (
                    <h2 key={topic_idx}>{topic}</h2>
                  )
                })
              }
            </div>
          </div>
        );
      })}
    </div>
  );
}
