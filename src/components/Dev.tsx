import React from "react";
import { FaTrash } from "react-icons/fa";
import { RiGitRepositoryLine } from "react-icons/ri";
import { useDispatch } from "react-redux";

import { deleteDev } from "../store/dev/actions";

import { StyledLink, DevItem, ImageBlock, Title, TitleSpan, Infos, ButtonBlock, DeleteButton } from '../styles/dev';

interface iDevProps {
  id: number;
  name: string;
  avatar_url?: string;
  public_repos?: number;
  bio?: string;
  username: string;
}

export default function Dev(props: iDevProps) {
  const dispatch = useDispatch();

  const deleteDevFromArray = (index: number) => {
    dispatch(deleteDev(index));
  }

  return (
    <DevItem>
      <StyledLink to={`/page-dev/${props.username}`} target="_blank">
        <ImageBlock>
          <img src={props.avatar_url} alt={`Avatar de ${props.name}`} />
        </ImageBlock>
        <Infos>
          <Title>
            <h1>{props.name}</h1>
            <TitleSpan>
              {props.public_repos}
              <RiGitRepositoryLine size={16} />
            </TitleSpan>
          </Title>
          <p>{props.bio}</p>
        </Infos>
      </StyledLink>
        <ButtonBlock>
          <DeleteButton onClick={() => {deleteDevFromArray(props.id)}}>
            <FaTrash size={25} />
          </DeleteButton>
        </ButtonBlock>
    </DevItem>
  );
}
