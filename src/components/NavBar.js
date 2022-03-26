import React from 'react'
import { BottomNavigation, Link } from '@mui/material'
import { BottomNavigationAction } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home'
import { useNavigate } from 'react-router';

function NavBar() {
    let navigate = useNavigate();

    const handleClick = (URL) => {
        navigate(URL);
    }

    return(
        <>
            <BottomNavigation>
                <BottomNavigationAction
                    onClick={() => handleClick("/Feed")}
                    icon={<ArticleIcon />} 
                />
                <BottomNavigationAction 
                    icon={<HomeIcon/>} 
                />
                <BottomNavigationAction 
                    icon={<PersonIcon/>} 
                />
            </BottomNavigation>
        </>
    )
}

export default NavBar