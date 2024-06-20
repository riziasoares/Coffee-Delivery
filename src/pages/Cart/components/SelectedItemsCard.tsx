import { Trash } from "phosphor-react";
import { SelectedCoffeeCardContainer } from "./SelectedCoffeeCardContainer";

import { Counter } from "../../../components/Counter";
import { ItemsContext, ProductCart } from "../../../context/ItemsContext";
import { useContext } from "react";

interface SelectedItemsCardProps {
  item: ProductCart;
}

export function SelectedItemsCard({ item }: SelectedItemsCardProps) {
  const { incrementQuantity, decrementQuantity, removeItemsFromCart } = useContext(ItemsContext);
  const { id, image, title, price, quantity } = item;

  return (
    <SelectedCoffeeCardContainer>
      <img src={image} alt="Xícara de cor branca com café escolhido" />
      <div className="generalItemInfo">
        <div className="princeAndItemTitleInfo">
          <p className="titleCoffee">{title}</p>
          <p className="priceCoffee">
            <span>{`R$ ${price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</span>
          </p> 
        </div>
        <div className="counterAndRemoveButtons">
          <Counter
            quantity={quantity}
            increment={() => incrementQuantity(id)}
            decrement={() => decrementQuantity(id)}
          />
          <button className="removeButton" onClick={() => removeItemsFromCart(id)}>
            <Trash size={16} className="iconTrash"/>
            <p>Remova</p>
          </button>
        </div> 
      </div>      
    </SelectedCoffeeCardContainer>
  );
}
