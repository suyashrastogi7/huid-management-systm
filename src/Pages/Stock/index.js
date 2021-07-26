import React from 'react'

//Components
import Navbar from '../../Components/Navbar'
import Header from '../../Components/Header'

const Stock = () => {
    return(
        <div>
            <Header />
            <div className='is-flex'>
                <Navbar />
                <div class="column has-background-light">
                    <div class="hero p-5">
                        <div className='box p-3'>
                            <h1 className='is-size-5 has-text-weight-bold'>Add a stock</h1>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            
        </div>
    );
}

export default Stock;