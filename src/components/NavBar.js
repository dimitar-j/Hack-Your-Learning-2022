import { BottomNavigation } from '@mui/material'
import { BottomNavigationAction } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';

import React from 'react'

function NavBar() {
    return(
        <>
            <BottomNavigation>
                <BottomNavigationAction
                    label='Feed'
                    to='/Feed'
                    icon={<ArticleIcon />} 
                />
                <BottomNavigationAction 
                    label='Home' 
                    to='/Home'
                    icon={<HomeIcon/>} 
                />
                <BottomNavigationAction 
                    label='Profile'
                    to='/Profile'
                    icon={<PersonIcon/>} 
                />
            </BottomNavigation>
        </>
    )
}

export default NavBar