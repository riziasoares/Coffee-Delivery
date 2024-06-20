import { HeaderContainer, StyledLink } from "./styled";
import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from 'react-router-dom';
import logoCoffeeDelivery from "../../assets/icon/Logo-coffee-delivery.svg";
import { useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext";

export function Header() {
  const { totalQuantity } = useContext(ItemsContext);

   return (
    <HeaderContainer>
      <div className="header">
        <Link to="/">
          <img src={logoCoffeeDelivery} alt="Logo do Coffee Delivery (Imagem de copo de café)" />
        </Link>
        
        <nav>
          <div className="userLocation">
            <a href="">
              <MapPin className="iconMapPin" size={22} weight="fill" />
              <span>Porto Alegre, RS</span>
            </a>
          </div>
        
          <StyledLink to="/cart">        
            <button className="ShoppingCart">
              <div className="iconContainer">
                <ShoppingCart className="iconShoppingCart" size={22} weight="fill" />
                {totalQuantity > 0 && (
                  <div className="totalQuantityWrapper">
                    <span className="totalQuantity">{totalQuantity}</span>
                  </div>
                )}
            </div>
      </button>
          </StyledLink>
        </nav>
      </div>
    </HeaderContainer>
  );
}
