import styled from 'styled-components';

export const ProjectsPageStyles = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  text-align: center;
  font-size: 1.4rem;
  margin-top: 5%;
  color: #eaac8b;
`;

export const ProjectPageInfoText = styled.section`
  width: 80vw;
  font-size: 1.4rem;
  margin-left: 10vw;
  margin-right: 10vw;
  margin-top: 2%;
`;

export const ProjectPageProjectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 5%;
`;

export const ProjectPageProjectStyles = styled.figure`
  display: inline-block;
  border: 2px solid #e56b6f;
  border-radius: 10px;
  width: 250px;
  height: auto;
  padding: 5%;
  opacity: 0.7;
  color: #e56b6f;
`;

export const ProjectPageButtonContainerStyles = styled.div`
  display: inline;
  width: 100%;
`;

export const ProjectPageProjectTitle = styled.h6`
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
`;
