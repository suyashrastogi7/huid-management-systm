import React from 'react'

import logo from '../../Images/HUID.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//import { faSearch } from '@fortawesome/free-solid-svg-icons'
//import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return(
        <header className='px-4 pt-4 columns is-multiline is-mobile is-justify-content-space-between mb-0'>
            <div className='column is-centered is-one-quarter'>
                <img className='ml-6' src={logo} alt='logo'/>
            </div>
            <div className='column is-half'>
                <input className="input is-rounded has-background-light" type="text" placeholder='Search' />
            </div>
            <div className='column is-one-quarter has-text-right'>
                
                <a className='is-size-4 mx-3'><FontAwesomeIcon icon={faBell} /></a>
                <a href='/settings' className='is-size-4 mx-3'><FontAwesomeIcon icon={faCog} /></a>
            </div>
        </header>
    )
}

export default Header;