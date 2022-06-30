import React, { useState} from 'react';
import { Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';
import { AppBar, Box, Button, Tabs, Tab, Toolbar, Typography} from '@mui/material';
import { useStyles } from '../styles/styles';
import { appBar,loginTabs,loginBox,logoutButton,signupButton  } from '../styles/styles'

const Header = () => {
    const classes = useStyles()
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const [value, setValue] = useState()
    return <AppBar position="sticky" style={appBar}>
        <Toolbar>
            <Typography variant='h4'>Blog App</Typography>
            {isLoggedIn && <><Box className='classes.loginForm'> 
                <Tabs style={loginTabs} value={value} onChange={(e,val)=>setValue(val)}>
                    <Tab LinkComponent = { Link } to="/blogs" label="Home" />
                    <Tab LinkComponent = { Link } to="/blogs/add" label="Create Blog" />
                    <Tab LinkComponent = { Link } to="/myBlogs" label="My Blog" />
                    <Tab LinkComponent = { Link } to="/profile/:id" label="Profile" />
                    <Tab LinkComponent = { Link } to="/followers/:id" label="My Followers" />
                </Tabs>
            </Box></>}
            <Box style={loginBox}>
                {!isLoggedIn &&<><Button LinkComponent = { Link } to="/auth" variant='contained' style={{ margin: 1, borderRadius: 10 }} color='warning'>Login</Button>
                <Button LinkComponent = { Link } to="/auth" variant='contained' style={signupButton} color='warning'>Signup</Button></>}
{   isLoggedIn && (
<Button 
    onClick={()=>dispatch(authActions.logout())}
    LinkComponent = { Link } 
    to="/auth" 
    variant='contained' 
    style={logoutButton} 
    >
    Logout
    </Button>
    )}
</Box>
        </Toolbar>
    </AppBar>
}

export default Header;