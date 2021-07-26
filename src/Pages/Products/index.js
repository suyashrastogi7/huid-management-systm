import React from 'react'

//Components
import Navbar from '../../Components/Navbar'
import Header from '../../Components/Header'

const Products = () => {
    return(
        <div>
            <Header />
            <div className='is-flex'>
                <Navbar />
                <div class="column has-background-light">
                    <div class="block">
                      <h1>This is Products</h1>
                    </div>
                    
                </div>
            </div>
            
            
        </div>
    );
}

export default Products;