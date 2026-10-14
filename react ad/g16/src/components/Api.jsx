import {useState, useEffect, useMemo} from 'react'

function Api() {

    const [productsArr, setProductsArr] = useState([])
    const [search, setSearch] = useState("")

    useEffect(()=>{
         fetch("https://dummyjson.com/products")
            .then((response)=> response.json() )
            .then((data) => {
                 setProductsArr(data.products)
            })
            .catch((error) => console.log(error))
    }, [])

    // filtering on basis of searching

    let searchedProducts = useMemo(()=>{
         return productsArr.filter(function(value, index){
        if(value.title.toLowerCase().includes(search.toLowerCase())){
            return true
        }
    })
    },[search, productsArr])
    

   
  return (

    <>
        <input
            style={{
                width: "100%",
                height: "30px",
                marginBottom: "10px"
            }}
            onChange={(event)=> setSearch(event.target.value)}
        type='text' placeholder='search products...'/>
        
        <button>ascending</button><button>descending</button><button>Reset</button>

        <p>{search}</p>
        <div style={{
            display: "flex",
            height: "100vh",
            justifyContent: "space-around",
            flexWrap: "wrap"

        }}>
        {searchedProducts.map(function(value, index){
            return (
                <div key={index} style={{
                    width: "200px",
                    height: "350px",
                    border: "1px solid black",
                    marginBottom: "10px",
                    textAlign: "center"
                }}>
                    <h2>{value.title}</h2>
                    <p>{value.description}</p>
                    <p>{value.category}</p>
                    <p>price: ${value.price}</p>
                    <button>Buy Now</button>
                </div>
            )
        })}
        </div>
    </>
  )
}

export default Api
