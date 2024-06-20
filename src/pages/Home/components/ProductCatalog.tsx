import { ProductCard } from "./ProductCard"
import { ProductCatologContainer } from "./ProductCatologContainer"

import imageCoffeeExpress from "../../../assets/coffee-type/type-Express-Coffee.svg"
import imageCoffeeAmericanExpress from "../../../assets/coffee-type/type-AmericanExpress-Coffee.svg"
import imageCoffeeCreamyEspresso from "../../../assets/coffee-type/type-CreamyExpress-Coffee.svg"
import imageCoffeeIcedEspresso from "../../../assets/coffee-type/type-IcedExpress-Coffee.svg"
import imageCoffeeMilk from "../../../assets/coffee-type/type-Milk-Coffee.svg"
import imageCoffeeLatte from "../../../assets/coffee-type/type-Latte-Coffee.svg"
import imageCoffeeCapuccino from "../../../assets/coffee-type/type-Capuccino-Coffee.svg"
import imageCoffeeMacchiato from "../../../assets/coffee-type/type-Macchiato-Coffee.svg"
import imageCoffeeMocaccino from "../../../assets/coffee-type/type-Mocaccino-Coffee.svg"
import imageCoffeeChocolate from "../../../assets/coffee-type/type-Chocolate-Coffee.svg"
import imageCoffeeCuban from "../../../assets/coffee-type/type-Cuban-Coffee.svg"
import imageCoffeeHawaiian from "../../../assets/coffee-type/type-Hawaiian-Coffee.svg"
import imageCoffeeArabic from "../../../assets/coffee-type/type-Arabic-Coffee.svg"
import imageCoffeeIrish from "../../../assets/coffee-type/type-Irish-Coffee.svg"

export interface Coffee {
  id: number;
  image: string;
  tags: string[];
  title: string;
  subtitle: string;
  price: number;
}

export function ProductCatolog() {
  const productList: Coffee[] = [
    {
      id: 1,
      image:imageCoffeeExpress,
      tags:["tradicional"],
      title:"Expresso Tradicional",
      subtitle:"O tradicional café feito com água quente e grãos moídos",
      price: 9.90
    },
    {
      id: 2,
      image:imageCoffeeAmericanExpress,
      tags:["tradicional"],
      title:"Expresso Americano",
      subtitle:"Expresso diluído, menos intenso que o tradicional",
      price: 9.90
    },
    {
      id: 3,
      image:imageCoffeeCreamyEspresso,
      tags:["tradicional"],
      title:"Expresso Cremoso",
      subtitle:"Café expresso tradicional com espuma cremosa",
      price: 9.50
    },
    {
      id: 4,
      image:imageCoffeeIcedEspresso,
      tags:["tradicional", "gelado"],
      title:"Expresso Gelado",
      subtitle:"Bebida preparada com café expresso e cubos de gelo",
      price: 8.90
    },
    {
      id: 5,
      image:imageCoffeeMilk,
      tags:["tradicional", "com leite"],
      title:"Expresso Gelado",
      subtitle:"Bebida preparada com café expresso e cubos de gelo",
      price: 7.90
    },
    {
      id: 6,
      image:imageCoffeeLatte,
      tags:["tradicional", "com leite"],
      title:"Latte",
      subtitle:"Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: 10.50
    },
    {
      id: 7,
      image:imageCoffeeCapuccino,
      tags:["tradicional", "com leite"],
      title:"Capuccino",
      subtitle:"Bebida com canela feita de doses iguais de café, leite e espuma",
      price: 6.00
    },
    {
      id: 8,
      image:imageCoffeeMacchiato,
      tags:["tradicional", "com leite"],
      title:"Macchiato",
      subtitle:"Café expresso misturado com um pouco de leite quente e espuma",
      price: 9.20
    },
    {
      id: 9,
      image:imageCoffeeMocaccino,
      tags:["tradicional", "com leite"],
      title:"Mocaccino",
      subtitle:"Café expresso com calda de chocolate, pouco leite e espuma",
      price: 11.00
    },
    {
      id: 10,
      image:imageCoffeeChocolate,
      tags:["especial", "com leite"],
      title:"Chocolate Quente",
      subtitle:"Bebida feita com chocolate dissolvido no leite quente e café",
      price: 15.00
    },
    {
      id: 11,
      image:imageCoffeeCuban,
      tags:["especial", "alcoólico", "gelado"],
      title:"Cubano",
      subtitle:"Drink gelado de café expresso com rum, creme de leite e hortelã",
      price: 10.30
    },
    {
      id: 12,
      image:imageCoffeeHawaiian,
      tags:["especial"],
      title:"Havaiano",
      subtitle:"Bebida adocicada preparada com café e leite de cocos",
      price: 12.00
    },
    {
      id: 13,
      image:imageCoffeeArabic,
      tags:["especial"],
      title:"Árabe",
      subtitle:"Bebida preparada com grãos de café árabe e especiarias",
      price: 10.50
    },
    {
      id: 14,
      image:imageCoffeeIrish,
      tags:["especial", "alcoólico"],
      title:"Irlandês",
      subtitle:"Bebida a base de café, uísque irlandês, açúcar e chantilly",
      price: 9.90
    }
  ]

  return (
    <ProductCatologContainer>
      <div>
        <p className="title">Nossos cafés</p>

        <div className="coffeeList">
          {productList.map(product => (
            <ProductCard
              key={product.id}
              coffee={product}    
            />
          ))}
        </div>
      </div>
    </ProductCatologContainer>
  )
}