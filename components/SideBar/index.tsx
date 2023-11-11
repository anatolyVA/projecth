'use client'

import './style.css'
import Image from 'next/image';
import { AiOutlineSliders } from 'react-icons/ai';
import {useState} from 'react';

function SideBar() {

  type Prop = {
    index: number;
  }

  const [toggleState, setToggleState] = useState(1)

  function toggleTab({index} : Prop){
    setToggleState(index)
  }
  return (
    <div className='sidebar'>
        <div className='user-control'>
          <input placeholder='Найти' className='map_search'></input>
          <button className='iconbutton iconbutton_filled-light'><AiOutlineSliders size={'1.5em'}/></button>
        </div>
        <div className="sidebar_body">
          <Image height={200} width={300} alt='' src={'/thundertower.png'}></Image>
          <section className='sidebar_content'>
            <div className='header'>
              <p>Исторические достопримечательности</p>
              <h2>Громовая башня</h2>
              <p>Одна из башен Смоленского кремля</p>
            </div>
            <div className='tab-buttons'>
              <button className={ toggleState === 1 ? 'tab-button tab-button_active' : 'tab-button'} onClick={()=> setToggleState(1)}>Обзор</button>
              <button className={ toggleState === 2 ? 'tab-button tab-button_active' : 'tab-button'} onClick={()=> setToggleState(2)}>Фото</button>
            </div>
            <div className='tabs'>
              {toggleState === 1 ?
                <h2>Обзор</h2>
                :
                <h2>Фото</h2>
              }
            </div>
          </section>
        </div>
    </div>
  )
}

export default SideBar;
