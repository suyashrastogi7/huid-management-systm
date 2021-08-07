import React, {useState, useEffect} from 'react'

//Components
import Navbar from '../../Components/Navbar'
import Header from '../../Components/Header'

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Customers = () => {

    const tableHeads = ['Serial No.','Name', 'Gender', 'Email', 'Phone Number', 'PAN Number']
    const [customers, setCustomers] = useState([]);
    const [search, setSearch] = useState('')

    useEffect(() => {
        setCustomers([{id : 1,name : 'Suyash rastogi', gender : 'Male', email : 'suyash.rastogi01@gmail.com', phone : '8299688077', pan : 'EEGPR234K'},
        {id : 2,name : 'Suyash rastogi', gender : 'Male', email : 'suyash.rastogi01@gmail.com', phone : '8299688077', pan : 'EEGPR234K'},
        {id : 3,name : 'Suyash rastogi', gender : 'Male', email : 'suyash.rastogi01@gmail.com', phone : '8299688077', pan : 'EEGPR234K'},
        {id : 4,name : 'Suyash rastogi', gender : 'Male', email : 'suyash.rastogi01@gmail.com', phone : '8299688077', pan : 'EEGPR234K'},
        {id : 5,name : 'Suyash rastogi', gender : 'Male', email : 'suyash.rastogi01@gmail.com', phone : '8299688077', pan : 'EEGPR234K'}])
    }, [])

    return(
        <div>
            <Header />
            <div className='is-flex'>
                <Navbar />
                <div class="column has-background-light">
                    <div class="box">
                        <div className='is-flex is-justify-content-space-between'>
                            <h1 className='is-size-5 has-text-weight-bold'>Customers</h1>
                            <div>
                                <div className='field-body '>
                                    <div className="field ">
                                        <p className="control is-expanded has-icons-left">
                                        <input className="input is-rounded" required type="text" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} />
                                        <span className="icon is-small is-left">
                                            <FontAwesomeIcon icon={faSearch} />
                                        </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='hero my-4'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        {tableHeads.map((item,i) => {
                                            return(
                                                <th key={i}><abbr title={item}>{item}</abbr></th>
                                            )
                                        })}
                                    </tr>
                                </thead>
                                <tbody>
                                    {customers.map((item,i) => {
                                        return(
                                            <tr>
                                                <th>{item.id}</th>
                                                <td>{item.name}</td>
                                                <td>{item.gender}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.pan}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            
        </div>
    );
}

export default Customers;