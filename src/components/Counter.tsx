import { Minus, Plus } from "phosphor-react";
import { CounterContainer } from "./CounterContainer";

type QuantityType = {
  quantity: number;
  increment: () => void;
  decrement: () => void;
}

export function Counter({ quantity, increment, decrement }: QuantityType) {
  return (
    <CounterContainer>
      <div className="buttonDecreaseAndIncrease">
        <button onClick={decrement}>
          <Minus size={14} weight="bold" />
        </button>
        <span>{quantity}</span>
        <button onClick={increment}>
          <Plus size={14} weight="bold" />
        </button>
      </div>
    </CounterContainer>
  )
}
