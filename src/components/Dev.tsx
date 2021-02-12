import React from "react";
import { FaTrash } from "react-icons/fa";
import { RiGitRepositoryLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../store/dev/types";

import { deleteDev } from "../store/dev/actions";

import {
  StyledLink,
  DevItem,
  ImageBlock,
  Title,
  TitleSpan,
  Infos,
  ButtonBlock,
  DeleteButton,
  DevContainer,
} from "../styles/dev";

interface iDevProps {
  id: number;
  name: string;
  avatar_url?: string;
  public_repos?: number;
  bio?: string;
  username: string;
}

export default function Dev(props: iDevProps) {
  const { theme } = useSelector((state: Store) => state.themeReducer);
  const dispatch = useDispatch();

  const deleteDevFromArray = (index: number) => {
    dispatch(deleteDev(index));
  };

  return (
    <DevItem theme={theme}>
      <DevContainer>
        <StyledLink
          to={`/page-dev/${props.username}/${theme}`}
          target="_blank"
          theme={theme}
        >
          <ImageBlock theme={theme}>
            <img src={props.avatar_url} alt={`Avatar de ${props.name}`} />
          </ImageBlock>
          <Infos theme={theme}>
            <Title theme={theme}>
              <h1>{props.name}</h1>
              <TitleSpan theme={theme}>
                {props.public_repos}
                <RiGitRepositoryLine size={16} />
              </TitleSpan>
            </Title>
            <p>{props.bio}</p>
          </Infos>
        </StyledLink>
        <ButtonBlock theme={theme}>
          <DeleteButton
            onClick={() => {
              deleteDevFromArray(props.id);
            }}
            theme={theme}
          >
            <FaTrash size={25} />
          </DeleteButton>
        </ButtonBlock>
      </DevContainer>
    </DevItem>
  );
}
