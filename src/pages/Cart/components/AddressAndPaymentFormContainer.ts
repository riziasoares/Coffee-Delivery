import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

export const AddressAndPaymentFormContainer = styled.form`
  .title {
    ${mixins.fonts.titleXS};
    color: ${(props) => props.theme.colors['base-title']};
    margin-bottom: 1rem;
  }

  .formWrapper {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .form {
    display: flex;
    gap: 0.75rem;
  }

  .cepField {
    max-width: 12.5rem;
    text-transform: uppercase;
  }

  .streetField {
    width: 100%;
  }

  .secondPartForm {
    display: flex;
    gap: 0.75rem;
  }

  .numberField, .neighborhoodField{
    width: 11.8rem;
  }

  .optionalInput {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%; 
  }

  .complementField {
    width: 27.45rem;
    flex: -1;
    padding-right: 5rem; 
    box-sizing: border-box;
  }

  .optionalText {
    font-style: italic;
    font-size: 0.75rem;
    color: ${(props) => props.theme.colors['base-label']};

    display: flex;
    margin-left: -3.75rem; 
    pointer-events: none; 
  }

  .thirdPartForm {
    display: flex;
    gap: 0.75rem;
  }

  .cityField {
    width: 22.95rem;
  }

  .ufField {
    width: 3.75rem;
    text-transform: uppercase;
  }

  .buttonsWrapper{
    display: flex;
    gap: 0.75rem;
    width: 40rem;
    justify-content: space-between;
  }
`
