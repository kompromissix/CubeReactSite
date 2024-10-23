import './Bestsellers.css'
import { ochoglass } from'./data.js'
import { Okchi } from '../NewInStock/NewInStock.jsx'

export default function Bestsellers() {
    return(
        <>
            <section className='background3'>
                <div>
                    <div className='glassesss-div-top'>
                        <div>
                            <h2>Bestsellers</h2>
                            <p>SEE THE COLLECTION</p>
                        </div>
                        <hr />
                    </div>
                    <div className='glassesss'>
                        {ochoglass.map((way) =>(
                                <Okchi {...way}/>
                        ))} 
                    </div>
                </div>
            </section>
        </>
    )
}