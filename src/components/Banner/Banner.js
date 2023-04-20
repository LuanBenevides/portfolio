import './banner.css'

export default function Banner() {

    return(
        <>
            <div className="banner-main">
                <div className="banner-myName">
                    <span className="banner-line"></span>
                    <p>OLÁ, EU SOU O LUAN</p>
                </div>
                <div className="banner-main-tittle">
                    <h1>EU SOU <span>DESENVOLVEDOR</span> FULLSTACK JR</h1>
                    <p>Conheça os meus projetos a partir deste portifólio...</p>
                </div>
                <div className="social-media-links">
                    <a className='linkedin-image-icon' href='https://www.linkedin.com/in/luan-benevides-0961/' target='blank'></a>
                    <a className='github-image-icon' href='https://github.com/LuanBenevides' target='blank'></a>
                </div>
            </div>
        </>
    );
}