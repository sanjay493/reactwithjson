import React from 'react'

const Navbar=(filterItem)=> {
    
        return (
          <>
           <nav className="navbar">
                <div className="btn-group">
                    <button className="btn-group_item" onClick={()=>filterItem("leafy")}>Green Vegetables</button>
                    <button className="btn-group_item" onClick={()=>filterItem("seasonal")}>Seasonal</button>
                </div>
            </nav>
          
          </>

        )
    }

    export default Navbar
