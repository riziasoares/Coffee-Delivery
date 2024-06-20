import styled from "styled-components";
import { mixins } from "../styles/mixins";

export const ButtonDefaultContainer = styled.button`

  .button {
    width: 100%; 
    border-radius: 6px;
    padding: 0.75rem;
    background: ${(props) => props.theme.colors['yellow']};
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
 
  p {
    text-transform: uppercase;
    color: ${(props) => props.theme.colors['white']};
    ${mixins.fonts.buttonG};
    margin: 0; 
  } 

  &:hover {
    background: ${(props) => props.theme.colors['yellow-dark']}; 
  }

  &:focus {
    outline: none;
  }
`;
