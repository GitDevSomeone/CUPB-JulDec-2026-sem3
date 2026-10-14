import React, { useState, useEffect, useMemo } from 'react'

function Api() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  useEffect(()=>{
      fetch("https://dummyjson.com/products")
      .then(resp => resp.json())
      .then(data => setProducts(data.products))
      .catch(error => console.log(error))
  }, [])

  let searchedProducts = useMemo(()=> {
   return products.filter((value, index)=>{
    let productName = value.title.toLowerCase()
    let lowerSearch = search.toLowerCase()
    if(productName.includes(lowerSearch)){
      return true
    }
  })
  }, [search, products])

  console.log(searchedProducts)

  return (
    <>
   
      <input style={{
        width: "100vw",
        height: "30px",
        marginBottom: "10px"
      }}
      onChange={(event)=> setSearch(event.target.value)}
      type='text' placeholder='Search Products...' />



      <div style={{
        display: 'flex',
        height: "100vh",
        justifyContent: "space-around",
        alignItems: 'center',
        flexWrap: "wrap"

      }}>
        {searchedProducts.map((value, index)=>{
            return (
              <div style={{
                border: "1px solid black",
                width: "200px",
                height: "300px",
                textAlign: 'center'
              }}>
                <h2>{value.title}</h2>
                <p>{value.description}</p>
                <p>price : ${value.price}</p>
                <button>Buy Now</button>
              </div>
            )
        })}
      </div>
    </>
  )
}

export default Api
