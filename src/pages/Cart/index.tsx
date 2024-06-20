import { CartContainer } from "./styled";
import { AddressAndPaymentForm } from "./components/AddressAndPaymentForm";
import { SelectedItems } from "./components/SelectedItems";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod';
import { useContext, useState } from "react";
import { ItemsContext } from "../../context/ItemsContext";

interface OrderInfo {
  cep: string | undefined;
  street: string | undefined;
  number: string | undefined;
  neighborhood: string | undefined;
  complement?: string | undefined;
  city: string | undefined;
  uf: string | undefined;
  paymentMethod: string | undefined;
}

const newInfoValidationFromSchema = zod.object({
  cep: zod.string().length(8, 'Informe um CEP válido'),
  street: zod.string().min(1, 'Informe o endereço de entrega'),
  number: zod.string().min(1, 'Informe o número do endereço de entrega'),
  neighborhood: zod.string().min(1, 'Informe o bairro do endereço de entrega'),
  complement: zod.string().optional(),
  city: zod.string().min(1, 'Informe a cidade do endereço de entrega'),
  uf: zod.string().length(2, 'Informe a sigla do estado do endereço de entrega'),
});

type NewOrderInfoData = zod.infer<typeof newInfoValidationFromSchema>;

export function Cart() {
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState<string>("");

  const newOrderForm = useForm<NewOrderInfoData>({
    resolver: zodResolver(newInfoValidationFromSchema),
  });

  const { handleSubmit } = newOrderForm;
  const { resetItemsFromCart } = useContext(ItemsContext)

  function handleCreateANewOrder(data: NewOrderInfoData) {
    const order: OrderInfo = { 
      cep: data.cep,
      street: data.street,
      number: data.number,
      neighborhood: data.neighborhood,
      complement: data.complement,
      city: data.city,
      uf: data.uf,
      paymentMethod: selectedPayment
    }
    resetItemsFromCart();

    navigate("/cart/success", { state: { orderData: order } });
  }

  return (
      <CartContainer>
        <form onSubmit={handleSubmit(handleCreateANewOrder)}>
          <FormProvider {...newOrderForm}>
            <div className="orderInfoComponents">
              <AddressAndPaymentForm selectedPayment={selectedPayment} setSelectedPayment={setSelectedPayment} />
              <SelectedItems />
            </div>
          </FormProvider>
        </form>
      </CartContainer>      
  )
}