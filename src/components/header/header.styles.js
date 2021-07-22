import styled from 'styled-components';

export const HeaderNavStyles = styled.nav`
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 5vh;
  padding-bottom: 5px;
  padding-top: 5px;
  border-bottom: 1px solid #b56576;
  overflow: hidden;
`;

export const HeaderNavLinkStyles = {
  color: '#e56b6f',
  textShadow: '0.4px 0.4px #d19d9f',
  textDecoration: 'none',
  margin: 'auto 10px',
  fontSize: '1.2rem',
};
