import React from 'react'

//Components
import Navbar from '../../Components/Navbar'
import Header from '../../Components/Header'

const Taxes = () => {
    return(
        <div>
            <Header />
            <div className='is-flex'>
                <Navbar />
                <div class="column has-background-light">
                    <div class="block">
                      <h1>This is taxes</h1>
                    </div>
                    
                </div>
            </div>
            
            
        </div>
    );
}

export default Taxes;