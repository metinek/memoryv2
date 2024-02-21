import './App.css';
import {useState} from 'react';


import k1 from './img/karta1.png';
import k2 from './img/karta2.png';
import k3 from './img/karta3.png';
import tyl from './img/tyl.png';

import Karta from './Karta.jsx';

const Karty=[tyl, k1, k2, k3];
let wylosowane=[1,2,2,3,1,3];
let odkryte=[0,0,0,0,0,0];
let kp=-1;
let kd=-1;




function App() {
  let [karty, setKarty] = useState(Array(6).fill(tyl));

  function obslugaKlik(i) {
    if(odkryte[i]!=0) return;

    let k = karty.slice();
    let kpi, kdi; //indeksy kart



    if(kp==-1) { //to jest karta pierwsza
      k[i] = Karty[wylosowane[i]];
      setKarty(k);
      kp=wylosowane[i];
      odkryte[i] = wylosowane[i];
      kpi=i;
      return;
    }



    if (kd==-1) { //to jest karta druga
      k[i] = Karty[wylosowane[i]];
      setKarty(k);
      kd=wylosowane[i];
      odkryte[i] = wylosowane[i];
      kdi=i;
    }

    if(kp==kd) { //karty równe
      kp=kd=-1;
    }

    else { //karty różne
      k[kpi] = tyl;
      k[kdi] = tyl;
      odkryte[kpi]=0;
      setKarty(kdi);
      kp=kd=-1;

    }




    console.log(i);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory</h1>
      </header>
      <div className='Wiersz'>
        <Karta obr={karty[0]} klik={()=>obslugaKlik(0)}/>
        <Karta obr={karty[1]} klik={()=>obslugaKlik(1)}/>
        <Karta obr={karty[2]} klik={()=>obslugaKlik(2)}/>
      </div>

      <div className='Wiersz'>
        <Karta obr={karty[3]} klik={()=>obslugaKlik(3)}/>
        <Karta obr={karty[4]} klik={()=>obslugaKlik(4)}/>
        <Karta obr={karty[5]} klik={()=>obslugaKlik(5)}/>
      </div>
    </div>
  );
}

export default App;
