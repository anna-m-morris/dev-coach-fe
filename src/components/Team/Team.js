import React from "react"
import Navigation from "../Landing/Navigation/Navigation"
import TeamContainer from './TeamStyles';

const Team = () => {
    return (
        <TeamContainer>
            <Navigation />
            <div className='title'>
                <h1>Meet The Team</h1>
            </div>
            <div className='team-cards-container'>
                <div className='team-card'>
                    <div className='card-image'></div>
                    <img
                        className='profile-image'
                        src="https://camo.githubusercontent.com/c09700f4849503687050214e00832a289a25b671/68747470733a2f2f63612e736c61636b2d656467652e636f6d2f45535a4348423438322d573031324a505a365437442d3039363430663433643835622d353132"
                        alt='profile-pic'
                    />
                    <div className='info'>
                        <h4 className='name'>Olga Cortez</h4>
                        <p className='position'>Team Lead</p>
                    </div>
                    <div className='social-container'>
                        <a
                            target='blank'
                            href='https://github.com/OlgaCortez'
                        >
                            <i className='fab fa-github-square'></i>
                        </a>
                        <a
                            target='blank'
                            href='https://www.linkedin.com/in/olga-cortez'
                        >
                            <i className='fab fa-linkedin'></i>
                        </a>
                    </div>
                </div>
                <div className='team-card'>
                    <div className='card-image'></div>
                    <img
                        className='profile-image'
                        src="https://camo.githubusercontent.com/fcc69216b92c63dde74b3264e89de73586791592/68747470733a2f2f63612e736c61636b2d656467652e636f6d2f45535a4348423438322d57303132583651384132442d6235623963316161656264322d353132"
                        alt='profile-pic'
                    />
                    <div className='info'>
                        <h4 className='name'>Mandi Hamza</h4>
                        <p className='position'>Full Stack Developer</p>
                    </div>
                    <div className='social-container'>
                        <a target='blank' href='https://github.com/Mandihamza'>
                            <i className='fab fa-github-square'></i>
                        </a>
                        <a
                            target='blank'
                            href='https://www.linkedin.com/in/mandihamza/'
                        >
                            <i className='fab fa-linkedin'></i>
                        </a>
                    </div>
                </div>
                <div className='team-card'>
                    <div className='card-image'></div>
                    <img
                        className='profile-image'
                        src="https://camo.githubusercontent.com/0614ae2a22d79f34a0e658c93b46ea2ef1a8516d/68747470733a2f2f63612e736c61636b2d656467652e636f6d2f45535a4348423438322d5730313242524a43514b592d3963386366393339626435382d353132"
                        alt='profile-pic'
                    />
                    <div className='info'>
                        <h4 className='name'>Anna Morris</h4>
                        <p className='position'>Full Stack Developer</p>
                    </div>
                    <div className='social-container'>
                        <a target='blank' href='https://github.com/clay-most'>
                            <i className='fab fa-github-square'></i>
                        </a>
                        <a
                            target='blank'
                            href='https://www.linkedin.com/in/anna-m-morris/'
                        >
                            <i className='fab fa-linkedin'></i>
                        </a>
                    </div>
                </div>
                <div className='team-card'>
                    <div className='card-image'></div>
                    <img
                        className='profile-image'
                        src="https://camo.githubusercontent.com/77e9912f669b39b25a6a139b7ffcdb14c40b2a22/68747470733a2f2f63612e736c61636b2d656467652e636f6d2f45535a4348423438322d5730313233524d4b5331352d3361653831383537636436372d353132"
                        alt='profile-pic'
                    />
                    <div className='info'>
                        <h4 className='name'>David York</h4>
                        <p className='position'>Full Stack Developer</p>
                    </div>
                    <div className='social-container'>
                        <a target='blank' href='https://github.com/daetor2012'>
                            <i className='fab fa-github-square'></i>
                        </a>
                        <a
                            target='blank'
                            href='#'
                        >
                            <i className='fab fa-linkedin'></i>
                        </a>
                    </div>
                </div>
                <div className='team-card'>
                    <div className='card-image'></div>
                    <img
                        className='profile-image'
                        src="https://camo.githubusercontent.com/0aa12e419ef751e7ce9add9db5238d8470dfed5c/68747470733a2f2f63612e736c61636b2d656467652e636f6d2f45535a4348423438322d573031324a4854324e30322d3663313365666335643234312d353132"
                        alt='profile-pic'
                    />
                    <div className='info'>
                        <h4 className='name'>Jose Reinoso</h4>
                        <p className='position'>Full Stack Developer</p>
                    </div>
                    <div className='social-container'>
                        <a target='blank' href='https://github.com/bigtonito39'>
                            <i className='fab fa-github-square'></i>
                        </a>
                        <a
                            target='blank'
                            href='https://www.linkedin.com/in/josereinoso/'
                        >
                            <i className='fab fa-linkedin'></i>
                        </a>
                    </div>
                </div>
                <div className='team-card'>
                    <div className='card-image'></div>
                    <img className='profile-image' src="https://camo.githubusercontent.com/ab50f0326b5d6c3f46e0a114cd1ab238be5edc98/68747470733a2f2f63612e736c61636b2d656467652e636f6d2f45535a4348423438322d573031324a48524b59304a2d3639643230646633663363332d353132" alt='profile-pic' />
                    <div className='info'>
                        <h4 className='name'>Dallas James</h4>
                        <p className='position'>Full Stack Developer</p>
                    </div>
                    <div className='social-container'>
                        <a target='blank' href='https://github.com/dallasjames'>
                            <i className='fab fa-github-square'></i>
                        </a>
                        <a
                            target='blank'
                            href='https://www.linkedin.com/in/dallas-james-b97b46115/'
                        >
                            <i className='fab fa-linkedin'></i>
                        </a>
                    </div>
                </div>
            </div>
        </TeamContainer>)
}

export default Team