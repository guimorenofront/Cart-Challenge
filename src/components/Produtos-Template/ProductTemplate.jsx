import './Product.scss'
export const ProductTemplate = (props) => {
  return (
    <div className="ProductComponent" ProductId={props.id} >
        <div className="Img">
            <img src={props.ImgURL} alt={props.ImgAlt}/>
        </div>
        <div className="productContent">
            <h3>{props.ProductTittle}</h3>
            <p className="Product-price">{props.ProductPrice}</p>
            <p className="Product-selling-price">{props.ProductSellingPrice}</p>
        </div>
    </div>
  );
};
