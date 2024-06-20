import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

export const PaymentButtonContainer = styled.button`
  button {
    width: 12.833rem;
    display: flex;
    padding: 1rem 0.75rem;
    gap: 0.75rem;

    background: ${(props) => props.theme.colors['base-button']};
    border-radius: 6px;

    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme.colors['base-hover']};
      color: ${(props) => props.theme.colors['base-subtitle']};
    }

    &:active {
      background: ${(props) => props.theme.colors['purple-light']};
      border: 1px solid ${(props) => props.theme.colors['purple']};
    }

    &.isSelected {
      background: ${(props) => props.theme.colors['purple-light']};
      border: 1px solid ${(props) => props.theme.colors['purple']};
      color: ${(props) => props.theme.colors['purple']};
    }

    &.clicked {
      background: ${(props) => props.theme.colors['purple-light']};
      border: 1px solid ${(props) => props.theme.colors['purple']};
      color: ${(props) => props.theme.colors['purple']};
    }
  }

  .iconButton {
    color: ${(props) => props.theme.colors['purple']};
  }

  .textFormOfPayment {
    text-transform: uppercase;
    ${mixins.fonts.buttonM};
  }
`
