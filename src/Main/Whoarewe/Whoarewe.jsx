import './Whoarewe.css'
import img from './Whoarewe-assets/Rectangle.png'

export default function Whoarewe() {
    return(
        <>
            <section className='background8'>
                <div>
                    <div>
                        <h3>Who are we?</h3>
                        <p>Apologies if you were looking for an ordinary optical store. We've hand-picked the unique brands from all over the world to give you the special look for your everyday life.</p>
                        <p>Our glasses will have you looking great and feeling better. We work with independent brands who use the highest-grade of materials, demonstrating detail and craftsmanship in every single pair. A wide range of styles reflect the diversity of our clients and are made to suit different face shapes.</p>
                    </div>
                    <img src={img} alt="" />
                </div>
            </section>
        </>
    )
}