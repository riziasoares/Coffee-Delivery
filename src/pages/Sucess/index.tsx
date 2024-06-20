import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { SuccessContainer } from "./styled";

import illustrationDelivery from "../../assets/image/Illustration-dellivery.svg";
import { useLocation } from "react-router-dom";

export function Success() {
  const location = useLocation();
  const { orderData } = location.state || { orderData: null }; 

  return (
    <SuccessContainer>
      <div className="titleWrapper">
        <p className="title">Uhu! Pedido confirmado</p>
        <p className="subtitle">Agora é só aguardar que logo o café chegará até você</p>
      </div>

      <div className="orderInfoWrapperAndIllustration">
        <div className="orderInfoWrapper">

          <div className="orderInfo">
            <span>
              <MapPin className="iconMapPin" size={16} weight="fill" />
              <div>
                <p>Entrega em <strong>{`${orderData.street}, ${orderData.number} `}</strong></p>
                <strong className="secondLineText">
                  {` ${orderData.neighborhood} - ${orderData.city}, ${orderData.complement ? `, ${orderData.complement}` : ''}`}
                  <span className="ufDescription">{`${orderData.uf}`}</span>
                </strong>
              </div>
            </span>
          </div>

          <div className="orderInfo">
            <span>
              <Timer className="iconTimer" size={16} weight="fill" />
              <div>
                <p>Previsão de entrega</p>
                <strong className="secondLineText">20 min - 30 min</strong>
              </div>
            </span>
          </div>

          <div className="orderInfo">
            <span>
              <CurrencyDollar className="iconDollar" size={16} />
              <div>
                <p>Pagamento na entrega</p>
                <strong className="payment">{orderData.paymentMethod}</strong>
              </div>
            </span>
          </div>   
        </div>

        <img src={illustrationDelivery} alt="Ilustração de uma moto indo fazer entrega" />
      </div>
    </SuccessContainer>
  );
}
