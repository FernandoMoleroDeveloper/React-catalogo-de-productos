import { products } from "../../product-list";
import "./ProductDetail.css"
import React from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../App";

const ProductDetail = ({login}) => {
    let {id} = useParams();
    const authInfo = React.useContext(AuthContext)

    return(
        <div className="detail">
            <h1>Detalle del producto</h1>
            <img src={products[id].image} alt={products[id].name}></img>
           <h3>{products[id].name}</h3>
           <h4>{products[id].price}</h4>
           <p>{products[id].description}</p>
           <button onClick={() => login({...authInfo, favproduct:products[id].name})}>Marcar como favorito</button>

        </div>
    );
}

export default ProductDetail;