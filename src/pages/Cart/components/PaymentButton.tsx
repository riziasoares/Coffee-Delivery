import { ReactNode } from "react";
import { PaymentButtonContainer } from "./PaymentButtonContainer";

interface PaymentButtonProps {
  icon: ReactNode;
  formOfPayment: string;
  isSelected: boolean;
  onClick: (formOfPayment: string) => void;
}

export function PaymentButton({ icon, formOfPayment, isSelected, onClick }: PaymentButtonProps) {

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    onClick(formOfPayment); // Passa o tipo de pagamento para a função de clique do componente pai
  };

  return (
    <PaymentButtonContainer>
      <button
        type="button"
        onClick={handleClick}
        className={isSelected ? "clicked" : ""}
      >
        <span className="iconButton">{icon}</span>
        <p className="textFormOfPayment">{formOfPayment}</p>
      </button>
    </PaymentButtonContainer>
  );
}
