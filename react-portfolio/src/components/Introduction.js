import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/Introduction.css';

function Introduction(){
    return(
        <header>
             <h1 className='introName'>Ronald Hung</h1>
             <br/>
             <img src={require('../images/portfolio_headshot.jpg')} id="portfolio_picture" alt='Ronald Hung'/>
             {/*<img src='https://via.placeholder.com/200' id="portfolio_picture" alt='Ronald Hung'/>*/}
             <br/>
             <section>
                 Hi, my name is Ronald Hung and I am recent college graduate
                 and software engineer. Welcome to my personal website and feel
                 free to look around!
             </section>
            <br/>
            <section>
                <a href="https://www.instagram.com/ron.sauce/">
                    <FontAwesomeIcon icon={['fab', 'instagram']} size='3x' color="#6999B7"/>
                </a>
                <a href="https://www.github.com/ronhung12/">
                    <FontAwesomeIcon icon={['fab', 'github-square']} size='3x' color="#6999B7"/>
                </a>
                <a href="https://www.linkedin.com/in/%E5%AD%B8%E6%81%86-%E6%B4%AA-33934a92/">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} size='3x' color="#6999B7"/>
                </a>
                <a href = "mailto: ron.h.hung@gmail.com">
                    <FontAwesomeIcon icon={['fas', 'at']} size='3x' color="#6999B7"/>
                </a>
            </section>
            <br/>
        </header>

    )
}

export default Introduction;
