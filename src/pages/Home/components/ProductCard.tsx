import { Counter } from "../../../components/Counter";
import { ProductCardContainer } from "./ProductCardContainer";
import { ShoppingCart } from "phosphor-react";
import { Coffee } from "./ProductCatalog";
import { useContext, useEffect, useState } from "react";
import { ItemsContext } from "../../../context/ItemsContext";

interface CoffeeCardProps {
  coffee: Coffee;
}

export function ProductCard({ coffee }: CoffeeCardProps) {
  const { createAddItemToCart, items } = useContext(ItemsContext);
  const [quantity, setQuantity] = useState(0);

  //useEffect para verificar se a quantidade (quantity) de itens em ProductCard seja igual a quantidade de itens(items) que já está dentro do carrinho. Caso não tenha nenhum, ele irá aparecer a quantidade '0'
  useEffect(() => {
    const exitingItem = items.find(item => item.id === coffee.id);
    if (exitingItem) {
      setQuantity(exitingItem.quantity);
    } else {
      setQuantity(0);
    }
  }, [items, coffee.id]);

  return (
    <ProductCardContainer>
      <div className="cardCoffee">
        <img src={coffee.image} alt="Xícara de cor branca com café" />
        <div className="tags">
          {coffee.tags.map((tag, index) => (
            <span key={index} className="tagCoffee">{tag}</span>
          ))}
        </div>
        
        <div className="infoCoffee">
          <p className="titleCoffee">{coffee.title}</p>
          <p className="subtitleCoffee">{coffee.subtitle}</p>
        </div>
        
        <div className="AddInformation">
          <p className="priceCoffee">
            R$ <span>{coffee.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </p>

          <Counter
            quantity={quantity}
            increment={() => setQuantity(quantity + 1)}
            decrement={() => setQuantity(Math.max(0, quantity - 1))}
          />

          <button className="ShoppingCart" onClick={() => createAddItemToCart(coffee, quantity)}>
            <ShoppingCart className="iconShoppingCart" size={22} weight="fill" />
          </button>
        </div>
      </div>
    </ProductCardContainer>
  );
}
