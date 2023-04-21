import { useState } from 'react';
import './projetos.css';
import JvProjeto from '../JvProjeto/JvProjeto';
import Bds from '../Bds/Bds';
import Cronometro from '../Cronometro/Cronometro';
import Calculadora from '../Calculadora/Calculadora';

function Simple() {
    return(
        <div className='pattern-projects'>
            <h3>PROJETOS SIMPLES COM CONCEITOS BÁSICOS DE REACT.JS</h3>
            <article className='projects-board'>
                <JvProjeto />
                <Bds />
                <Cronometro />
                <Calculadora />
            </article>
        </div>
    );
}

function Advanced() {
    return(
        <div className='pattern-projects'>
            <h3>PROJETOS COMPLETOS, UTILIZANDO CONCEITOS AVANÇADOS DE REACT.JS</h3>
            <article className='projects-board'>
                <a href="https://lb-app-tarefas.netlify.app/" target='blank'>
                    <section className='pattern-card-tec' onClick={() => {}}>
                        <h3>LISTA DE TAREFAS</h3>
                        <p>Gerencie as suas atividades aqui</p>
                        <div className='image-block-pattern task'></div>
                    </section>
                </a>
                <a href="https://lb-devflix.netlify.app/" target='blank'>
                    <section className='pattern-card-tec'>
                        <h3>DEVFLIX</h3>
                        <p>Filmes em cartaz em tempo real</p>
                        <div className='image-block-pattern df'></div>
                    </section>
                </a>
                <a href='https://luanbenevides.github.io/pokedex/' target='blank'>
                    <section className='pattern-card-tec'>
                        <h3>POKEDEX</h3>
                        <p>Divirta-se com seu pokemon favorito</p>
                        <div className='image-block-pattern pkdex'></div>
                    </section>
                </a>
            </article>
        </div>
    );
}

function Paginator ({currentPage, handleNext, handleBack}) {
    return(
        <div className='arrows-board'>
            <div className='back' currentPage={currentPage} onClick={handleBack}></div>
            <div className='next' currentPage={currentPage} onClick={handleNext}></div>
        </div>
    );
}
export default function Projetos() {
    const [currentPage, setCurrentPage] = useState(0);

    function handleNext () {
        let newCurrentPage = currentPage;

        if(currentPage >= 1) {
            return;
        }

        newCurrentPage += 1;
        setCurrentPage(newCurrentPage);
    }

    function handleBack() {
        let newCurrentPage = currentPage;
        if(currentPage === 0){
            return;
        }
        newCurrentPage -= 1;
        setCurrentPage(newCurrentPage);
    }

    if(currentPage === 0) {
        return(
            <>
                <Simple />
                <Paginator currentPage={currentPage} handleNext={handleNext} handleBack={handleBack}/>
            </>
        );
    }else if(currentPage === 1){
        return(
            <>
                <Advanced />
                <Paginator currentPage={currentPage} handleNext={handleNext} handleBack={handleBack}/>
            </>
        );
    }
}