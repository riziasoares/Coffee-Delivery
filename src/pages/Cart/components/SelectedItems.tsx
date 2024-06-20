import { SelectedItemsContainer } from "./SelectedItemsContainer";
import { ButtonDefault } from "../../../components/ButtonDefault";
import { SelectedItemsCard } from "./SelectedItemsCard";
import { useContext } from "react";
import { ItemsContext } from "../../../context/ItemsContext";


export function SelectedItems() { 
  const { items, totalPrice } = useContext(ItemsContext);
  const deliveryValue = 3.50;

  return (
    <SelectedItemsContainer>
      <p className="title">Cafés selecionados</p>
      <div className="cartWrapper">
        {items.map((item) => (
          <div key={item.id}>
            <SelectedItemsCard item={item} />
            <div className="cardDivisionLine"></div>
          </div>
        ))}
        <div className="paymentInfo">
          <div className="valueOfitemsAndDelivery">
            <p className="valueOfItems">
              Total de itens
              <span>{`R$ ${totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</span>
            </p>

            {items.length > 0 && (
              <>
                <p className="valueOfDelivery">
                  Entrega
                  <span>{`R$ ${deliveryValue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</span>  
                </p>
            
                <p className="totalAmountPayable">
                  Total
                  <span>{`R$ ${(totalPrice + deliveryValue).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</span>
                </p>
              </>
            )}
          </div>         
        </div>
        {items.length > 0 && <ButtonDefault />}  
      </div>
    </SelectedItemsContainer>
  );
}
