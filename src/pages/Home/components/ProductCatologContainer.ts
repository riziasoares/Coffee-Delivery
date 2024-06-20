import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

export const ProductCatologContainer = styled.div` 
  margin: 0 10rem 3rem 10rem;

  .title {
  margin-bottom: 3rem;
  ${mixins.fonts.titleL};
  color: ${(props) => props.theme.colors['base-subtitle']}
  }

  .coffeeList {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  justify-content: space-between;
  }
`