import Miniblog from '../component/Miniblog';

const Bloges = () => {
  const elements = [
        
    {
        title:"Significant reading has info",
        image: require('../images/blog-1.jpg')
    },
    {
        title:"Activities Book International",
        image: require('../images/blog-2.jpg')
    },
    {
        title:"International activities of the book",
        image: require('../images/blog-3.jpg')      
    }
  ]
  return (
    <section className="bg-xiketic p-5">
        <h1 className="text-xl font-bold text-center mb-3"> Latest Blog</h1> 
        <p className="text-sm  text-center">Contrary to popular belief, Lorem ipsum is not </p>
        <p className="text-sm  text-center mb-5">simply random.</p>
        <Miniblog namesList={elements} />
    </section>
  )
}

export default Bloges;
