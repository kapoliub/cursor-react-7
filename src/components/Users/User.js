import React from "react";
import styled from "styled-components";

const UserCard = styled.div`
    width: 20%;
    background: #FFCC6B;
    display: flex;
    padding: 15px;
    box-sizing: border-box;
    border: 1px solid grey;
    border-radius: 10px;
    margin: 15px;
`;

const NameWrapper = styled.div`
    color: #171717;
`;

const AvatarWrapper = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%
`;
const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
`

const InfoWrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
`;

const NicknameWrapper = styled.div`
    color: #3B3C3F;
`;

const User = ({ name, nickname, avatar }) => {
  return (
    <UserCard>
      <AvatarWrapper>
        <Img src={avatar}/>
      </AvatarWrapper>
      <InfoWrapper>
        <NameWrapper>{name}</NameWrapper>
        <NicknameWrapper>{nickname}</NicknameWrapper>
      </InfoWrapper>
    </UserCard>
  );
};

export default User;
