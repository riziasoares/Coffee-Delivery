import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

export const HomeIntroductionContainer = styled.div`
  height: 34rem;
  width: 100%;
  
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;

    z-index: -1;
  }
  
  .titleAndSubtitle {
    width: 36.75rem;
    
    margin: 0 10rem 0 10rem;

    display: flex;
    flex-direction: column;
    gap: 16px; 
    
    z-index: 1;
  }

  .titleAndSubtitle h1 {
    ${mixins.fonts.titleXL}
    color: ${(props) => props.theme.colors['base-title']}
  }

  .titleAndSubtitle span {
    margin-bottom: 2rem;
    ${mixins.fonts.textL}
    color: ${(props) => props.theme.colors['base-subtitle']}
  }
  
  .listOfAdvantages {
    padding: 0;
    gap: 10px;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    list-style: none;
  }

  .listOfAdvantages li {
    padding: 0.5rem;
    border-radius: 8px;
    gap: 12px;

    display: flex;
    align-items: center;
  }

  .iconShoppingCart, .iconTimer, .iconPackage, .iconCoffee {
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;

    border-radius: 1000px;
    color: ${(props) => props.theme.colors['background']};

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .iconShoppingCart {
    background: ${(props) => props.theme.colors['yellow-dark']};
  }

  .listOfAdvantages p {
    margin: 0;
  }

  .iconTimer {
    background: ${(props) => props.theme.colors['yellow']};   
  }

  .iconPackage {
    background: ${(props) => props.theme.colors['base-text']};
  }

  .iconCoffee {
    background: ${(props) => props.theme.colors['purple']};
  }

  .imageCoffe {
    width: 29.75rem;
    height: 22.5rem;
    
    display: flex;
    top: 5.75rem;
    left: calc(100% - 29.75rem - 10rem);
    position: absolute;

    z-index: 1;
  }  
`
