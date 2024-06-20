import { ProductCatolog } from "./components/ProductCatalog"
import { HomeIntroduction } from "./components/HomeIntroduction"
import { HomeContainer } from "./styled"

export function Home() {  
  return (
    <HomeContainer> 
        <HomeIntroduction />
        <ProductCatolog/>
    </HomeContainer>
  )
}
