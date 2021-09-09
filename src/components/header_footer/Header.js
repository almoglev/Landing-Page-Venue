import React, {useState, useEffect} from 'react';

import {AppBar, Toolbar, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import SideDrawer from './SideDrawer';


const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [headerShow, setHeaderShow] = useState(false);

    // a function to open/close the menu
    const toggleDrawer = (value) => {
        setDrawerOpen(value)
    }

    const handleScroll = ()=>{
        // if we're scrolling
        if (window.scrollY>0){
            setHeaderShow(true)
        } else{
            // we're at the top
            setHeaderShow(false)
        }
    }
    // a function to detect if the user is scrolling. using event listener
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)

    },[])


    return(
        <AppBar
            position="fixed"
            style={{
                // if headerShow is true (=user is scrolling)- show it, otherwise make it transparent
                backgroundColor: headerShow ? '#2f2f2f' : 'transparent',
                boxShadow:'none',
                padding: '10px 0px'
            }}
        >
            <Toolbar>
                <div className="header_logo">
                    <div className="font_righteous header_logo_venue">The Venue</div>
                    <div className="header_logo_title">Musical Events</div>
                </div>

                <IconButton 
                    aria-label="Menu"
                    color="inherit"
                    onClick={()=> toggleDrawer(true)}
                >
                    <MenuIcon/>
                </IconButton>

                <SideDrawer
                    open={drawerOpen}
                    onClose={(value)=>toggleDrawer(value)}
                />
            </Toolbar>
        </AppBar>
    );
}

export default Header