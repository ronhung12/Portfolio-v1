import React from 'react';
import '../css/Biography.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function Biography(){
    return(
        <div style={{display: 'flex'}}>
            <article style={{flexGrow: '1'}}>
                <h1>Ronald Hung</h1>
                <h2>Software Engineer</h2>
                <section>
                    <p style={{minWidth: '300px', marginRight: '10px', wordSpacing: 'normal', textAlign: 'left'}}>{biography}</p>
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
                </section>
            </article>
            <article>
                <img style={{float: 'right'}} src={require('../images/graduation1.jpg')} height="200" id="biography_picture" alt='Ronald Hung'/>
                {/*<img style={{float: 'center'}} src='https://via.placeholder.com/400' id="biography_picture" alt='Ronald Hung'/>*/}
            </article>
        </div>
    )
}

export default Biography;

const biography = "I'm a full-stack software engineer specializing in front-end development for complex scalable web applications." +
    " I graduated from Fordham University with a B.S. in Computer Science/Bioinformatics and currently work as a software development consultant. I enjoy tackling complex problems with innovative solutions and creating the best user experience in terms of visual design and performance."
+ " I always strive to learn new technologies and add them to my skill set and repertoire. Check out my project portfolio and online resume. Feel free to contact me if you have any questions.";
