import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

export const ProductCardContainer = styled.div`  
  .cardCoffee {
    width: 16rem;
    height: 19.375rem;
    border-top-left-radius: 6px;
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;
    border-bottom-right-radius: 6px;

    background: ${(props) => props.theme.colors['base-card']};

    display: flex;
    flex-direction: column;
    align-items: center;
    transition: box-shadow 0.3s;
  }

  .cardCoffee:hover {
    box-shadow: 0 0.12rem 0.375rem ${(props) => props.theme.colors['base-hover']};
  }

  .cardCoffee img {
    width: 7.5rem;
    height: 7.5rem;
    margin: -1.5625rem 0 0.625rem 0;
    box-sizing: border-box;
  }

  .tags {
    display: flex;
    gap: 8px;
  }

  .tagCoffee {
    padding: 0.3rem 0.6rem 0.3rem 0.6rem;
    text-transform: uppercase;
    border-radius: 100px;

    ${mixins.fonts.tag};
    color: ${(props) => props.theme.colors['yellow-dark']};
    background: ${(props) => props.theme.colors['yellow-light']};
  }

  .tags:only-child .tagCoffee {
    margin-right: 8px; /* Adiciona margem à direita apenas quando há uma única tag */
  }

  /* Caso específico para o segundo elemento quando há duas tags */
  .tags:only-child .tagCoffee:nth-child(2) {
    margin-right: 0; /* Remove a margem direita do segundo elemento */
  }
  
  .infoCoffee {
    padding: 1.5rem 1.5rem 0rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .titleCoffee {
    ${mixins.fonts.titleS};
  }

  .subtitleCoffee {
    ${mixins.fonts.textS};
    text-align: center;
    height: 4.5rem;
  }

  .AddInformation {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .priceCoffee span {
    padding-left: 0.25rem;
    margin-right: 1rem;
    ${mixins.fonts.titleM};
  }

  .buttonDecreaseAndIncrease {
    min-width: 4.5rem;
    height: 2.375rem;
    border-radius: 6px;
    margin-right: 0.5rem;

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
  
  .iconShoppingCart {
    width: 2.375rem;
    height: 2.375rem;
    padding: 0.5rem;
    border-radius: 6px;

    background: ${(props) => props.theme.colors['purple-dark']};
    color: ${(props) => props.theme.colors['base-card']};   

    display: flex;
    transition: 0.5s;
  }

  .iconShoppingCart:hover {
    background: ${(props) => props.theme.colors['purple']};
  }
`