import './buynow.css'

function BuyNow(){
const handlerPayment = ()=>{
    window.location.href = ''
}

    return(
        <>
        <main className='main_payment'>
            <section className='card'>
                <h2><span class="material-symbols-outlined">
                    check
                </span>Conhecimento em Day Trading</h2>
                <h2><span class="material-symbols-outlined">
                    check
                </span>Conhecimento sobre Velas tanta verdes quanto vermelhas</h2>
                <h2><span class="material-symbols-outlined">
                    check
                </span>Conhecimento em Como vender as Ações na hora exata</h2>
                <h2><span class="material-symbols-outlined">
                    check
                </span>Ficvar Bom nisso e viver disso</h2>
            </section>
            <section className='card_payment'>
                <button onClick={handlerPayment}>Pagar Agora</button>
            </section>
        </main>
        </>
    )
}

export default BuyNow;