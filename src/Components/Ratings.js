let array = [1,2,3,4,5]


function Ratings(props) {
  console.log(props)
  return (
    <div className="ratings_div">
      {array.map((element) => (                           
      <div className={`Ratings ${(props.num === element) ? "chechked" : ""}`}          
        onClick={() => {
          props.setNum(element);
        }}>     
         {element}
        </div>
      )
      )}
    </div>
  )
}

export default Ratings;

