import "./Cards.css";
function Cards({id, title, userId, body, removeItem}) {

    
  return (
      <div
        className="h-[400px] w-[30%] border-2 bg-white rounded-xl shadow-lg p-2 "
        key={id}
      >
        <div className="flex justify-end m-2">
          <button onClick={(event) => {event.preventDefault(); removeItem(id)}}>&#10006;</button>
        </div>
        <div>{id}</div>
        
        <div>
          <p className="font-bold text-md">{title}</p>
        </div>
        <div>
          <p className="  ">{body}</p>
        </div>
        <div>
          <img
            className="rounded h-[180px] w-[400px]"
            src="https://media.istockphoto.com/id/681013136/photo/british-daily-newspapers.jpg?s=612x612&w=0&k=20&c=97-nul1hqIUE_aZs3DlfTAu5pY0FvwqBeF5jOb9poKQ="
          ></img>
        </div>
      </div>
   
   
  );
}

export default Cards;

//  
// 
// 
// 
//