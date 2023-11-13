let array = [1,2,3,4,5]

// 3. prop-ში არის num(ობიექტი) და setNum(ფუნქცია)
function ratings(props) {
  console.log(props)
  return (
    <div className="ratings_div">
      {array.map((element) => (
                                 // 3. მხოლოდ num-ის ამოღება
        <div className={`Ratings ${(props.num === element) ? "chechked" : ""}`}
                       // 4. class-ის განაწილება როდის რა ფერში იყვნენ
        onClick={() => {
          props.setNum(element);
          // 5. setNum ფუნქციას num-ის განახლებისთვის რიცხვებს ვაწვდით
        }}>
          {/* 6. div რიცხვების გამოჩენა მომხმარებლისთვის */}
          {element}
        </div>
      )
      )}
    </div>
  )
}

export default ratings;
