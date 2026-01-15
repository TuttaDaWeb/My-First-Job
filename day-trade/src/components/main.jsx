import Image from '../assets/image-main.png'
import './main.css'

function Main(){

    const desc = "E-book sobre Day Trade, aqui você saberá de tudo sobre essa profissão que mudará a sua vida para sempre, sem enrolação."

    return(
        <>
        <main className="container">
            <div className="main_img">
                <img src={Image} alt="" />
            </div>
            <div className="main_description">
                <h1>E-Book sobre </h1>
                <div className="description">
                    <p>{desc}</p>
                </div>
            </div>
        </main>
        </>
    )
}

export default Main;