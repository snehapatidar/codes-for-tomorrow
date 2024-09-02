import { useState, useEffect} from "react"
import Cards from "../components/card/Cards";
import Pagination from "./Pagination";
function Home() {
    const [data,setData] = useState([])
    const [currentPage,setCurrentPage] = useState(1);
    const [pageSize,setPageSize] = useState(6);
    

    
    useEffect(() => {
     async function fetchdata(){
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const jsondata = await response.json();
        setData(jsondata);
     }
     fetchdata();
    }, [])
 
    const removeItem = (id) =>{
        let index = data.findIndex(item => item.id === id);
        if (index !== -1) {
          data.splice(index,1);
          setData([...data]);
        }
  }
   
  const getPaginationMetadata =(data, pageSize) =>{
    const totalPages = Math.ceil(data.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return {totalPages, startIndex, endIndex}

  }
   const {totalPages, startIndex, endIndex} = getPaginationMetadata(data,pageSize)
//   console.log(totalPages);
//     console.log(startIndex);
//     console.log(endIndex);
    
    if(!data){
        return <div>Loading...</div>
    }

    

    return (
        <div className=" flex flex-wrap justify-between  m-6 space-y-1 gap-6">
        {/* */}

        { data.slice(startIndex,endIndex).map((item) => (
             <Cards
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    body={item.body}
                    removeItem = {removeItem}
                />
            ))}
           <div>
           <Pagination className="flex justify-evenly gap-3 text-center"
                currentPage={currentPage}
                totalPages={totalPages}
                onChangePage={(page)=> setCurrentPage(page)}
            />
           </div>
        </div>
        
      )
        
}

export default Home