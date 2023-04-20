import './footer.css';

export default function Footer() {
    return(
            <div className="footer-space">
                <h3>MINHAS TECNOLOGIAS</h3>
                <div className="hardSkills-cards">
                    <div className="board-card">
                        <div className="pattern-card html-card"></div>
                        <div className="pattern-card css-card"></div>
                        <div className="pattern-card js-card"></div>
                        <div className="pattern-card react-card"></div>
                        <div className="pattern-card spring-card"></div> 
                        <div className="pattern-card java-card"></div>
                        <div className="pattern-card postgre-card"></div>
                        <div className="pattern-card mysql-card"></div>
                        <div className="pattern-card git-card"></div>                    
                    </div>
                </div>
            </div>   
    );
}