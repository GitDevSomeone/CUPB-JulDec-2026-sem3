import {useState, useEffect, useMemo} from 'react'

function Api() {

  const [productsArr, setProductsArr] = useState([])
  const [searchString, setSearchString] = useState("")

  useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then((response)=> response.json() )
    .then((data)=> setProductsArr(data.products))
    .catch((error) => console.log(error))

    // let data = localStorage.getItem("products")
    // if(data){
    //   data = JSON.parse(data)
    // }else{
    //   data = []
    // }
    // setProductsArr(data)
  }, [])

  let filteredArray = useMemo(()=>{
    return  productsArr.filter((value, index)=>{
        if(value.title.toLowerCase().includes(searchString.toLowerCase())){
           return true
        }
      })
  }, [searchString, productsArr]) 
 

 
  return (
    <>
    <input type='text' 
    style={{
      width: "100%",
      height: "30px",
      marginBottom: "5px"
    }}
    placeholder='search products...'
    onChange={(event)=> setSearchString(event.target.value)} />

    <button>Ascending</button>
    <button>Descending</button>
    <button>Reset</button>


    <div style={{
      display: "flex",
      height: "100vh",
      justifyContent: "space-around",
      flexWrap: "wrap",
    }}>
      {filteredArray.length == 0 ? <p>no products found</p> : filteredArray.map((value, index)=>{
        return (
          <div key={index} style={{
            height: "300px",
            width: "250px",
            border: "1px solid black",
            marginBottom: "5px",
            textAlign: "center",
          }}>
            <h2>{value.title}</h2>
            <p>{value.description}</p>
            <p>{value.category}</p>
            <p>Price  ${value.price}</p>
            <button>Buy</button>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default Api
