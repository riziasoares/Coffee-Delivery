import styled from "styled-components";
import { mixins } from "../styles/mixins";

export const CounterContainer = styled.div`
  .buttonDecreaseAndIncrease {
    min-width: 4.5rem;
    height: 2.375rem;
    border-radius: 6px;
    /* margin-right: 0.5rem; */

    background: ${(props) => props.theme.colors['base-button']};

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .buttonDecreaseAndIncrease button {
    background: transparent;
    color: ${(props) => props.theme.colors['purple']}; 

    display: flex;
    justify-content: center;
  }

  .buttonDecreaseAndIncrease button:hover {
    color: ${(props) => props.theme.colors['purple-dark']}; 
  }

  .buttonDecreaseAndIncrease button:active {
    color: ${(props) => props.theme.colors['purple-dark']}; 
  }

  .buttonDecreaseAndIncrease span {
    ${mixins.fonts.textM};
    color: ${(props) => props.theme.colors['base-title']}; 
  }
  
`