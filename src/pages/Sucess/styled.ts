import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const SuccessContainer = styled.div`
  padding-top: 100px;
  margin: 6.25rem 10rem 0 10rem;

  .titleWrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 2.5rem;
  }

  .title {
    ${mixins.fonts.titleL};
    color: ${(props) => props.theme.colors['yellow-dark']};
  }

  .subtitle {
    ${mixins.fonts.textL};
    color: ${(props) => props.theme.colors['base-subtitle']};
  } 

  .orderInfoWrapperAndIllustration {
    display: flex;
    justify-content: space-between;
  }

  .orderInfoWrapper {
    width: 32.875rem;
    height: 16.875rem;

    border: double 2px transparent;
    border-radius: 6px 36px 6px 36px;
    background-image: linear-gradient(white, white), 
      radial-gradient(circle at top left, 
      ${(props) => props.theme.colors['yellow-dark']},
      ${(props) => props.theme.colors['purple']});
    background-origin: border-box;
    background-clip: content-box, border-box;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .orderInfoWrapper {
    display: flex;
    gap: 2rem;
  }
  
  .orderInfo {
    margin: 0 2.5rem 0 2.5rem;
    display: flex;
  }

  .orderInfo span {
    display: inline-flex;
    align-items: center; 
    gap: 0.75rem; 
  }

  .iconMapPin, .iconTimer, .iconDollar {
    color: ${(props) => props.theme.colors['white']};

    box-sizing: initial;
    padding: 0.5rem;
    border-radius: 1000px;
  }

  .iconMapPin {
    background: ${(props) => props.theme.colors['purple']}; 
  }

  .ufDescription{
    text-transform: uppercase;
  }

  .iconTimer {
    background: ${(props) => props.theme.colors['yellow']}; 
  }

  .iconDollar {
    background: ${(props) => props.theme.colors['yellow-dark']};
  }

  .payment {
    text-transform: capitalize;
  }
`