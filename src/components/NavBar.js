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
            padding: '15px',
            position: 'fixed',
            bottom: 20,
            width: "80%"
        },
        iconBig:{
            color: '#FAFAFA',
            fontSize: '2.5em'
        },
        iconSmall:{
            color: '#FAFAFA',
            fontSize: '1.75em'
        }
    }

    return(
        <>
            <div className='navbar'>
                <BottomNavigation 
                    sx={{
                        width: '95%', 
                        borderRadius: 3,
                        boxShadow: 3
                    }} 
                    style={stylingObject.navbar}>
                    <BottomNavigationAction
                        onClick={() => handleClick("/Feed")}
                        icon={<ArticleIcon style={stylingObject.iconSmall}/>} 
                    />
                    <BottomNavigationAction 
                        onClick={() => handleClick("/")}
                        icon={<HomeIcon style={stylingObject.iconBig}/>} 
                    />
                    <BottomNavigationAction 
                        onClick={() => handleClick("/Profile")}
                        icon={<PersonIcon style={stylingObject.iconSmall}/>} 
                    />
                </BottomNavigation>
            </div>
        </>
    )
}

export default NavBar