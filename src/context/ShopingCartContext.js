import{createContext, useContext, useState} from "react"

const ShopingCartContext = createContext({});

const ShopingCartProvider = ({children}) => {
const [cartItems, setCartItems] = useState([])
const getItemQuantity=(id)=>{
    return cartItems.find((item)=>item.id === id)?.quantity || 0;
}
const increaseCartQuantity =(id)=>{
    setCartItems((currItems)=>{
        if(currItems.find(item=>item.id === id) == null){
            return [...currItems ,{id, quantity:1}]
        }else{
            return currItems.map((item) => {
                if(item.id === id){
                    return {...item, quantity: item.quantity + 1 }
                }
                else{
                    return item;
                }
            })
        }
    })
}

const decreaseCartQuantity =(id)=>{
    setCartItems((currItems)=>{
        if(currItems.find(item=>item.id === id) == null){
            return currItems.filter((item)=> item.id !== id)
        }else{
            return currItems.map((item) => {
                if(item.id === id){
                    return {...item, quantity: item.quantity - 1 }
                }
                else{
                    return item;
                }
            })
        }
    })
}

const removeItemFromCart=(id)=>{
setCartItems((currItems)=> currItems.filter((item)=> item.id !== id))
}
const cartQuantity = cartItems.reduce((quantity,item)=>( item.quantity + quantity
),0)


  return (
    <ShopingCartContext.Provider value={{cartQuantity,cartItems,getItemQuantity,increaseCartQuantity,decreaseCartQuantity,removeItemFromCart}}>
    {children}
    
    </ShopingCartContext.Provider>
  
    )
}

export default ShopingCartProvider 

export const useShopingCart=()=>{
    return useContext(ShopingCartContext)
}
