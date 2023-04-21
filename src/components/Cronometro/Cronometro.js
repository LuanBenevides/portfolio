function alternateDescription() {
    let desc = document.getElementById('cron-description');
    let backState = `Marque o tempo das suas atividades!`;
    let card = document.getElementById('cron-card');

    desc.innerText = `
        Este é um projeto de cronômetro simples e funcional, que foi feito para praticar conceitos de estados, props, hooks e renderização condicional. Você pode iniciar a marcação de tempo, pausar, retomar ou zerar a qualquer momento. 
        Esta aplicação foi construída durante a execussão de um curso de React - do zero ao profissional, ministrado pelo Matheus Fraga, so Sujeito Programador.
    `;

    card.classList.add('ocult');

    setInterval(() => {
        desc.innerText = backState;
        card.classList.remove('ocult');

    }, 15000);

    clearInterval();
}
export default function Cronometro () {
    return (
        <a href='https://luanbenevides.github.io/cronometro/' target='blank' onMouseOver={alternateDescription}>
            <section className='pattern-card-tec'>
                <h3>CRONÔMETRO</h3>
                <p id="cron-description">Marque o tempo das suas atividades!</p>
                <div id="cron-card" className='image-block-pattern cron'></div>
            </section>
        </a>
    );
}