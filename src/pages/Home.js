import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom'
import AppsIcon from '@material-ui/icons/Apps'
import Search from './Search'
// import { Avatar } from '@material-ui/core'

function Home() {
    return (
        <div className="home">

            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to='/about'>Acerca</Link>
                    <Link to='/store'>Tienda</Link>
                </div>
                
                <div className="home__headerRight">
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Imagenes</Link>
                    <AppsIcon/>
                    {/* <Avatar/> */}

                </div>
            </div>
                
            <div className="home__body">
                <img alt="Google" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"></img>
                <Search/>
            </div>
        </div>
    )
}

export default Home
