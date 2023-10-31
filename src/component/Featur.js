import Minifeatur from "./Minifeatur";



function Featur(){
    const elements = [
        
        {
            title:"Free Shipping",
            paragraph:"Order over $100",
            image: require('../images/feature-1.png')
        },
        {
            title:"Secure Payment",
            paragraph:"100% secure payment",
            image: require('../images/feature-2.png')

        },
        {
            title:"Best Price",
            paragraph:"Gauranteed Low Cost",
            image: require('../images/feature-3.png')
            
        },
        {
            title:"Easy Return",
            paragraph:"Within 30 Days returns",
            image: require('../images/feature-4.png')
            
        },
    ]
    return(
        <>
        <Minifeatur namesList={elements} />
        </>
    )
}
export default Featur;