import React, { Component } from 'react';

import './styles/Navbar.scss';

class Navbar extends Component {
    state = {
        click: false
    }

    openMenu = () => {
        this.setState(state => ({ click: !state.click }))
        if (window.innerWidth <= 1024) {
            if (this.state.click) {
                document.body.classList.remove('scroll')
            } else {
                document.body.classList.add('scroll')
            }
        }
    }

    render() {
        let burgerMenu = `Navbar ${this.state.click ? 'menuActive' : ''}`
        return (
            <nav className={burgerMenu}>
                <div onClick={this.openMenu}>
                    {this.props.navImage}
                </div>
                <ul className='Navbar-list'>
                    <div className='closeMenu' onClick={this.openMenu}>&#10006;</div>
                    {this.props.children}
                </ul>
            </nav>
        )
    }
}

export default Navbar