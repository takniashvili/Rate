// 8. props-ში გვაქ მხოლოდ num objects 0 არი საწყისი 
// ხოლო დანარჩენი[1,2,3,4,5] მგონი ერთად უნდა იყვნენ :D

function submitted(props) {
    return (
        <div className='submitted'>
            <div> {/* 9. მომხმარებლის მიერ არჩეული რიცხვი */}
                You selected {props.num} out of 5
            </div>
        </div>
    )
}


export default submitted;