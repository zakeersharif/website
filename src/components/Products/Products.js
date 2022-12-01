import {useState} from 'react'

  import { FaStar } from "react-icons/fa";
import './Products.css'


const Products=()=>{
  
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleClick = async () => {
    setIsLoading(true);
  try {
      const response = await fetch('https://fakestoreapi.com/products', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  const result = await response.json();
     console.log( JSON.stringify(result));
  setData(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  const stopClick=()=>{
    setData([])
  }
 return (
    <div className='pp'>
      
      {err && <h2>{err}</h2>}
      <div className='button-container'>
      <button className='button-3' onClick={handleClick}>Let's get Low Price items</button>
      <button className="button-3" onClick={stopClick}>stop showing</button>
      </div>
      {isLoading && <h2 style={{color:'#15c5e8',textAlign:'center'}}>Loading...</h2>}
     
      <ul className='list-container'>
        { data.map(item => {
         
        return (
         
          <li className="li-items"  key={item.id}>
            <img src={item.image} alt="ho" className='photo'/>
            <p>{item.title}</p>
            <p>{item.category}</p>
           
            <b>{item.price}RS</b>
            <p>Rating:{item.rating.rate} <FaStar/></p>
            <br />
          </li>
        );
      })}
      </ul>

     
    </div>
  );
};


export default Products;