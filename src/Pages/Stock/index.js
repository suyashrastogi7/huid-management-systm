import React, {useState} from 'react'

//Components
import Navbar from '../../Components/Navbar'
import Header from '../../Components/Header'

import { faIdCard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Stock = () => {

    const jewellery_type = ['Choose Item','Plain Gold Jewellery', 'Plain Gold Jewellery with Stones']
    const product_type = ['Choose Item','Anklet','Bangle','Bracelet','Chain','Earrings','Finger Rings',
        'Gold Coin','Haram','Jewellery Set','Kada','Maang Teeka','Mangalsutra',
        'Mangalsutra Set','Neckwear','Nose Pin','Pendant','Pendant and Earrings Set',
        'Pendant with Chain','Pendant With chain and Earring Set','Silver Coin', 'Waist Belt']
    const Gender = ['Choose Item','Women','Men','Kids','Unisex']    
    const Metal_color = ['Choose Item','Rose','Rose and White','White','White and Rose','Yellow','Yellow and Rose','Yellow and White']
    const purity = ['Choose Item',0.00,14.00,18.00,22.0,24.00]
    const bangles_size = ['Choose Item','38 mm', '42 mm', '45 x 55 mm', '47 x 57 mm', '52.50 mm', '53 x 60 mm']
    const bracelet_size = ['Choose Item','12 cm','14 cm', '16 cm', '16.50 cm', '17.50 cm', '18 cm']
    const chain_size = ['Choose Item','33.02 cm', '35.56 cm', '38.1 cm', '40.64 cm', '43.18 cm', '45.72 cm']
    const ring_size = ['Choose Item','12 mm', '12.40 mm', '12.80 mm', '13.20 mm', '13.60 mm', '14.40 mm']
    const metal = ['Choose Item','Gold', 'Silver', 'Platinum', ]
    const community_type = ['Choose Item','Bengali', 'Bihari', 'Contemporary', 'Gujrati', 'Indian Bridal', 'Kannada']
    const coin_weight = ['Choose Item','1 gram', '10 grams', '100 grams', '1000 grams', '2 grams', '25 grams']
    const mangalsutra_size = ['Choose Item','30.48 cm','40.64 cm','45.72 cm','50.8 cm','53.34 cm','60.96 cm']
    const pendant_height = ['Choose Item','11 mm','18 mm','20 mm','22 mm','23 mm','25 mm']
    const pendant_width = ['Choose Item','10 mm','12 mm','13 mm','15 mm','16 mm','17 mm']
    const earring_height = ['Choose Item','10 mm','11 mm','12 mm','13 mm','14 mm']
    const earring_width = ['Choose Item','10 mm','11 mm','12 mm','13 mm','14 mm']
    const units = ['Gram', 'Ounce', 'Kilo', 'Tola', 'Masha', 'Ratti']

    const [jewelleryType, setJewelleryType] = useState('');
    const [productType, setproductType] = useState('');
    const [gender, setGender] = useState('');
    const [metalColor, setMetalColor] = useState('');
    const [Purity, setPurity] = useState('');
    const [BanglesSize, setBanglesSize] = useState('');
    const [BraceletSize, setBraceletSize] = useState('');
    const [chainSize, setchainSize] = useState('');
    const [RingSize, setRingSize] = useState('');
    const [Metal, setMetal] = useState('');
    const [CommunityType, setCommunityType] = useState('');
    const [coinWeight, setcoinWeight] = useState('');
    const [MangalsutraSize, setMangalsutraSize] = useState('');
    const [pendantHeight, setpendantHeight] = useState('');
    const [pendantWidth, setpendantWidth] = useState('');
    const [earringHeight, setearringHeight] = useState('');
    const [earringWidth, setearringWidth] = useState('');
    const [huid, setHuid] = useState('');
    const [goldWeight, setGoldWeight] = useState('');
    const [SilverWeight, setSilverWeight] = useState('');
    const [platinumWeight, setPlatinumWeight] = useState('');

    const data = {
        huid : huid,
        jewelleryType : jewelleryType,
        productType : productType,
        gender : gender,
        metalColor : metalColor,
        Purity : Purity,
        BanglesSize : BanglesSize,
        BraceletSize : BraceletSize,
        chainSize : chainSize,
        RingSize : RingSize,
        Metal : Metal,
        CommunityType : CommunityType,
        coinWeight : coinWeight,
        MangalsutraSize : MangalsutraSize,
        pendantHeight : pendantHeight,
        pendantWidth : pendantWidth,
        earringHeight : earringHeight,
        earringWidth : earringWidth,
        goldWeight : goldWeight, 
        silverWeight : SilverWeight,
        platinumWeight : platinumWeight
    }

    const handleSubmit = async (data) => {
        await fetch('localhost:5000/stock', { 
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        });
        
    }
    const handleReset = () => {
        
    }

    return(
        <div>
            <Header />
            <div className='is-flex'>
                <Navbar />
                <div className="column has-background-light" style={{height : '85vh',overflowY : 'scroll'}}>
                    <div className="hero p-5">
                        <div className='box p-3'>
                            <h1 className='is-size-5 has-text-weight-bold'>Add a stock</h1>
                            <form onSubmit={handleSubmit(data)}>
                            <div className='field column is-one-third'>
                                <div className="is-normal my-3 ">
                                    <label className="label">Hallmark UID :</label>
                                </div>
                                <div className='field-body '>
                                    <div className="field ">
                                      <p className="control is-expanded has-icons-left">
                                        <input className="input" required type="text" placeholder="Hallmark UID" value={huid} onChange={e => setHuid(e.target.value)} />
                                        <span className="icon is-small is-left">
                                            <FontAwesomeIcon icon={faIdCard} />
                                        </span>
                                      </p>

                                    </div>
                                </div>
                            </div>
                            <div className='columns is-multiline'>
                                <div className='column'>
                                    <div className="is-normal my-3">
                                        <label className="label">Jewellery Type :</label>
                                    </div>
                                    <div className='select'>
                                        <select onChange={e => setJewelleryType(e.target.value)} value={jewelleryType}>
                                            {jewellery_type.map((item, i) => {
                                                return(
                                                    <option value={item} key={i}>{item}</option>
                                                )
                                            })} 
                                        </select>
                                    </div>
                                </div>
                                <div className='column'>
                                    <div className="is-normal my-3">
                                        <label className="label">Product Type :</label>
                                    </div>
                                    <div className='select'>
                                        <select onChange={e => setproductType(e.target.value)} value={productType}>
                                            {product_type.map((item, i) => {
                                                return(
                                                    <option value={item} key={i}>{item}</option>
                                                )
                                            })} 
                                        </select>
                                    </div>
                                </div>
                                <div className='column'>
                                    <div className="is-normal my-3">
                                        <label className="label">Gender :</label>
                                    </div>
                                    <div className='select'>
                                        <select onChange={e => setGender(e.target.value)} value={gender}>
                                            {Gender.map((item, i) => {
                                                return(
                                                    <option value={item} key={i}>{item}</option>
                                                )
                                            })} 
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='is-flex is-flex-direction-row mb-4'>
                            <div className=''>
                                    <div className="is-normal my-3">
                                        <label className="label">Metal Color :</label>
                                    </div>
                                    <div className='select'>
                                        <select onChange={e => setMetalColor(e.target.value)} value={metalColor}>
                                            {Metal_color.map((item, i) => {
                                                return(
                                                    <option value={item} key={i}>{item}</option>
                                                )
                                            })} 
                                        </select>
                                    </div>
                                </div>
                                <div className='mx-4'>
                                    <div className="is-normal my-3">
                                        <label className="label">Purity :</label>
                                    </div>
                                    <div className='select'>
                                        <select className='' onChange={e => setPurity(e.target.value)} value={Purity}>
                                            {purity.map((item, i) => {
                                                return(
                                                    <option value={item} key={i}>{item} (carat)</option>
                                                )
                                            })} 
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='columns is-multiline'>
                            <div className='column'>
                                    <div className="is-normal my-3">
                                        <label className="label">Metal :</label>
                                    </div>
                                    <div className='select'>
                                        <select onChange={e => setMetal(e.target.value)} value={Metal}>
                                            {metal.map((item, i) => {
                                                return(
                                                    <option value={item} key={i}>{item}</option>
                                                )
                                            })} 
                                        </select>
                                    </div>
                                </div>
                                <div className='column'>
                                    <div className="is-normal my-3">
                                        <label className="label">Community Type :</label>
                                    </div>
                                    <div className='select'>
                                        <select onChange={e => setCommunityType(e.target.value)} value={CommunityType}>
                                            {community_type.map((item, i) => {
                                                return(
                                                    <option value={item} key={i}>{item}</option>
                                                )
                                            })} 
                                        </select>
                                    </div>
                                </div>
                                <div className='column'>
                                    <div className="is-normal my-3">
                                        <label className="label">Bangles Size :</label>
                                    </div>
                                    <div className='select'>
                                        <select disabled={productType !== 'Bangle'} onChange={e => setBanglesSize(e.target.value)} value={BanglesSize}>
                                            {bangles_size.map((item, i) => {
                                                return(
                                                    <option value={item} key={i}>{item}</option>
                                                )
                                            })} 
                                        </select>
                                    </div>
                                </div>
                                <div className='column'>
                                    <div className="is-normal my-3">
                                        <label className="label">Bracelet Size :</label>
                                    </div>
                                    <div className='select'>
                                        <select disabled={productType !== 'Bracelet'} onChange={e => setBraceletSize(e.target.value)} value={BraceletSize}>
                                            {bracelet_size.map((item, i) => {
                                                return(
                                                    <option value={item} key={i}>{item}</option>
                                                )
                                            })} 
                                        </select>
                                    </div>
                                </div>
                                <div className='column'>
                                    <div className="is-normal my-3">
                                        <label className="label">Chain Size :</label>
                                    </div>
                                    <div className='select'>
                                        <select disabled={productType !== 'Chain'} onChange={e => setchainSize(e.target.value)} value={chainSize}>
                                            {chain_size.map((item, i) => {
                                                return(
                                                    <option value={item} key={i}>{item}</option>
                                                )
                                            })} 
                                        </select>
                                    </div>
                                </div>
                                <div className='column'>
                                    <div className="is-normal my-3">
                                        <label className="label">Ring Size :</label>
                                    </div>
                                    <div className='select'>
                                        <select disabled={productType !== 'Finger Rings'} onChange={e => setRingSize(e.target.value)} value={RingSize}>
                                            {ring_size.map((item, i) => {
                                                return(
                                                    <option value={item} key={i}>{item}</option>
                                                )
                                            })} 
                                        </select>
                                    </div>
                                </div>
                                
                            </div>
                            <div className='columns'>
                                <div className='column'>
                                    <div className="is-normal my-3">
                                        <label className="label">Coin Weight :</label>
                                    </div>
                                    <div className='select'>
                                        <select disabled={productType !== 'Gold Coin'} onChange={e => setcoinWeight(e.target.value)} value={coinWeight}>
                                            {coin_weight.map((item, i) => {
                                                return(
                                                    <option value={item} key={i}>{item}</option>
                                                )
                                            })} 
                                        </select>
                                    </div>
                                </div>
                                <div className='column'>
                                    <div className="is-normal my-3">
                                        <label className="label">Mangalsutra Size :</label>
                                    </div>
                                    <div className='select'>
                                        <select disabled={productType !== 'Mangalsutra' && productType !== 'Mangalsutra Set'} onChange={e => setMangalsutraSize(e.target.value)} value={MangalsutraSize}>
                                            {mangalsutra_size.map((item, i) => {
                                                return(
                                                    <option value={item} key={i}>{item}</option>
                                                )
                                            })} 
                                        </select>
                                    </div>
                                </div>
                                <div className='column'>
                                    <div className="is-normal my-3">
                                        <label className="label">Pendant Height :</label>
                                    </div>
                                    <div className='select'>
                                        <select disabled={productType !== 'Pendant'} onChange={e => setpendantHeight(e.target.value)} value={pendantHeight}>
                                            {pendant_height.map((item, i) => {
                                                return(
                                                    <option value={item} key={i}>{item}</option>
                                                )
                                            })} 
                                        </select>
                                    </div>
                                </div>
                                <div className='column'>
                                    <div className="is-normal my-3">
                                        <label className="label">Pendant Width :</label>
                                    </div>
                                    <div className='select'>
                                        <select disabled={productType !== 'Pendant'} onChange={e => setpendantWidth(e.target.value)} value={pendantWidth}>
                                            {pendant_width.map((item, i) => {
                                                return(
                                                    <option value={item} key={i}>{item}</option>
                                                )
                                            })} 
                                        </select>
                                    </div>
                                </div>
                                <div className='column'>
                                    <div className="is-normal my-3">
                                        <label className="label">Earring Height :</label>
                                    </div>
                                    <div className='select'>
                                        <select disabled={productType !== 'Earrings'} onChange={e => setearringHeight(e.target.value)} value={earringHeight}>
                                            {earring_height.map((item, i) => {
                                                return(
                                                    <option key={i}>{item}</option>
                                                )
                                            })} 
                                        </select>
                                    </div>
                                </div>
                                <div className='column'>
                                    <div className="is-normal my-3">
                                        <label className="label">Earring Width :</label>
                                    </div>
                                    <div className='select'>
                                        <select disabled={productType !== 'Earrings'} onChange={e => setearringWidth(e.target.value)} value={earringWidth}>
                                            {earring_width.map((item, i) => {
                                                return(
                                                    <option key={i}>{item}</option>
                                                )
                                            })} 
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='column is-two-thirds'>
                                <h1 className='is-size-5 has-text-weight-bold my-4'>Add Details</h1>
                                <div className="field is-horizontal">
                                  <div className="field-label is-normal">
                                    <label className="label">Gold Weight : </label>
                                  </div>
                                  <div className="field-body">
                                    <div className="field">
                                      <p className="control">
                                        <input className="input" disabled={Metal !== 'Gold'} type="email" placeholder="Gold Weight" value={goldWeight} onChange={e => setGoldWeight(e.target.value)} />
                                      </p>
                                    </div>
                                    <div className='select'>
                                    <select>
                                            {units.map((item ,i) => {
                                                return(<option key={i} value={item}>{item}</option>)
                                            })}
                                        </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="field is-horizontal">
                                  <div className="field-label is-normal">
                                    <label className="label">Silver Weight : </label>
                                  </div>
                                  <div className="field-body">
                                    <div className="field">
                                      <p className="control">
                                        <input className="input" disabled={Metal !== 'Silver'} type="email" placeholder="Silver Weight" value={SilverWeight} onChange={e => setSilverWeight(e.target.value)} />
                                      </p>
                                    </div>
                                    <div className='select'>
                                    <select>
                                            {units.map((item ,i) => {
                                                return(<option key={i} value={item}>{item}</option>)
                                            })}
                                        </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="field is-horizontal">
                                  <div className="field-label is-normal">
                                    <label className="label">Platinum Wt : </label>
                                  </div>
                                  <div className="field-body">
                                    <div className="field">
                                      <p className="control">
                                        <input className="input" disabled={Metal !== 'Platinum'} type="email" placeholder="Platinum Weight" value={platinumWeight} onChange={e => setPlatinumWeight(e.target.value)} />
                                      </p>
                                    </div>
                                    <div className='select'>
                                        <select>
                                            {units.map((item ,i) => {
                                                return(<option key={i} value={item}>{item}</option>)
                                            })}
                                        </select>
                                    </div>
                                  </div>
                                </div>

                            </div>
                            <div className='is-flex is-align-items-center is-flex-direction-column'>
                                <div className="field is-grouped my-5 ">
                                    <p className="control">
                                      <button className="button is-success" type='submit'>
                                        Save changes
                                      </button>
                                    </p>
                                    <p className="control">
                                      <button className="button is-danger" type='submit' onClick={handleReset}>
                                        Cancel
                                      </button>
                                    </p>
                                </div>
                            </div>    
                            </form>  
                        </div> 
                    </div>  
                </div>
            </div>
        </div>
    );
}

export default Stock;