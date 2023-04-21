function alternateDescription() {

    let desc = document.getElementById('sup-description');
    let backState = `Gerencie as suas atividades aqui`;
    let card = document.getElementById('sup-card');

    desc.innerText = `
        Esta aplicação em feita em React se integra a um banco de dados em nuvem e permite a criação e autenticação de usuários, bem como a criação, alteração e finalização de tarefas personalizadas. 
        Neste projeto, conceitos avançados como rotas, renderização condicional e context api foram implementados. Teste a aplicação com seu e-mail!
    `;

    card.classList.add('ocult');

    setInterval(() => {
        desc.innerText = backState;
        card.classList.remove('ocult');

    }, 15000);

    clearInterval();
}

export default function Tarefas() {
    return (
        <a href="https://lb-app-tarefas.netlify.app/" target='blank' onMouseOver={alternateDescription}>
            <section className='pattern-card-tec'>
                <h3>LISTA DE TAREFAS</h3>
                <p id="sup-description">Gerencie as suas atividades aqui</p>
                <div id="sup-card" className='image-block-pattern task'></div>
            </section>
        </a>
    );
}