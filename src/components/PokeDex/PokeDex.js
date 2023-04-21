function alternateDescription() {

    let desc = document.getElementById('pkd-description');
    let backState = `Divirta-se com seu pokemon favorito`;
    let card = document.getElementById('pkd-card');

    desc.innerText = `
        Esta aplicação implementa vários conceitos avançados do React.js e tem o intuito de montar uma pokedex, na qual você poderá pesquisar seu pokemon favorito e se divertir com os atributos e informações sobre eles. Dê uma olhada, você vai gostar!
    `;

    card.classList.add('ocult');

    setInterval(() => {
        desc.innerText = backState;
        card.classList.remove('ocult');

    }, 15000);

    clearInterval();
}
export default function PokeDex() {
    return(
        <a href='https://luanbenevides.github.io/pokedex/' target='blank' onMouseOver={alternateDescription}>
            <section className='pattern-card-tec'>
                <h3>POKEDEX</h3>
                <p id="pkd-description">Divirta-se com seu pokemon favorito</p>
                <div id="pkd-card" className='image-block-pattern pkdex'></div>
            </section>
        </a>
    );
}