function alternateDescription() {
    let desc = document.getElementById('bds-description');
    let backState = `Veja o que a sua sorte diz hoje`;
    let card = document.getElementById('bds-card');

    desc.innerText = `
        O projeto Biscoito da Sorte é uma aplicação em React, que foi criada com o intuito de trabalhar os estados dos componentes e eventos a partir de listas.
        Ao clicar no botão, uma mensagem é gerada e renderizada para o usuário. Este foi um projeto feito como exercício prático do curso de React.js que realizei na Udemy.
    `;

    card.classList.add('ocult');

    setInterval(() => {
        desc.innerText = backState;
        card.classList.remove('ocult');

    }, 15000);

    clearInterval();
}

export default function Bds() {
    return(
        <a href='https://luanbenevides.github.io/biscoito-da-sorte/' target='blank' onMouseOver={alternateDescription}>
            <section className='pattern-card-tec'>
                <h3>BISCOITO DA SORTE</h3>
                <p id="bds-description">Veja o que a sua sorte diz hoje</p>
                <div id="bds-card" className='image-block-pattern bds'></div>
            </section>
        </a>
    );
}