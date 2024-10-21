import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'

export const AddProduct = () => {

  const [image, setImage] = useState(false);

  const [productDetails, setProductDetails] = useState({
    name:"",
    image:"",
    category:"women",
    old_price:"",
    new_price:""
  })

  const changeHandler = (e) => {
    setProductDetails({...productDetails, [e.target.name]:e.target.value})
  }

  const Add_product = async () => {
    console.log(productDetails);

    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product', image);

    await fetch('http://localhost:4000/upload', {
      method:'POST',
      headers:{
        Accept:'application/json',
      },
      body:formData
    }).then((resp) => resp.json()).then((data) => {responseData = data});

    if(responseData.success){
      product.image = responseData.image_url;
      console.log(product);

      await fetch('http://localhost:4000/addproduct',{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify(product),
      })
      .then((resp) => resp.json()).then((data) => {
        data.success?alert("Product Added"):alert("Failed")
      })
    }
  }

  const imageHandler = (e) => {
    setImage(e.target.files[0])
  }
  return (
    <div className='add-product'>
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input value={productDetails.name} type="text" name='name' placeholder='Type here' onChange={changeHandler} />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input value={productDetails.old_price} type="text" name='old_price' placeholder='Type here' onChange={changeHandler} />
        </div>
        <div className="addproduct-itemfield">
          <p> Offer Price</p>
          <input value={productDetails.new_price} type="text" name='new_price' placeholder='Type here' onChange={changeHandler} />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Category</p>
        <select value={productDetails.category} name="category" className='addproduct-selector' onChange={changeHandler} >
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img  src={image ? URL.createObjectURL(image):upload_area} alt=""  className='addproduct-thumnail-img'/>
        </label>
        <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
      </div>
      <button className='addproduct-btn' onClick={Add_product}>ADD</button>
    </div>
  )
}
