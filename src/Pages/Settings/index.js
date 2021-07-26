import React from 'react';

//Components
import Navbar from '../../Components/Navbar'
import Header from '../../Components/Header'

const Settings = () => {
    return(
        <div>
            <Header />
            <div className='is-flex'>
                <Navbar />
                <div class="column has-background-light">
                    <h1>This is settings</h1>
                </div>
            </div>
            
            
        </div>
    )
}

export default Settings;