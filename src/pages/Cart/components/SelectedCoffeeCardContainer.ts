import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

export const SelectedCoffeeCardContainer = styled.div`
  width: 23rem;

  background: ${(props) => props.theme.colors['base-card']};

  display: flex;
  align-items: center;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: auto;   
  }

  .generalItemInfo {
    width: 19rem;
    gap: 0.5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .princeAndItemTitleInfo{
    display: flex;
    justify-content: space-between;
  }

  .titleCoffee {
    display: flex;
    ${mixins.fonts.textM};
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  .priceCoffee {
    display: flex;
    ${mixins.fonts.textM};
    font-weight: bold;
  }

  .counterAndRemoveButtons {
    display: flex;
    gap: 0.5rem;
  }

  .removeButton {
    height: 2.375rem;
    padding: 0.5rem;
    border-radius: 6px;

    background: ${(props) => props.theme.colors['base-button']};
    color: ${(props) => props.theme.colors['base-text']};
    ${mixins.fonts.buttonM};

    display: flex;
    align-items: center;
    align-items: center;
    gap: 0.5rem;
    text-transform: uppercase;
  }

  .iconTrash {
    display: flex;
    color: ${(props) => props.theme.colors['purple']};
  }  
`