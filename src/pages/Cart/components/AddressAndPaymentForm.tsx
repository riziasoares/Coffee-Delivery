import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { AddressAndPaymentFormContainer } from "./AddressAndPaymentFormContainer";
import { FormSection } from "./FormSection";
import { PaymentButton } from "./PaymentButton";
import { useFormContext } from "react-hook-form";

export interface OrderInfo {
  cep: string;
  street: string;
  number: string;
  neighborhood: string;
  complement?: string;
  city: string;
  uf: string;
  paymentMethod: string | undefined;
}

interface AddressAndPaymentFormProps {
  selectedPayment: string;
  setSelectedPayment: (payment: string) => void;
}

export function AddressAndPaymentForm({ selectedPayment, setSelectedPayment }: AddressAndPaymentFormProps) {
  const { register } = useFormContext();

  const handleClick = (formOfPayment: string) => {
    console.log('Form of payment clicked:', formOfPayment);
    setSelectedPayment(formOfPayment);
  };

  return (
    <AddressAndPaymentFormContainer>
      <p className="title">Complete seu pedido</p>

      <div className="formWrapper">
        <FormSection
          icon={<MapPinLine size={22}/>}
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
        >

        <div className="formWrapper">
          <input
            className="cepField"
            type="text"
            placeholder="CEP"
            {...register('cep')}
          />
          <input
            className="streetField"
            type="text"
            placeholder="Rua"
            {...register('street')}
          />

          <div className="secondPartForm">
            <input
              className="numberField"
              type="text"
              placeholder="Número"
              {...register('number')}
            />
            <div className="optionalInput"> 
              <input
                className="complementField"
                type="text"
                placeholder="Complemento"
                {...register('complement')}
              />
              <span className="optionalText">Opcional</span>
            </div>   
          </div>
          <div className="thirdPartForm">
            <input
              className="neighborhoodField"
              type="text"
              placeholder="Bairro"
              {...register('neighborhood')}
            />
            <input
              className="cityField"
              type="text"
              placeholder="Cidade"
              {...register('city')}
            />
            <input
              className="ufField"
              type="text"
              placeholder="UF"
              {...register('uf')}
            />
          </div>
          </div>
        </FormSection>

        <FormSection
          icon={<CurrencyDollar size={22} className="icon"/>}
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        >
          <div className="buttonsWrapper">
            <PaymentButton
              icon={<CreditCard size={16}/>}
              formOfPayment="cartão de crédito"
              isSelected={selectedPayment === "cartão de crédito"}
              onClick={handleClick}
            />
            <PaymentButton
              icon={<Bank size={16}/>}
              formOfPayment="cartão de débito"
              isSelected={selectedPayment === "cartão de débito"}
              onClick={handleClick}
            />
            <PaymentButton
              icon={<Money size={16}/>}
              formOfPayment="dinheiro"
              isSelected={selectedPayment === "dinheiro"}
              onClick={handleClick}
            />
          </div>
        </FormSection>
      </div>
    </AddressAndPaymentFormContainer>
  );
}
