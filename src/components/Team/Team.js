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
                        src="https://avatars1.githubusercontent.com/u/44625143?s=460&u=10b6701c40dcf9e23ef73549806eac0b3a14ee6c&v=4"
                        alt='profile-pic'
                    />
                    <div className='info'>
                        <h4 className='name'>Nazifa Hossian</h4>
                        <p className='position'>Section Lead</p>
                    </div>
                    <div className='social-container'>
                        <a target='blank' href='https://github.com/ampers-and'>
                            <i className='fab fa-github-square'></i>
                        </a>
                        <a
                            target='blank'
                            href='https://www.linkedin.com/in/nazifa-hossain-00007/'
                        >
                            <i className='fab fa-linkedin'></i>
                        </a>
                    </div>
                </div>
                <div className='team-card'>
                    <div className='card-image'></div>
                    <img
                        className='profile-image'
                        src="https://avatars3.githubusercontent.com/u/28116510?s=460&u=a0a728e89ac74eaad3c276cf3193415f7a8e7182&v=4"
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
                        src="https://avatars3.githubusercontent.com/u/23363171?s=460&u=f1f70988d6fa5e862cabc821e5676fe27a20cc5e&v=4"
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
                        src="https://avatars0.githubusercontent.com/u/46730958?s=460&u=4899eacb4ea2d8d51d112cbb98bb8a57eca260d8&v=4"
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
                        src="https://avatars0.githubusercontent.com/u/51039059?s=460&u=ed2105b94d71c55a7e3fb03090c2771290991285&v=4"
                        alt='profile-pic'
                    />
                    <div className='info'>
                        <h4 className='name'>Jose Reinoso</h4>
                        <p className='position'>Full Stack Developer</p>
                    </div>
                    <div className='social-container'>
                        <a target='blank' href='https://github.com/JoseAReinoso'>
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