import styled from "styled-components";

export const VideoBackground = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
`;

export const HeroVideo = styled.video`
  position: absolute;
  z-index: -10;
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  object-position: center;
  opacity: 90%;
  background-color: rgb(246, 57, 57);
`;

export const MainContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Heading = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  position: fixed;
  padding: 10px 0px;
  z-index: 100;
  top: 0px;

  @media screen and (max-width: 420px) {
    font-size: 3rem;
  }
`;

export const KidsList = styled.div`
  display: grid;
  margin: 0% 20%;
  margin-top: 7%;
  margin-bottom: 3%;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    margin: 10%;
  }
  @media screen and (max-width: 420px) {
    margin: 15% 10%;
  }
`;

export const Credits = styled.div`
  position: fixed;
  display: flex;
  bottom: 3px;
  right: 5px;
  background-color: rgba(238, 231, 231, 0.371);
  color: white;
  padding: 2px;
  font-size: 1em;
  font-family: Arial, sans-serif;
  border-radius: 5px;
  z-index: 100;

  @media screen and (max-width: 420px) {
    font-size: 0.7em;
  }
`;

export const CreditsLink = styled.a`
  color: white;
  cursor: pointer;

  &:hover {
    color: blue;
  }
`;
