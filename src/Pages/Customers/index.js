import React from 'react'

//Components
import Navbar from '../../Components/Navbar'
import Header from '../../Components/Header'

const Customers = () => {
    return(
        <div>
            <Header />
            <div className='is-flex'>
                <Navbar />
                <div class="column has-background-light">
                    <div class="block">
                      <h1>This is Customers</h1>
                    </div>
                    
                </div>
            </div>
            
            
        </div>
    );
}

export default Customers;