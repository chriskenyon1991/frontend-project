import React from 'react';
import { Link } from "@reach/router"


class Header extends React.Component{
    


    render(){
        return <div className='header'>
                {/* <Link id='login' to='/login'><span className='secondaryColor'>&lt;</span>Login<span className='secondaryColor'>/&gt;</span></Link> */}
                <Link key='home' to='/' id='titlepage'><span className='secondaryColor'>&lt;</span>Welcome To <span id='N'>N</span>orthcoders News<span className='secondaryColor'>/&gt;</span></Link>
                {/* <h2 id='username'><span className='secondaryColor'>&lt;</span>{this.props.username}<span className='secondaryColor'>/&gt;</span></h2> */}
                
        </div>           
    }
}
export default Header