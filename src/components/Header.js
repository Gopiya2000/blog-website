import React, { useState ,setValue} from 'react';
import { AppBar, Box, Button, Tabs,Tab, Toolbar, Typography } from '@mui/material';
const Header = () => {
    const [value,setValue] =useState();
    return <AppBar
    position="sticky"
        style={{
            background: '#2E3B55'
        }}                   
    >
        <Toolbar>
            <Typography variant='h4'>Blogs App</Typography>
            <Box display="flex">
                <Tabs value={value} onChange={(e,val)=>setValue(val)}>
                    <Tab label="Home" />
                    <Tab label="Create Blog" />
                    <Tab label="My Blog" />
                    <Tab label="Profile" />
                    <Tab label="My Followers" />
                </Tabs>
            </Box>
            <Box display="flex" marginLeft='auto'>
                <Button variant='contained' style={{ margin: 1, borderRadius: 10 }} color='warning'>Login</Button>
                <Button variant='contained' style={{ margin: 1, borderRadius: 10 }} color='warning'>Signup</Button>
                <Button variant='contained' style={{ margin: 1, borderRadius: 10 }} color='warning'>Logout</Button>
            </Box>
        </Toolbar>
    </AppBar>
}

export default Header;