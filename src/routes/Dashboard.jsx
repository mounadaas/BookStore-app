import { useDispatch } from "react-redux"
import { inserBooks } from "../store/bookSlice";
import { useRef } from "react";

const Dashboard = () => {
    const title = useRef()
    const price = useRef()
    const description = useRef()

    const dispatch = useDispatch();

    const handleSubmite =(e)=>{
        e.preventDefault();
        const data ={
            title: title.current.value,
            price: price.current.value,
            description: description.current.value,
        };
        dispatch(inserBooks(data));
        title.current.value= null;
        price.current.value= null;
        description.current.value= null;
    }
  return (
    <section className="bg-xiketic p-4">
        <div className="container m-auto  p-2 flex flex-wrap justify-center gap-5">
            <div className="w-full md:w-[48%] ">
                <h1 className="font-bold text-xl">Insert Book</h1>
                {/* form */}
                <form className="p-3" onSubmit={handleSubmite}>
                    <div className=" pb-3">
                        <label htmlFor="Title" className="text-sm ">Title</label>
                        <input type="text" className="w-full p-2 bg-inherit hover:border-maxBlueGreen  hover:border border-white1  border rounded-lg" id="Title" aria-describedby="title" required ref={title} />
                    </div>
                    <div class=" pb-3">
                        <label htmlFor="Price" className="text-sm mb-1">Price</label>
                        <input type="number" className="w-full p-2 bg-inherit hover:border-maxBlueGreen  hover:border border-white1  border rounded-lg" required ref={price} />
                    </div>
                    <div class=" pb-3">
                        <label htmlFor="Description" className="text-sm mb-1">Description</label>
                        <textarea type="text" className="w-full p-2 bg-inherit hover:border-maxBlueGreen  hover:border border-white1  border rounded-lg" required ref={description} />
                    </div>
                    <button className="text-sm font-bold border border-white1 rounded-lg px-6 py-2 hover:bg-maxBlueGreen hover:border-maxBlueGreen">Submit</button>
                </form>
            </div>
            
            <div className="w-full md:w-[48%]  ">
                <h1 className="font-bold text-xl pb-3">Books List</h1>
                <ul className="border border-white1 p-2 rounded-lg">
                    <li className="flex justify-between items-center gap-4">
                        <div className="text-md">Cras justo odio</div>
                        <div className="btns">
                            <button className="text-sm font-bold mx-2 border border-white1 rounded-lg px-5 py-1 bg-maxBlueGreen hover:border-maxBlueGreen">Read</button>
                            <button className="text-sm font-bold  rounded-lg px-5 py-1 bg-red-700 border-red-700 border">Delete</button>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="">
                <h1 className="font-bold text-xl pb-3">Books Details</h1>
                <div className="p-4 rounded-md bg-gray-500 ">
                There is no post selcted yet. Please Select!
                </div>
                {
                     /*  <div>
                            <p className="font-bold">Title:</p>
                            <p className="font-light">Description:</p>
                            <p className="font-italic">Price:</p>

                        </div>  */
                    }
            </div>

        </div>
    </section>
  )
}

export default Dashboard
