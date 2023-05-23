import React from 'react'
import {Container,Row,Col} from "reactstrap";

import userIcon from '../assets/images/user-icon.png'
import useAuth from '../custom-hooks/useAuth';
import '../styles/admin-nav.css'
import { NavLink } from 'react-router-dom';

const admin_nav=[
  {
    display: 'Dasboard',
    path:'/dashboard'
  },
  {
    display: 'All-Products',
    path:'/dashboard/all-products'
  },
  {
    display: 'Orders',
    path:'/dashboard/orders'
  },
  {
    display: 'Users',
    path:'/dashboard/users'
  },
  
  

]

const AdminNav = () => {
  const{currentUser}=useAuth()
  return (
    <>
  <header className="admin_header">
    <div className={"admin_new_top"}>
        <Container>
        <div className='admin_nav-wrapper-top'>
            <div className="logo">
                <h2>Anik_Mart</h2>
            </div>
            <div className='search_box'>
                <input type='text' placeholder="Search....."></input>
                <span><i class="ri-search-line"></i></span>
            </div>
            <div className='admin_nav_top_right'>
                <span><i class="ri-notification-3-line"></i></span>
                <span><i class="ri-settings-2-line"></i></span>
                
                <img src={userIcon} alt="" />
            </div>

        </div>
        </Container>
    </div>

  </header>

  <section className="admin_menu p-0">
    <Container>
      <Row>
        <div className="admin_navigation">
          <ul className="admin_menu-list">
            {
              admin_nav.map((item,index)=>(

                <li className="admin_menu-item" key={index}>
                  <NavLink to={item.path} className={navClass=> navClass.isActive? 'active_admin-menu' : ''}>
                    {item.display}</NavLink>
                </li>
                
              ))
            }
          </ul>
        </div>
      </Row>
    </Container>
  </section>
  </>
  )
}

export default AdminNav
