import Imagen from '../assets/coracaohome.png'
import '../style/styleAll.css'

function Home() {
    return (
        <div className='home-container'>
            <div className='text-content'>
            <h1> Bem-vinda, meu amor!💖</h1>
            <p>Meu amor, Cada linha desse código, cada detalhe deste site, foi feito com muito carinho e admiração que transbordam do meu coração por você. Este pequeno gesto, é o pequeno pedaço do meu amor por você.
                <br></br>
            Seja muito bem-vinda a esse site que eu fiz somente para você, que isso mostre mais uma vez o meu amor por você e que eu te amo muito. Enquanto seus olhos estiverem passando por aqui, saiba que cada cantinho, cada linha de codigo deste site celebra você: A Mulher incrível, Companheira leal, Amor da minha vida, meu Sorriso diário, meu Anjinho.
            <br></br>
            Que cada clique te traga um sorriso e uma linda lembraça, e que esta pequena homenagem te lembre, a cada momento, o quanto você é especial e amada por mim.<br></br>
            ASS: Seu eterno admirador</p>
            </div>
            <img src={Imagen} alt="TesteImg" className='casal-img'/>
        </div>
    )
}
export default Home;