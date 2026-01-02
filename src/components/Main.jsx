import style from './Main.module.css'
import rbd from '../assets/imgs/banner-image.png'
import bannerBG from '../assets/imgs/banner-bg.png'
import invisible from '../assets/imgs/invisible.png'
import prod1 from '../assets/imgs/product-item1.png'
import prod2 from '../assets/imgs/product-item2.png'
import prod3 from '../assets/imgs/product-item3.png'
import singleImage from '../assets/imgs/single-image2.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useCollapse } from 'react-collapsed';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function FiveStars() {
    return (
        <>
            {Array(5).fill().map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFF55"> <path d="m233-120 93-304L80-600h304l96-320 96 320h304L634-424l93 304-247-188-247 188Z" /> </svg>
            ))}
        </>
    );
}
function FaqItem({ question, answer }) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    return (
        <div className={style.faqItem}>
            <div className={style.faqQuestion}>{question}
            <button
                className={style.faqButton}
                {...getToggleProps()}
            >
                
                {isExpanded ? '−' : '+'}
                
            </button>
            </div>
            <section {...getCollapseProps()}>
                <div className={style.faqAnswer}>
                    {answer}
                </div>
            </section>
        </div>
    );
}
function Main() {
    return (
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

                <div className={style.pros}>
                    <div>
                        <h2>Lunga Durata della Batteria</h2>
                        <p>Goditi ore di assistenza continua nella risoluzione dei bug grazie alla lunga durata della "batteria" {'(ovvero, la tua pazienza)'} della paperella di gomma</p>

                        <h2>Compatibilità Universale</h2>
                        <p>Funziona con tutti i linguaggi di programmazione e sistemi operativi, la paperella di gomma è l'unico strumento di debugging che non necessita di aggiornamenti</p>

                        <h2>Design Elegante</h2>
                        <p>Mostra con orgoglio il design elegante e raffinato della tua paperella di gomma, disponibile in vari colori per abbinarsi al tuo stile di programmatore</p>
                    </div>
                    <div><img src={invisible}></img></div>
                    <div>
                        <h2>Resistenza agli Spruzzi</h2>
                        <p>Perfetta per resistere ai piccoli incidenti con caffé e bevande, la tua paperella di gomma non teme schizzi, mantenendoti sempre pronto per il debugging.</p>

                        <h2>Portabilità</h2>
                        <p>Leggera e facile da trasportare, la paperella di gomma può essere il tuo compagno di lavoro ovunque tu vada. Portala con teper un supporto costante.</p>

                        <h2>Promemoria Anti-Stress</h2>
                        <p>Quando lo stress del codice diventa troppo, spremi la tua paperella di gomma per un rapido sollievo anti-stress, senza bisogno di software complicati.</p>
                    </div>
                </div>

                <div className={style.wrapper}>
                    <h2>Cosa ne pensano i nostri sviluppatori</h2>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        /*breakpoints={{
                            1024: {
                                slidesPerView: 1,  // o 2 se vuoi vedere entrambe le pagine affiancate su desktop grande
                            }
                        }}*/
                        pagination={{ clickable: true }}
                        loop={true}
                        modules={[Pagination]}
                        className={style.mySwiper}
                    >
                        <SwiperSlide>
                            <div className={style.slide1}>
                                <div className={style.reviewContainer}>
                                    <p>
                                        {"La paperella di gomma è diventata il mio srumento di debugging preferito. Spiegare i problemi al mio 'assistente' silenzioso mi ha aiutato a risolvere bug che altrimenti mi avrebbero fatto impazzire. È anche un ottimo antistress nelle giornate difficili"}
                                    </p>
                                    <div className={style.fiveStars}>
                                        <FiveStars />
                                    </div>
                                    <span>David William - Feb 22, 2023</span>
                                </div>

                                <div className={style.reviewContainer}>
                                    <p>
                                        {"Non mi sarei mai immaginato quanto una paperelladi gomma potesse fare la differenza. È incredibile come verbalizzare i problemi davanti alla paperella mi aiuti a vedere soluzioni che prima non avrei notato. Inoltre, è carinissima sulla mia scrivania!"}
                                    </p>
                                    <div className={style.fiveStars}>
                                        <FiveStars />
                                    </div>
                                    <span>Emma Turner - April 5, 2023</span>
                                </div>

                                <div className={style.reviewContainer}>
                                    <p>
                                        {"Da quando ho adottato lapaperella di gomma il mio processo di debugging è migliorato notevolmente. La trovo molto utile per schiarirmi le ideee trovare errori nascosti. La porto sempre con me, ovunque vada!"}
                                    </p>
                                    <div className={style.fiveStars}>
                                        <FiveStars />
                                    </div>
                                    <span> Rachel Bryan - April 18, 2023</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={style.slide2}>
                                <div className={style.reviewContainer}>
                                    <p>
                                        {"Ho regalato la paperella di gomma a un collega junior che stava impazzendo con un bug ostinato. Dopo mezz'ora di 'spiegazione alla paperella', ha risolto tutto da solo ridendo come un matto. Ora è diventata la mascotte del nostro team!"}
                                    </p>
                                    <div className={style.fiveStars}>
                                        <FiveStars />
                                    </div>
                                    <span>Marco Rossi - Giugno 14, 2023</span>
                                </div>

                                <div className={style.reviewContainer}>
                                    <p>
                                        {"All'inizio ero scettico, pensavo fosse solo una battuta da nerd. Poi ho provato davvero a spiegare il mio codice alla paperella... e in 10 minuti ho trovato un errore di logica che mi tormentava da giorni. Ora è sempre sulla mia scrivania. Consigliatissima!"}
                                    </p>
                                    <div className={style.fiveStars}>
                                        <FiveStars />
                                    </div>
                                    <span>Luca Martini - Agosto 3, 2023</span>
                                </div>

                                <div className={style.reviewContainer}>
                                    <p>
                                        {"Rubber duck debugging funziona davvero! La mia paperella mi ha salvato in diverse sessioni notturne di coding. Oltre ad essere un ottimo strumento tecnico, mi strappa sempre un sorriso quando la guardo. La consiglio a tutti i programmatori."}
                                    </p>
                                    <div className={style.fiveStars}>
                                        <FiveStars />
                                    </div>
                                    <span>Sofia Bianchi - Ottobre 27, 2023</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div>

                <div className={style.products}>
                    <h2>La collezione di paperelle</h2>
                    <p><span>Una paperella per ogni stile di programmazione</span></p>
                    <div>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            breakpoints={{
                                // Da 768px in su → 2 slide
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40
                                },
                                // Da 992px in su → 3 slide
                                992: {
                                    slidesPerView: 3,
                                    spaceBetween: 50
                                }
                            }}
                            pagination={{ clickable: true }}
                            /*loop={true}*/
                            modules={[Pagination]}
                            className={style.mySwiper}
                        >
                            <SwiperSlide>
                                <div className={style.duckCard}>
                                    <img src={prod1} alt="prod1" />
                                    <div className={style.fiveStars}>
                                        <FiveStars />
                                    </div>
                                    <span>Cool-duck</span>
                                    <span>$15</span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={style.duckCard}>
                                    <img src={prod2} alt="prod2" />
                                    <div className={style.fiveStars}>
                                        <FiveStars />
                                    </div>
                                    <span>Classic-duck</span>
                                    <span>$29</span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={style.duckCard}>
                                    <img src={prod3} alt="prod3" />
                                    <div className={style.fiveStars}>
                                        <FiveStars />
                                    </div>
                                    <span>Bat-duck</span>
                                    <span>$69</span>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </div>

                </div>
                <div className={style.faqs}>
                    <img src={singleImage} />
                    <div>
                        <FaqItem
                            question="Cos'è il rubber duck debugging?"
                            answer="Il rubber duck debugging è semplice: spiega il tuo codice alla paperella di gomma come se fosse un collega. Descrivendo ogni passo, potresti individuare errori o capire meglio il problema. La paperella non risponde, ma ti aiuta a chiarire i tuoi pensieri."
                        />

                        <FaqItem
                            question="Quali sono i vantaggi di usare una paperella di gomma per i programmatori?"
                            answer="La paperella di gomma aiuta i programmatori a pensare in modo critico e a verbalizzare i problemi. Questo processo può portare a nuove intuizioni e soluzioni. Inoltre, è un ottimo strumento antistress e aggiunge un tocco di personalità alla scrivania."
                        />

                        <FaqItem
                            question="Posso usare la paperella di gomma indipendentemente dal linguaggio di programmazione che utilizzo?"
                            answer="Assolutamente sì! La paperella di gomma è universale e funziona con qualsiasi linguaggio di programmazione. Non importa se stai scrivendo in Python, Java, C++ o qualsiasi altro linguaggio, la paperella sarà sempre pronta ad ascoltarti."
                        />

                        <FaqItem
                            question="Quanto dettagliatamente devo spiegare il mio codice alla paperella di gomma?"
                            answer="Dovresti spiegare ogni dettaglio del tuo codice. Più sei dettagliato, più è probabile che tu scopra errori o ottenga nuove prospettive. Questo processo ti costringe a rivedere attentamente ogni parte del tuo lavoro."
                        />

                    </div>
                </div>
            </main>
        </>
    );
}
export default Main;