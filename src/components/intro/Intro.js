import React from 'react'
import './intro.css';
import {  Avatar } from 'antd';
import logo from '../../static/logo.png'

const Intro = () => {
  return (

    <header>
      <div className='container'>

         <Avatar
          className='avatar'
          size={124}
          shape="circle"
          src={logo}/>
        
        <h1 className='intro-name'>Nivāta InfoSec</h1>
       
        <p className='about-me'>A cybersecurity firm
    
        </p>
          <p className="about">
          Nivata Infosec is a start up founded by a group of passionate students. We are small and nimble as a company.Cybersecurity is what we do. In this world everything is connected, security is everything, more data, more users and more services, there's more to protect. It's time to put cybersecurity above everything. Nivata Infosec is a team passionate about security and technology who believe security is a shield against attacks and we use our knowledge and expertise to protect the web, network , app solutions and real worldsecurity holes.All your security needs under one roof.     </p>
          <p className='expl'>That sure explains a lot!</p>
      </div>

    </header>

  )
}
export default Intro;
