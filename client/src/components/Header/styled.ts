import styled from '~/lib/styled';

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 10px;
  background-color: var(--background-color);

  h1 {
    color: #ffffff;
    font-size: 0;
    font-weight: 700;
    a {
      display: inline-flex;
      font-size: 19px;
      svg {
        margin-right: 5px;
      }
    }
  }
`;

export const ThemeBtn = styled.button`
  width: 25px;
  height: 24px;
  margin-left: auto;
  margin-right: 1.2em;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
