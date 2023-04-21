function alternateDescription() {
    let desc = document.getElementById('jv-description');
    let backState = `Jogue e se divirta, clicando aqui`;
    let card = document.getElementById('jv-card');

    desc.innerText = `
        Jogo da velha construído em React, com o intuito de trabalhar conceitos básicos como componentes, estados, props, hooks e renderização condicional. O jogo indica quem realiza
        a jogada atual, assim como armazena cada jogada realizada, permitindo "voltar no tempo". Este projeto foi feito a partir de um estudo na nova documentação do React.
    `;

    card.classList.add('ocult');

    setInterval(() => {
        desc.innerText = backState;
        card.classList.remove('ocult');

    }, 15000);

    clearInterval();
}

export default function JvProjeto() {
    return(
        <a href='https://luanbenevides.github.io/jogo-da-velha/' target='blank' onMouseOver={alternateDescription}>
            <section className='pattern-card-tec'>
                <h3>JOGO DA VELHA</h3>
                <p id='jv-description'>Jogue e se divirta, clicando aqui</p>
                <div className='image-block-pattern jv' id='jv-card'></div>
            </section>
        </a>
    );
}