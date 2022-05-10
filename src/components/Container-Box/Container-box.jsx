import { BuyButton } from '../buy-button/buyButton';
import { ContainerLine } from '../Container-Line/Container-line';
import './ContainerBox.scss'

export const ContainerBox = (props) => {
  return (
    <div className="ContainerBox">
        <ContainerLine>
            <h1 className='Tittle'>Meu carrinho</h1>
        </ContainerLine>
        {props.children}
        <BuyButton/>
    </div>
  );
};
