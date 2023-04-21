import './header.css';

export default function Header({setEmExibicao}) {
    return (
        <div className="space-top">
            <header className="header-block">
                <span emExibicao={'projetos'} onClick={() => setEmExibicao('banner')}>HOME</span>

                <nav>
                    <a emExibicao={'projetos'} onClick={() => setEmExibicao('projetos')}>PROJETOS</a>
                    <a emExibicao={'banner'} onClick={() => setEmExibicao('sobre')}>SOBRE MIM</a>
                    <a emExibicao={'contatos'} onClick={() => setEmExibicao('contatos')}>CONTATOS</a>
                </nav>
            </header>
        </div>
    );
}