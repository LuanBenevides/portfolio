function alternateDescription() {
    let desc = document.getElementById('calc-description');
    let backState = `Faça contas na web, teste!`;
    let card = document.getElementById('calc-card');

    desc.innerText = `
        Esta é uma calculadora básica capaz de realizar as operações matemáticas básicas com precisão. Esta calculadora trabalha os conceitos básicos do React e imita o design da calculadora do Mac.
        Este projeto foi feito como exercício prático do módulo de React.Js do curso de desenvolvimento Web da Cod3r - realizado na Udemy.
    `;

    card.classList.add('ocult');

    setInterval(() => {
        desc.innerText = backState;
        card.classList.remove('ocult');

    }, 15000);

    clearInterval();
}

export default function Calculadora() {
    return(
        <a href="https://luanbenevides.github.io/react-calculator/" target='blank' onMouseOver={alternateDescription}>
            <section className='pattern-card-tec'>
                <h3>CALCULADORA</h3>
                <p id="calc-description">Faça contas na web, teste!</p>
                <div id="calc-card" className='image-block-pattern calc'></div>
            </section>
        </a>
    );
}