import './NewInStock.css'
import { ochoglass } from'./data.js'
export function Okchi(Glass){
    return(
        <>
            <div className='glassik'>
                <img src={Glass.img} alt="" />
                <div>
                    <h3>{Glass.text}</h3>
                    <p>{Glass.text2}</p>
                    <h4>{Glass.text3}</h4>
                </div>
            </div>
        </>
    )
}

export default function NewInStock() {
    return(
        <>
            <section className='background3'>
                <div>
                    <div className='glassesss-div-top'>
                        <div>
                            <h2>New in stock</h2>
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