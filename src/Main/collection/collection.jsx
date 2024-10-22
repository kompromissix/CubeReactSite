import './collection.css'
import devkacveti from './collection-assets/Frame.png'

export default function Collection() {
    return(
        <>
            <section className='background1'>
                <div>
                    <div className='top-absolut'>
                        <h1>We treat your eyes with care</h1>
                        <div>
                            <p>SEE THE COLLECTION</p>
                            <img src={devkacveti} alt="" />
                        </div>
                    </div>
                    <div className='back'>
                        <div></div>
                    </div>
                </div>
            </section>
        </>
    )
}