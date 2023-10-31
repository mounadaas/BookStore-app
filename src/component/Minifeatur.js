import './minifeatur.css'

function Minifeatur({namesList}){
    const cards = namesList.map(({title, paragraph,image},id)=>
    (
        <div className="flex justify-start items-center gap-4 p-4 w-full sm:w-[48%] md:w-[23%] bg-oxfordBlue" key={id}>
            <div className="image ">
                <img src={image} alt="shipping"  className="w-14"/>
            </div>
            <div className="">
                <h1 className="font-bold text-sm">{title}</h1>
                <p className="text-sm ">{paragraph}</p>
            </div>
        </div>
    )) 
    return(
        <>
            <section className='container m-auto  p-4 justify-between items-center flex flex-wrap gap-4 '>
                {cards}
            </section>
        </>
    )
}
export default Minifeatur;