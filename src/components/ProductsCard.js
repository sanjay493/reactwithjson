import React from 'react'

function ProductsCard({productData}) {
    console.log(productData)
    return(
    <>
    <section className='main-card--container'>
        {productData.map((curElem)=>{
          //destructuring
                const {id,name,category,image,description}=curElem
                return(
                  <div className="card-container" key={id} >
                  <div className="card">
                      <div className="card-body">
                        <span className="car-number card-circle subtle">{id}</span>
                        <span className="card-author subtle">{category}</span>
                      <h2 className="card-title">{name}</h2>
                      <span className="card-description subtle">{description}</span>
                      <div className="card-read">Read More</div>
                      </div>
                           <img src={image} alt="images" className="card-media"/>
                           <span className="card-tag subtle">Order Now</span>                      
                    </div>
                  </div>
                
                )
              })
            }
 </section>
</>
)
  
}

export default ProductsCard
