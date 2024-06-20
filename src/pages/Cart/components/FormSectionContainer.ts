import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

export const FormSectionContainer = styled.div`
  .section {
    width: 45rem;

    background: ${(props) => props.theme.colors['base-card']};
    border-radius: 6px;
    padding: 2.5rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .section input {
    height: 2.625rem;
    border-radius: 4px;
    background: ${(props) => props.theme.colors['base-input']};
    border: 1px solid ${(props) => props.theme.colors['base-button']};
    padding: 0.75rem;
    outline: none;

    color: ${(props) => props.theme.colors['base-label']};
    ${mixins.fonts.textS};

    &:focus {
      border: 1px solid ${(props) => props.theme.colors['yellow-dark']};
    }
  }

  .titleWrapper {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .textWrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  }

  .icon{
    color: ${(props) => props.theme.colors['yellow-dark']};
  }
`
