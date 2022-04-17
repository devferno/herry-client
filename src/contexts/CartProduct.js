import{ useState,createContext } from "react";

export const CartList= createContext(0);

export const CartProvider=({children})=>{
    const [productList,setProduct] = useState([]);

    //here we gonna ge the card items or the cart just the cart length
    return(
        <CartList.Provider value={{productList,setProduct}}>
            {children}
        </CartList.Provider>
    )
}