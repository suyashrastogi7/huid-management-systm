import React from 'react'

//Components
import Navbar from '../../Components/Navbar'
import Header from '../../Components/Header'

import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Dashboard = () => {

    const sales_data = [{
        total_sales : 354,
        total_revenue : 23600,
        cost : 15000,
    }]
    const purchase_data = [{
        number_of_purchase : 56,
        cancelled_orders : 2,
        returned_orders : 4,
        average_rate_of_purchase : 47345
    }]
    const inventory_data = [{
        rings : 70,
        necklace : 34,
        anklets : 97,
        pendant : 36,
        sets : 5
    }]
    const number_of_users = [{
        customers : 240,
        suppliers : 23,
        workers : 5,
        craftsmen : 7
    }]

    return(
        <div>
            <Header />
            <div className='is-flex'>
            <Navbar />
                <div className="has-background-light p-6" style={{height : '88vh',overflowY : 'scroll'}} >
                    <div className='columns is-multiline is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd' >
                        <div className='column is-half box my-3 mx-4 p-5'>
                            <h1 className='is-size-5 has-text-weight-semibold'>Sales Overview</h1>
                            <div className='columns is-multiline p-3'>
                                <div className='column is-half is-flex'>
                                    <div className='is-size-3 has-text-primary  has-background-light p-3'>
                                        <FontAwesomeIcon  icon={faShoppingBag}  />
                                    </div>
                                    <div className='mx-3'>
                                        <span className='is-size-6'>Total Sales</span><br />
                                        <span className='has-text-weight-bold is-size-3'>{sales_data[0].total_sales}</span>
                                    </div>
                                </div>
                                <div className='column is-half is-flex'>
                                    <div className='is-size-3 has-text-primary  has-background-light p-3'>
                                        <FontAwesomeIcon  icon={faFileInvoice}  />
                                    </div>
                                    <div className='mx-3'>
                                        <span className='is-size-6'>Total Revenue</span><br />
                                        <span className='has-text-weight-bold is-size-3'>{sales_data[0].total_revenue}</span>
                                    </div>
                                </div>
                                <div className='column is-half is-flex'>
                                    <div className='is-size-3 has-text-primary  has-background-light p-3'>
                                        <FontAwesomeIcon  icon={faDollarSign}  />
                                    </div>
                                    <div className='mx-3'>
                                        <span className='is-size-6'>Total Cost</span><br />
                                        <span className='has-text-weight-bold is-size-3'>{sales_data[0].cost}</span>
                                    </div>
                                </div>
                                <div className='column is-half is-flex'>
                                    <div className='is-size-3 has-text-primary  has-background-light p-3'>
                                        <FontAwesomeIcon  icon={faChartLine}  />
                                    </div>
                                    <div className='mx-3'>
                                        <span className='is-size-6'>Profit</span><br />
                                        <span className='has-text-weight-bold is-size-3'>{sales_data[0].total_revenue - sales_data[0].cost}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='column box my-3 mx-4 p-5'>
                            <h1 className='is-size-5 has-text-weight-semibold'>Purchase Overview</h1>
                            <div className='columns is-multiline p-3'>
                                <div className='column is-half is-flex'>
                                    <div className='is-size-3 has-text-danger  has-background-light p-3'>
                                        <FontAwesomeIcon  icon={faShoppingBag}  />
                                    </div>
                                    <div className='mx-3'>
                                        <span className='is-size-6'>Total Purchase</span><br />
                                        <span className='has-text-weight-bold is-size-3'>{purchase_data[0].number_of_purchase}</span>
                                    </div>
                                </div>
                                <div className='column is-half is-flex'>
                                    <div className='is-size-3 has-text-danger  has-background-light p-3'>
                                        <FontAwesomeIcon  icon={faFileInvoice}  />
                                    </div>
                                    <div className='mx-3'>
                                        <span className='is-size-6'>Cancelled Orders</span><br />
                                        <span className='has-text-weight-bold is-size-3'>{purchase_data[0].cancelled_orders}</span>
                                    </div>
                                </div>
                                <div className='column is-half is-flex'>
                                    <div className='is-size-3 has-text-danger  has-background-light p-3'>
                                        <FontAwesomeIcon  icon={faDollarSign}  />
                                    </div>
                                    <div className='mx-3'>
                                        <span className='is-size-6'>Returned Orders</span><br />
                                        <span className='has-text-weight-bold is-size-3'>{purchase_data[0].returned_orders}</span>
                                    </div>
                                </div>
                                <div className='column is-half is-flex'>
                                    <div className='is-size-3 has-text-danger  has-background-light p-3'>
                                        <FontAwesomeIcon  icon={faChartLine}  />
                                    </div>
                                    <div className='mx-3'>
                                        <span className='is-size-6'>Rate</span><br />
                                        <span className='has-text-weight-bold is-size-3'>{purchase_data[0].average_rate_of_purchase}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='column is-one-third box my-3 mx-4 p-5'>
                            <h1 className='is-size-5 has-text-weight-semibold mb-3'>Inventory Summary</h1>
                            <div className='columns is-multiline py-4'>
                                <div className='column is-one-quarter has-background-light mx-3'>
                                    <span className='is-size-6'>Rings</span><br />
                                    <span className='has-text-weight-bold is-size-3'>{inventory_data[0].rings}</span>
                                </div>
                                <div className='column is-one-quarter has-background-light mx-3'>
                                    <span className='is-size-6'>Anklets</span><br />
                                    <span className='has-text-weight-bold is-size-3'>{inventory_data[0].anklets}</span>
                                </div>
                                <div className='column has-background-light mx-3'>
                                    <span className='is-size-6'>Necklace</span><br />
                                    <span className='has-text-weight-bold is-size-3'>{inventory_data[0].necklace}</span>
                                </div>
                                <div className='column is-one-quarter has-background-light mx-3 mt-3'>
                                    <span className='is-size-6'>Pendants</span><br />
                                    <span className='has-text-weight-bold is-size-3'>{inventory_data[0].pendant}</span>
                                </div>
                                <div className='column is-one-quarter has-background-light mx-3 mt-3'>
                                    <span className='is-size-6'>Sets</span><br />
                                    <span className='has-text-weight-bold is-size-3'>{inventory_data[0].sets}</span>
                                </div>
                                <div className='column has-background-light mx-3 mt-3'>
                                    <span className='is-size-6'>Rings</span><br />
                                    <span className='has-text-weight-bold is-size-3'>{inventory_data[0].rings}</span>
                                </div>
                            </div>
                        </div>
                        <div className='column is-one-third box my-3 mx-4 p-5'>
                            <h1 className='is-size-5 has-text-weight-semibold'>Exchange Rates</h1>
                            
                        </div>
                        <div className='column  box my-3 mx-4 p-5'>
                            <h1 className='is-size-5 has-text-weight-semibold mb-2'>Number of Users</h1>
                            <div className='columns is-multiline py-4'>
                                <div className='column mx-3 mb-3 has-background-light p-3'>
                                    <span className='is-size-6'>Customers</span><br />
                                    <span className='has-text-weight-bold is-size-3'>{number_of_users[0].customers}</span>
                                </div>
                                <div className='column mx-3 mb-3 has-background-light p-3'>
                                    <span className='is-size-6'>Suppliers</span><br />
                                    <span className='has-text-weight-bold is-size-3'>{number_of_users[0].suppliers}</span>
                                </div>
                                <div className='column mx-3 has-background-light p-3'>
                                    <span className='is-size-6'>Workers</span><br />
                                    <span className='has-text-weight-bold is-size-3'>{number_of_users[0].workers}</span>
                                </div>
                                <div className='column mx-3 has-background-light p-3'>
                                    <span className='is-size-6'>Craftsmen</span><br />
                                    <span className='has-text-weight-bold is-size-3'>{number_of_users[0].craftsmen}</span>
                                </div>
                            </div>
                        </div>
                        <div className='column box my-3 is-half p-5'>
                            <h1 className='is-size-5 is-half has-text-weight-semibold'>Purchase Statistics</h1>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
}

export default Dashboard;