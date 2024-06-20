import styled from "styled-components";
import { mixins } from "../../styles/mixins";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6.5rem;
  background-color: #fff;
  z-index: 1000;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 10rem 2rem 10rem;
  }

  nav {
    display: flex;
    gap: 1.33rem;
  }
  
  .userLocation {
    min-width: 9rem;
    height: 2.375rem;
    border-radius: 6px;
    padding: 8px;

    background: ${(props) => props.theme.colors['purple-light']};

    display: flex;    
    cursor: pointer;
  }

  .userLocation a {
    display: flex;
    align-items: center;
    gap: 4px;
    text-decoration: none;
  }

  .iconMapPin {
    color: ${(props) => props.theme.colors['purple']};
  }

  span {
    color: ${(props) => props.theme.colors['purple-dark']};
    ${mixins.fonts.textS}
  }

  .userLocation:hover {
    background: ${(props) => props.theme.colors['purple-dark']};

    .iconMapPin {
      color: ${(props) => props.theme.colors['purple-light']}; 
    }

    span {
      color: ${(props) => props.theme.colors['purple-light']};
    }

    transition: 0.5s;
  }

  .counterCart { 
    position: absolute;
    left: 1rem;
    top: -1rem;
    display: flex;
    z-index: 1;
  }

  .counterCart span {
    color: ${(props) => props.theme.colors['white']};
    background: ${(props) => props.theme.colors['yellow-dark']};
    ${mixins.fonts.textS}
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .iconContainer {
    position: relative;
    display: inline-block;
  }

  .ShoppingCart {
    display: flex;
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 6px;
    padding: 8px;

    background: ${(props) => props.theme.colors['yellow-light']};
    transition: 0.5s;
    z-index: -1;
  }

  .iconShoppingCart {
    color: ${(props) => props.theme.colors['yellow-dark']};
  }

  .ShoppingCart:hover {
    background: ${(props) => props.theme.colors['yellow-dark']};

    .iconShoppingCart {
    color: ${(props) => props.theme.colors['yellow-light']};
    }
  }

  .totalQuantityWrapper {
    width: 1.25rem;
    height: 1.25rem;
    background: ${(props) => props.theme.colors['yellow-dark']};
    border-radius: 1000px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -1rem;
    left: 1rem;
  }

  .totalQuantity {
    color: ${(props) => props.theme.colors['white']};
    ${mixins.fonts.textS}
    font-weight: bold;
    text-decoration: none;    
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;