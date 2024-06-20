import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

export const SelectedItemsContainer = styled.div`
   .title {
    ${mixins.fonts.titleXS};
    color: ${(props) => props.theme.colors['base-title']};
    margin-bottom: 1rem;
  }

  .cardDivisionLine{
    background: ${(props) => props.theme.colors['base-button']};
    height: 1px;
    margin-top: 1.5rem;
  }

  .cartWrapper {
    width: 28rem;
    gap: 1.5rem;

    background: ${(props) => props.theme.colors['base-card']};
    border-radius: 6px 44px 6px 44px;
    padding: 2.5rem;

    display: flex;
    flex-direction: column;
  }

  .valueOfitemsAndDelivery {
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    gap: 0.75rem;
  }

  .valueOfItems, .valueOfDelivery {
    display: flex;
    justify-content: space-between;
  }

  .totalAmountPayable {
    ${mixins.fonts.textL};
    font-weight: bold;
    display: flex;
    justify-content: space-between;
  }

`

