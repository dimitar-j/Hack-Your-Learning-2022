import React from 'react'
import { BottomNavigation } from '@mui/material'
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

    const stylingObject = {
        navbar:{
            backgroundColor: '#4E148C',
        },
        icons:{
            color: '#FAFAFA',
        }
    }

    return(
        <>
            <BottomNavigation sx={{width: '100%', borderRadius: 2}} style={stylingObject.navbar}>
                <BottomNavigationAction
                    onClick={() => handleClick("/Feed")}
                    icon={<ArticleIcon style={stylingObject.icons}/>} 
                />
                <BottomNavigationAction 
                    onClick={() => handleClick("/")}
                    icon={<HomeIcon style={stylingObject.icons}/>} 
                />
                <BottomNavigationAction 
                    onClick={() => handleClick("/Profile")}
                    icon={<PersonIcon style={stylingObject.icons}/>} 
                />
            </BottomNavigation>
        </>
    )
}

export default NavBar