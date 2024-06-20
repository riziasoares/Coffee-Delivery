import styled from "styled-components";
//import { mixins } from "../../styles/mixins";

export const CartContainer = styled.div`
  .orderInfoComponents {
    display: grid;
    grid-template-columns: 1fr; 
    gap: 2rem;
    padding-top: 120px;
    margin: 2.5rem 10rem 0 10rem;
    margin-bottom: 10rem;
    justify-content: center; 
  }

  @media (min-width: 1024px) { 
    .orderInfoComponents {
      grid-template-columns: 1fr 1fr; 
    }

    .orderInfoComponents > * { 
      justify-self: center;
    }
  }
`;
