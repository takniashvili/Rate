import {useState} from 'react';
import Ratings from './Components/Ratings';
import Submitted from './Components/Submitted';

function app(){
  const [num, setNum] = useState(0);
  const [which, setWhich] = useState(false);

  return (
    <div>
       {/* 1. false && false = false */ }
      {(which && (num > 0))
      ?
      <div>
        {/* 8. აქაც Submitted-ს გადავეცით მხოლოდ num ობიექტი */}
        <Submitted num={num} />
     {/* 10. მოკლედ : ეს div არი false თავიდან
        იმიტომ რომ 0 > 0 გადაეცემა */}
     {/* 12. როცა მომხარებელი გადასცემს რიცხვს div ხდება true*/}
      </div>
      :
      <div>
              {/* 2. num და setNum useState-ს გადავცემთ Rating კომპონენტს   */}
        <Ratings num={num} setNum={setNum} />
        {/* 10. ესეც არის false და გაეშვა რადგან 
        თუ პირველი არი false ეშვება მეორე პირდაპირ */}
        <button onClick={() => {
    // 7. მომხმარებელი სანამ num-ს არ გადასცემს 0-ზე მეტს დარჩება false-დ
          if (num > 0) {
            setWhich(true)    
    // 11. როცა მომხარებელი გადასცემს რიცხვს და გახდება
    //  (which && (true) ეს საკმარისი არარი 
    //  SubmitComponent-ის გასაშვებად რადგან ისევ აქ მოდის
    // false && true = false ამიტომაც მივეცით true which-ს
          }
        }}>
          SUBMIT
        </button>
      </div>
      }

    </div>
  );
}

  
export default app;
