import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faJs, faHtml5, faAngular, faGit, faGithub, faCss3, faReact } from '@fortawesome/free-brands-svg-icons'

const skillsStyles = {
    display:'flex',
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
    margin: '4% auto',
    flexWrap: 'wrap'
}

const avatarStyles = {
    color:"#2B2B2B",
    padding: '2%'
}

const Skills = () => {
    return (
        <div className="row skill">
            <div className="three columns header-col">
                <h1><span>Skills</span></h1>
            </div>
            <div className="nine columns main-col">
                <div style={skillsStyles}>
                    <FontAwesomeIcon style={avatarStyles} icon={faJs} size="10x"/>
                    <FontAwesomeIcon style={avatarStyles} icon={faHtml5} size="10x"/>
                    <FontAwesomeIcon style={avatarStyles} icon={faCss3} size="10x"/>
                    <FontAwesomeIcon style={avatarStyles} icon={faReact} size="10x"/>
                    <FontAwesomeIcon style={avatarStyles} icon={faAngular} size="10x"/>
                    <FontAwesomeIcon style={avatarStyles} icon={faPython} size="10x"/>
                    <FontAwesomeIcon style={avatarStyles} icon={faGit} size="10x"/>
                    <FontAwesomeIcon style={avatarStyles} icon={faGithub} size="10x"/>
                </div>
            </div>
            </div>
    );
};

export default Skills;