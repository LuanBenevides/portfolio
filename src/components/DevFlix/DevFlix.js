function alternateDescription() {
    let desc = document.getElementById('df-description');
    let backState = `Filmes em cartaz em tempo real`;
    let card = document.getElementById('df-card');

    desc.innerText = `
        Projeto completo de uma lista com os principais filmes em cartaz no cinema. Neste projeto, trabalhei requisições a API's, rotas, estados e armazenamento local. 
        Na aplicação, você poderá visualizar não só os filmes e as sinopses, mas tamém poderá acessar aos trailers e salvar seus desejos em uma lista personalizada, armazenada localmente.
    `;

    card.classList.add('ocult');

    setInterval(() => {
        desc.innerText = backState;
        card.classList.remove('ocult');

    }, 15000);

    clearInterval();
}

export default function DevFlix() {
    return(
        <a href="https://lb-devflix.netlify.app/" target='blank' onMouseOver={alternateDescription}>
            <section className='pattern-card-tec'>
                <h3>DEVFLIX</h3>
                <p id="df-description">Filmes em cartaz em tempo real</p>
                <div id="df-card" className='image-block-pattern df'></div>
            </section>
        </a>
    );
}