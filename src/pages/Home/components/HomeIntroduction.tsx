import { HomeIntroductionContainer } from "./HomeIntroductionContainer"

import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import imageCoffe from "../../../assets/image/Imagem-coffe.svg"
import backgroundImage from "../../../assets/image/Background.svg"

export function HomeIntroduction() {
  return (
    <HomeIntroductionContainer>
      <div> 
        <img src={backgroundImage}/>
        <div className="titleAndSubtitle">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>

          <ul className="listOfAdvantages">
            <li>
              <ShoppingCart className="iconShoppingCart" size={16} weight="fill" />
              Compra simples e segura
            </li>

            <li>
              <Package className="iconPackage" size={16} weight="fill" />
              Embalagem mantém o café intacto
            </li>
            
            <li>
              <Timer className="iconTimer" size={16} weight="fill" />
              Entrega rápida e rastreada
            </li>

            <li>
              <Coffee className="iconCoffee" size={16} weight="fill" />
              O café chega fresquinho até você
            </li>
          </ul>
          <img className='imageCoffe' src={imageCoffe} alt="Imagem de copo de café" />
        </div>
      </div>
    </HomeIntroductionContainer>
  )
}