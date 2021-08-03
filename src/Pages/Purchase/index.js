import React, {useState} from 'react'

//Components
import Navbar from '../../Components/Navbar'
import Header from '../../Components/Header'
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons'
import { faGem } from '@fortawesome/free-solid-svg-icons'
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons'
import { faLandmark } from '@fortawesome/free-solid-svg-icons'
import { faPercentage } from '@fortawesome/free-solid-svg-icons'
import { faReceipt } from '@fortawesome/free-solid-svg-icons'
import { faPortrait } from '@fortawesome/free-solid-svg-icons'
import { faCertificate } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Purchase = () => {

    const [purchase_type, setPurchaseType] = useState('');
    const [weight, setWeight] = useState('');
    const [refinery, setRefinery] = useState('');
    const [tolerance_level, setToleranceLevel] = useState('');
    const [fineness, setFineness] = useState('');
    const [certification, setCertification] = useState('');
    const [tax, setTax] = useState('');
    const [Purity, setPurity] = useState('');
    const [stone_weight, setStoneWeight] = useState('');
    const [Color, setColor] = useState('');
    const [clarity, setClarity] = useState('');
    const [cut, setCut] = useState('');
    const [hallmark_id, setHallmarkId] = useState('');
    const [quantity, setQuantity] = useState('');
    
    const purchase = ['Choose Item', 'Gold', 'Silver', 'Diamond']
    const purity = ['Choose Item','14.00 Carat','18.00 Carat','22.00 Carat','24.00 Carat']

    const stone_color = ['Choose Item','D','E','F','G','H','I','J','K','L','M'];
    const stone_cut = ['Choose Item','Round', 'Heart', 'Oval', 'Marquise', 'Pear', 'Emerald', 'Radiant', 'Princess', 'Asscher', 'Cushion'];
    const stone_clarity = ['Choose Item','IF','VVS1','VVS2','VS1','VS2','SI1','SI2','SI3','I1','I2','I3'];

    const handleSubmit = () => {

    }
    const handleReset = () => {

    }
    const handleSubmitDiamond = () => {
        
    }

    function Gold() {
        return(
            <div className=''>
                <h1 className='is-size-5 has-text-weight-bold'>Gold Purchase</h1>
                <div className='columns py-4'>
                    <div className='field column '>
                        <div className="is-normal ">
                            <label className="label">Gold Weight :</label>
                        </div>
                        <div className='field-body columns'>
                            <div className="field column">
                              <p className="control is-expanded has-icons-left">
                                <input className="input" required type="text" placeholder="Gold Weight" value={weight} onChange={e => setWeight(e.target.value)} />
                                <span className="icon is-small is-left">
                                    <FontAwesomeIcon icon={faBalanceScale} />
                                </span>
                              </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='field column'>
                        <div className="is-normal ">
                            <label className="label">Refinery :</label>
                        </div>
                        <div className='field-body columns'>
                            <div className="field column">
                              <p className="control is-expanded has-icons-left">
                                <input className="input" required type="text" placeholder="Refinery Name" value={refinery} onChange={e => setRefinery(e.target.value)} />
                                <span className="icon is-small is-left">
                                    <FontAwesomeIcon icon={faLandmark} />
                                </span>
                              </p>
                            </div>
                        </div>
                    </div>
                    <div className='field column'>
                        <div className="is-normal ">
                            <label className="label">Tolerance level :</label>
                        </div>
                        <div className='field-body columns'>
                            <div className="field column">
                              <p className="control is-expanded has-icons-left">
                                <input className="input" required type="text" placeholder="Tolerance level" value={tolerance_level} onChange={e => setToleranceLevel(e.target.value)} />
                                <span className="icon is-small is-left">
                                    <FontAwesomeIcon icon={faRupeeSign} />
                                </span>
                              </p>
                            </div>
                        </div>
                    </div>
                    <div className='field column'>
                        <div className="is-normal ">
                            <label className="label">Purity :</label>
                        </div>
                        <div className='field-body'>
                            <div className="field">
                                <div className='select'>
                                    <select onChange={e => setPurity(e.target.value)} value={Purity}>
                                        {purity.map((item, i) => {
                                            return(
                                                <option value={item} key={i}>{item}</option>
                                            )
                                        })} 
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='columns py-4'>
                    <div className='field column '>
                        <div className="is-normal ">
                            <label className="label">Fineness :</label>
                        </div>
                        <div className='field-body columns'>
                            <div className="field column">
                              <p className="control is-expanded has-icons-left">
                                <input className="input" required type="text" placeholder="Fineness" value={fineness} onChange={e => setFineness(e.target.value)} />
                                <span className="icon is-small is-left">
                                    <FontAwesomeIcon icon={faPercentage} />
                                </span>
                              </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='field column'>
                        <div className="is-normal ">
                            <label className="label">Certification :</label>
                        </div>
                        <div className='field-body columns'>
                            <div className="field column">
                              <p className="control is-expanded has-icons-left">
                                <input className="input" required type="text" placeholder="Certification (HUID)" value={certification} onChange={e => setCertification(e.target.value)} />
                                <span className="icon is-small is-left">
                                    <FontAwesomeIcon icon={faCertificate} />
                                </span>
                              </p>
                            </div>
                        </div>
                    </div>
                    <div className='field column'>
                        <div className="is-normal ">
                            <label className="label">Tax :</label>
                        </div>
                        <div className='field-body columns'>
                            <div className="field column">
                              <p className="control is-expanded has-icons-left">
                                <input className="input" required type="text" placeholder="Tax" value={tax} onChange={e => setTax(e.target.value)} />
                                <span className="icon is-small is-left">
                                    <FontAwesomeIcon icon={faReceipt} />
                                </span>
                              </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="buttons">
                    <button onClick={handleSubmit} className="button is-success">Save changes</button>
                    <button onClick={handleReset} className="button is-danger">Cancel</button>
                </div>

            </div>
        )
    }

    function Silver() {
        return(
            <div className=''>
                <h1 className='is-size-5 has-text-weight-bold'>Silver Purchase</h1>
                <div className='columns py-4'>
                    <div className='field column '>
                        <div className="is-normal ">
                            <label className="label">Silver Weight :</label>
                        </div>
                        <div className='field-body columns'>
                            <div className="field column">
                              <p className="control is-expanded has-icons-left">
                                <input className="input" required type="text" placeholder="Silver Weight" value={weight} onChange={e => setWeight(e.target.value)} />
                                <span className="icon is-small is-left">
                                    <FontAwesomeIcon icon={faBalanceScale} />
                                </span>
                              </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='field column'>
                        <div className="is-normal ">
                            <label className="label">Refinery :</label>
                        </div>
                        <div className='field-body columns'>
                            <div className="field column">
                              <p className="control is-expanded has-icons-left">
                                <input className="input" required type="text" placeholder="Refinery Name" value={refinery} onChange={e => setRefinery(e.target.value)} />
                                <span className="icon is-small is-left">
                                    <FontAwesomeIcon icon={faLandmark} />
                                </span>
                              </p>
                            </div>
                        </div>
                    </div>
                    <div className='field column'>
                        <div className="is-normal ">
                            <label className="label">Tolerance level :</label>
                        </div>
                        <div className='field-body columns'>
                            <div className="field column">
                              <p className="control is-expanded has-icons-left">
                                <input className="input" required type="text" placeholder="Tolerance level" value={tolerance_level} onChange={e => setToleranceLevel(e.target.value)} />
                                <span className="icon is-small is-left">
                                    <FontAwesomeIcon icon={faRupeeSign} />
                                </span>
                              </p>
                            </div>
                        </div>
                    </div>
                    <div className='field column'>
                        <div className="is-normal ">
                            <label className="label">Purity :</label>
                        </div>
                        <div className='field-body'>
                            <div className="field">
                                <div className='select'>
                                    <select onChange={e => setPurity(e.target.value)} value={Purity}>
                                        {purity.map((item, i) => {
                                            return(
                                                <option value={item} key={i}>{item}</option>
                                            )
                                        })} 
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='columns py-4'>
                    <div className='field column '>
                        <div className="is-normal ">
                            <label className="label">Fineness :</label>
                        </div>
                        <div className='field-body columns'>
                            <div className="field column">
                              <p className="control is-expanded has-icons-left">
                                <input className="input" required type="text" placeholder="Fineness" value={fineness} onChange={e => setFineness(e.target.value)} />
                                <span className="icon is-small is-left">
                                    <FontAwesomeIcon icon={faPercentage} />
                                </span>
                              </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='field column'>
                        <div className="is-normal ">
                            <label className="label">Certification :</label>
                        </div>
                        <div className='field-body columns'>
                            <div className="field column">
                              <p className="control is-expanded has-icons-left">
                                <input className="input" required type="text" placeholder="Certification (HUID)" value={certification} onChange={e => setCertification(e.target.value)} />
                                <span className="icon is-small is-left">
                                    <FontAwesomeIcon icon={faCertificate} />
                                </span>
                              </p>
                            </div>
                        </div>
                    </div>
                    <div className='field column'>
                        <div className="is-normal ">
                            <label className="label">Tax :</label>
                        </div>
                        <div className='field-body columns'>
                            <div className="field column">
                              <p className="control is-expanded has-icons-left">
                                <input className="input" required type="text" placeholder="Tax" value={tax} onChange={e => setTax(e.target.value)} />
                                <span className="icon is-small is-left">
                                    <FontAwesomeIcon icon={faReceipt} />
                                </span>
                              </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="buttons">
                    <button onClick={handleSubmit} className="button is-success">Save changes</button>
                    <button onClick={handleReset} className="button is-danger">Cancel</button>
                </div>
            </div>
        )
    }

    function Diamond() {
        return(
            <div className=''>
                <h1 className='is-size-5 has-text-weight-bold'>Diamond Purchase</h1>
                <div className='columns p-3'>
                <div className='field column'>
                        <div className="is-normal ">
                            <label className="label">Hallmark ID :</label>
                        </div>
                        <div className='field-body columns'>
                            <div className="field column">
                              <p className="control is-expanded has-icons-left">
                                <input className="input" required type="text" placeholder="Hallmark ID" value={hallmark_id} onChange={e => setHallmarkId(e.target.value)} />
                                <span className="icon is-small is-left">
                                    <FontAwesomeIcon icon={faPortrait} />
                                </span>
                              </p>
                            </div>
                        </div>
                    </div>
                <div className='field column '>
                        <div className="is-normal ">
                            <label className="label">Stone Weight :</label>
                        </div>
                        <div className='field-body columns'>
                            <div className="field column">
                              <p className="control is-expanded has-icons-left">
                                <input className="input" required type="text" placeholder="Stone Weight" value={stone_weight} onChange={e => setStoneWeight(e.target.value)} />
                                <span className="icon is-small is-left">
                                    <FontAwesomeIcon icon={faBalanceScale} />
                                </span>
                              </p>
                            </div>
                        </div>
                    </div>
                    <div className='field column'>
                        <div className="is-normal ">
                            <label className="label">Color :</label>
                        </div>
                        <div className='field-body'>
                            <div className="field">
                                <div className='select'>
                                    <select onChange={e => setColor(e.target.value)} value={Color}>
                                        {stone_color.map((item, i) => {
                                            return(
                                                <option value={item} key={i}>{item}</option>
                                            )
                                        })} 
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='field column'>
                        <div className="is-normal ">
                            <label className="label">Cut :</label>
                        </div>
                        <div className='field-body'>
                            <div className="field">
                                <div className='select'>
                                    <select onChange={e => setCut(e.target.value)} value={cut}>
                                        {stone_cut.map((item, i) => {
                                            return(
                                                <option value={item} key={i}>{item}</option>
                                            )
                                        })} 
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='field column'>
                        <div className="is-normal ">
                            <label className="label">Clarity :</label>
                        </div>
                        <div className='field-body'>
                            <div className="field">
                                <div className='select'>
                                    <select onChange={e => setClarity(e.target.value)} value={clarity}>
                                        {stone_clarity.map((item, i) => {
                                            return(
                                                <option value={item} key={i}>{item}</option>
                                            )
                                        })} 
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='field column '>
                        <div className="is-normal ">
                            <label className="label">Quantity :</label>
                        </div>
                        <div className='field-body columns'>
                            <div className="field column">
                              <p className="control is-expanded has-icons-left">
                                <input className="input" required type="text" placeholder="Quantity" value={quantity} onChange={e => setQuantity(e.target.value)} />
                                <span className="icon is-small is-left">
                                    <FontAwesomeIcon icon={faGem} />
                                </span>
                              </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <button onClick={handleSubmitDiamond} className="button is-success">Save changes</button>
                    <button onClick={handleReset} className="button is-danger">Cancel</button>
                </div>
            </div>
        )
    }

    return(
        <div>
            <Header />
            <div className='is-flex'>
                <Navbar />
                <div className="column has-background-light">
                    <div className='box'>
                        <h1 className='is-size-5 has-text-weight-bold'>Add a Purchase</h1>
                        <div className='py-3'>
                            <div className='field column is-one-third'>
                                <div className="is-normal">
                                    <label className="label mb-2">Purchase Type :</label>
                                </div>
                                <div className='field-body'>
                                    <div className="field">
                                        <div className='select'>
                                            <select onChange={e => setPurchaseType(e.target.value)} value={purchase_type}>
                                                {purchase.map((item, i) => {
                                                    return(
                                                        <option value={item} key={i}>{item}</option>
                                                    )
                                                })} 
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {purchase_type === 'Gold' ? <Gold /> : <div></div>}
                            {purchase_type === 'Silver' ? <Silver /> : <div></div>}
                            {purchase_type === 'Diamond' ? <Diamond /> : <div></div>}
                        </div>
                        
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Purchase;