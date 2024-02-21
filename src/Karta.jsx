import './Karta.css';


function Karta({obr, klik}) {

  return (
    <button className='PrzyciskObr'>
        <img src={obr} onClick={klik} alt="obrazek"/>
    </button>
  );
}

export default Karta;
