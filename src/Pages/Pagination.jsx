
function Pagination({currentPage,totalPages,onChangePage}) {
    const pages = Array(totalPages).fill(0).map(( _, index)=> index + 1);
    console.log(pages);
    
  return (
    <div className="flex  gap-3  mt-[90px] mx-[110%]  text-blue-900">
        {
          pages.map((page)=>(
            <button  className= { page===currentPage?"rounded-full p-[10px] bg-gray-500":"bg-white"} key={page} onClick={() => onChangePage(page)}>{page}</button>
          ))  
        }
    </div>
  )
}

export default Pagination