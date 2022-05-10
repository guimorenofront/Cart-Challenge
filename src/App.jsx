import { ContainerBox } from "./components/Container-Box/Container-box";
import "./App.scss";
import { ContainerLine } from "./components/Container-Line/Container-line";
import { ProductTemplate } from "./components/Produtos-Template/ProductTemplate";
import { useEffect, useState } from "react";

function App() {
  const [Selector, SetSelector] = useState(true);
  const [URLDATA, SetURLDATA] = useState(
    require("./data/json/Acima10Reais.json")
  );
  useEffect(() => {
    //Seletor De Request para as listas
    if (Selector) {
      SetURLDATA(require("./data/json/Acima10Reais.json"));
    } else {
      SetURLDATA(require("./data/json/Abaixo10Reias.json"));
    }
    console.log(Selector);
  }, [Selector]);

  //obtendo o Preço total
  var total = URLDATA.items.reduce(getTotal, 0);
  function getTotal(total, item) {
    return total + (item.sellingPrice / 100) * item.quantity;
  }

  //Logica da Caixa de Frete
  let shippingPrice;
  let visible = "flex"
  if (total >= 10) {
    shippingPrice = "Parabéns, sua compra tem frete grátis !";
  } else {
    visible = "none"
  }
  return (
    <div className="App">
      {/* Acima De 10 Reais */}
      <ContainerBox>
        <ContainerLine>
          <div>
            {/* Populando os Components e Formatando os Preços */}
            {URLDATA.items.map((element) => {
              const priceFormat = (element.price / 100).toLocaleString(
                "pt-br",
                { style: "currency", currency: "BRL" }
              );
              const SellingPriceFormat = (
                element.sellingPrice / 100
              ).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
              console.log(element);
              return (
                <ProductTemplate
                  ImgURL={element.imageUrl}
                  ProductPrice={priceFormat}
                  ProductSellingPrice={SellingPriceFormat}
                  ProductTittle={element.name}
                  key={element.id}
                  Id={element.id}
                />
              );
            })}
          </div>
        </ContainerLine>
        <ContainerLine>
          <div className="DownBox">
            <div className="TotalLine">
              <h3>Total</h3>
              <h3>
                {total.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h3>
            </div>
            <div className="Shipping" style={{display:visible}}>
              <p>{shippingPrice}</p>
            </div>
          </div>
        </ContainerLine>
      </ContainerBox>
      <button onClick={() => SetSelector(!Selector)} className="ButtonChange">Mudar Lista</button>
    </div>
  );
}

export default App;
