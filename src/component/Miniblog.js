

const Miniblog = ({namesList}) => {
    const cards = namesList.map(({title, image},id)=>(
        <div className="w-full sm:w-[48%] md:w-[32%] border border-white1 p-2 flex flex-col  items-center" key={id}>
          <img src={image} alt="shipping"  className="w-full"/>
          <h1 className="font-bold text-md  p-3 border-b-2 border-white1 hover:text-maxBlueGreen">{title}</h1>
          <p className=" mt-3 mb-4 text-xs text-spanishGray">04 Mrch, 2023 / <span className="hover:text-maxBlueGreen">1 comment</span></p>
          <p className=" text-sm mb-3 text-center max-w-18" >The summer holidays are wonderful. Dressing for them can ve Significantly less so: packing light...</p>
          <button className="self-center text-sm font-bold border border-white1 rounded-full px-6 py-3 hover:bg-maxBlueGreen hover:border-maxBlueGreen">Read More...</button>
        </div>
    ))

  return (
    <section className="container m-auto flex flex-wrap gap-3">
      {cards}
    </section>
  )
}

export default Miniblog
