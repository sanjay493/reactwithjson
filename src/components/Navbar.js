import React from 'react'

const Navbar=({filterItem,productList})=> {
    
        return (
          <>
           <nav className="navbar">
                <div className="btn-group">
                   {
                     productList.map((curElem)=>{
                       return(
                        <button className="btn-group_item" onClick={()=>filterItem(curElem)}>{curElem}</button>
                   
                       )
                     })
                   }

                     </div>
            </nav>
          
          </>

        )
    }

    export default Navbar
