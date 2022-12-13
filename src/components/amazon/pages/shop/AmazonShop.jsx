import React, {Fragment} from 'react'
import { Products } from '../../Products'
import AmazonProduct from '../../components/AmazonProduct'
import './AmazonShop.css';


function ListItem(item) {
    console.log(item)
  return (
    <Fragment>
      <dt>title</dt>
      <dd>descriptinon</dd>
    </Fragment>
  );
}


const AmazonShop = () => {
  return (
    <>
    <div className='shop'>
        <div className='shopTitle'>
            <h1>Amazon</h1>
        </div>
    </div>
    <div className='products'>
    {Products.map((product) =>
        <AmazonProduct data={product} key={product.id}/>
        // ListItem(product)
    )}
    </div>
    </>
  )
}

export default AmazonShop