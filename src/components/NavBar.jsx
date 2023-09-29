import React, { useContext, useState } from 'react'
import {GrSearch} from 'react-icons/gr'
import {HiArrowLeft} from 'react-icons/hi'
import {GiCancel} from 'react-icons/gi'
import uzFlag from '../images/uz-lang.svg'
import ruFlag from '../images/ru-lang.svg'
import { Context } from '../context/Context'
function NavBar() {
    
    const {lang,flag,changeLang,value,setValue} = useContext(Context)

    const [active,setActive] = useState(false)
    

    

  return (
    <div>
        <nav className='header nav'>
            <div className='nav__language'>
                <button className={`nav__lang ${flag && 'active'}`} onClick={()=>changeLang('uz')}>
                    <span className="nav__lang-text">UZ</span>
                    <img src={uzFlag} alt="uzbek" className="nav__lang-img" />
                </button>
                <button className={`nav__lang ${!flag && 'active'}`} onClick={()=>changeLang('ru')}>
                    <span className="nav__lang-text">RU</span>
                    <img src={ruFlag} alt="russian" className="nav__lang-img" />
                </button>
            </div>
            <div className="container">
                <h1 className="nav__title">{lang.navTitle}</h1>
            </div>
            <button className="nav__search-btn" onClick={()=>setActive(true)}>
                <GrSearch />
            </button>
        </nav>
        <div className={`search nav ${active && 'active'}`}>
            <button className='search__back' onClick={()=>setActive(false)}>
                <HiArrowLeft />
            </button>
            <div className="container">
                <input 
                    type='text' 
                    placeholder={lang.search} 
                    className='search__input' 
                    value={value} 
                    onChange={(e)=>setValue(e.target.value)} 
                />
            </div>
            <button className='search__cancel' onClick={()=>setValue('')}>
                <GiCancel />
            </button>
        </div>
    </div>
  )
}

export default NavBar