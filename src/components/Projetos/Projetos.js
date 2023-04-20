import { useState } from 'react';
import './projetos.css';


function Simple() {
    return(
        <div className='pattern-projects'>
            <h3>PROJETOS SIMPLES COM CONCEITOS BÁSICOS DE REACT.JS</h3>
            <article className='projects-board'>
                <section className='pattern-card-tec'>
                    <h3>JOGO DA VELHA</h3>
                    <p>Jogue e se divirta, clicando <a href="#">aqui</a></p>
                    <div className='image-block-pattern jv'></div>
                </section>
                <section className='pattern-card-tec'>
                    <h3>BISCOITO DA SORTE</h3>
                    <p>Veja o que a sua sorte diz <a href="#">hoje</a></p>
                    <div className='image-block-pattern bds'></div>
                </section>
                <section className='pattern-card-tec'>
                    <h3>CRONÔMETRO</h3>
                    <p>Marque o tempo das suas <a href="#">atividades!</a></p>
                    <div className='image-block-pattern cron'></div>
                </section>
                <section className='pattern-card-tec'>
                    <h3>CALCULADORA</h3>
                    <p>Faça contas na web, <a href="https://luanbenevides.github.io/react-calculator/">teste!</a></p>
                    <div className='image-block-pattern calc'></div>
                </section>
            </article>
        </div>
    );
}

function Advanced() {
    return(
        <div className='pattern-projects'>
            <h3>PROJETOS COMPLETOS, UTILIZANDO CONCEITOS AVANÇADOS DE REACT.JS</h3>
            <article className='projects-board'>
                <section className='pattern-card-tec'>
                    <h3>LISTA DE TAREFAS</h3>
                    <p>Gerencie as suas atividades <a href="https://lb-app-tarefas.netlify.app/" target='blank'>aqui</a></p>
                    <div className='image-block-pattern task'></div>
                </section>
                <section className='pattern-card-tec'>
                    <h3>DEVFLIX</h3>
                    <p>Filmes em cartaz em <a href="https://lb-devflix.netlify.app/" target='blank'>tempo real</a></p>
                    <div className='image-block-pattern df'></div>
                </section>
                <section className='pattern-card-tec'>
                    <h3>POKEDEX</h3>
                    <p>Divirta-se com seu pokemon <a href="https://luanbenevides.github.io/pokedex/" target='blank'>favorito!</a></p>
                    <div className='image-block-pattern pkdex'></div>
                </section>
            </article>
        </div>
    );
}
export default function Projetos() {
    const [simpleIsNext, setSimpleIsNext] = useState(true);
   
    function alternate() {
        simpleIsNext ? setSimpleIsNext(false) : setSimpleIsNext(true);
    }
    
    setInterval(() => {
        alternate();
    }, 8000);

    if(simpleIsNext) {
        return <Simple />
    }else {
        return <Advanced />
    }
}