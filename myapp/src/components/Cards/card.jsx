
import './card.css';
import {useState,useEffect} from 'react';
import axios from 'axios';

 const Card=()=>{
    const [productData,setProductData] = useState([]);
    useEffect (()=>{
        getData();
        
    },[]);

    const getData =async()=>{
        try {
      let response=  await axios.get('https://fakestoreapi.com/products');
            setProductData(response.data);
            
        } catch (error) {
            console.log(error);
            
        }
    }
    console.log(productData);




    return (<div className='main'>
    {
      productData.map((e,i)=>{
        return <div className='cards' key={i}>
          <div>
            <img src={e.image} alt="" width={100}/>
          </div>
          <h1>{e.title}</h1>
          <hr />
          <div>
            {e.category}
          </div>
          <div>
            {e.description}
          </div>
          <div className='btns'>
            
            <button>buy ${e.price} </button>
          </div>
          <div>
          
          </div>
          
        </div>

      })
    }
  
      


    </div>
  
  )

}
export default Card;
