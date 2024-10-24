import './App.css';
import TableButton from './TableButton';
import {useState} from 'react';
import { EXAMPLE } from './data';
import { EXAMPLES } from './data';
import { EXAMPLES3 } from './data';
import { CiHeart } from "react-icons/ci";


function App() {
  const [result,setResult]=useState('');

  function handle(data)
  {
    console.log(data);
    setResult(data);
  }

  return(
    <div className='app'>
      <main>
        <section>
          <h1 className='heading'>electronics store</h1>
          <menu>
            <TableButton isSelected={result ==='mobile'} onselect={()=>handle('mobile')}>Mobile</TableButton>
            <TableButton isSelected={result ==='tablets'} onselect={()=>handle('tablets')}>Tablets</TableButton>
            <TableButton isSelected={result ==='laptop'} onselect={()=>handle('laptop')}>Laptop</TableButton>
          </menu>
          {result ? <div id="tab-content">
            <h3 className='titles'>{EXAMPLE[result].title}</h3>
            <div className='cart-products'>
              <div className='first-cart'>
                <font>{EXAMPLES[result].images}</font>
                <h4 className='description'>{EXAMPLE[result].description}</h4>
                <h3 className='price'>{EXAMPLE[result].price}</h3>
                <button className='buttons'>Add To Cart</button>
                <p className='heart'><CiHeart /></p>
              </div>

              <div className='second-cart'>
                <font className='mobiles'>{EXAMPLE[result].image}</font>
                <h4 className='description'>{EXAMPLES[result].description}</h4>
                <h3 className='price'>{EXAMPLES[result].price}</h3>
                <button className='buttons'>Add To Cart</button>
                <p className='heart'><CiHeart /></p>
              </div>

              <div className='third-cart'>
                <font className='mobiles'>{EXAMPLES3[result].photo}</font>
                <h4 className='description'>{EXAMPLES3[result].description} </h4>
                <h3 className='price'>{EXAMPLES3[result].price}</h3>
                <button className='buttons'>Add To Cart</button>
                <p className='heart'><CiHeart /></p>
              </div>

              <div className='first-cart'>
                <font>{EXAMPLES[result].images}</font>
                <h4 className='description'>{EXAMPLE[result].description}</h4>
                <h3 className='price'>{EXAMPLE[result].price}</h3>
                <button className='buttons'>Add To Cart</button>
                <p className='heart'><CiHeart /></p>
              </div>
             
            </div>
          </div>:
          <p>WELCOME TO OUR WEBSITE....!!!</p>
          }
        </section>
      </main>
    </div>
  );
}

export default App;
