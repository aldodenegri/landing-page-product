import style from './Main.module.css'
import rbd from '../assets/imgs/banner-image.png'
import bannerBG from'../assets/imgs/banner-bg.png'
function Main() {
    return(
        <>
            <main>
                <div className={style.banner}>
                    <img src={rbd} alt="banner-image"></img>
                    <div className={style.bannerTxt}>
                        <h1>Rubber Duck Debuggings</h1>
                        <p>Spiegare il codice a una paperella di gomma aiuta i programmatori a chiarire il pensiero e individuare errori nascosti</p>
                        <button> Acquistala subito!</button>
                    </div>
                </div>
            </main>
        </>
    );
}
export default Main;