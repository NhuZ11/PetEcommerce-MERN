import React , {useEffect, useState} from 'react'
import axios from 'axios'

const ShowProduct = () => {

    const [product, setProduct] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/product/getallproducts").then(res =>{
            setProduct(res.data)
        })
    },[])

    console.log(product)
  return (
    <div>
      <h1>this is product</h1>
      {
        product.map((val,key)=>{
            return <div>
                <h1>{val.title }</h1>
                <h1>{val.description }</h1>
                <h1>{val.price }</h1>
            </div>
        })
      }
    </div>
  )
}

export default ShowProduct
