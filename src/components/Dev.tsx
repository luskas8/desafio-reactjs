import React from "react";
import { FaTrash } from "react-icons/fa";
import { RiGitRepositoryLine } from 'react-icons/ri';
import { Link } from "react-router-dom";

import "../styles/dev.css";

interface iDevProps {
  id: number;
  name: string;
  avatar_url?: string;
  public_repos?: number;
  bio?: string;
}

export default function Dev(props: iDevProps) {
  return (
    <div className="dev-item">
      <div className="image-block">
        <img src={props.avatar_url} alt={`Avatar de ${props.name}`} />
      </div>
      <div className="infos">
        <div className="dev-title">
					<h1><Link to={`/page-dev/${props.id}`} target="_blank" href="#">{props.name}</Link></h1>
					<Link to={`/page-dev/${props.id}`} target="_blank" className="repos">{props.public_repos}<RiGitRepositoryLine size={16} color="#000"/></Link>
				</div>
        <p className="dev-bio">{props.bio}</p>
      </div>
			<div className="button-block">
				<button onClick={() => {}}>
					<FaTrash size={25} color="#000"/>
				</button>
			</div>
    </div>
  );
}
