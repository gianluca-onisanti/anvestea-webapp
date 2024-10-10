import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import { NavLink } from 'react-router-dom';
import ListItemDivider from './ListIemDivider';
import { Box, Typography } from '@mui/material';
import pointer from '../styles/pointer.png'

const drawerWidth = 265

const listItem = [
    {
        label: 'Menu Principal',
        route: '/',
        icon: <HomeIcon />,
        subs: [
            {
                label: 'Home',
                route: '/',
            }
        ]
    },
    {
        label: 'História',
        route: '/historia',
        icon: <InfoIcon />,
        subs: [
            {
                label: 'Home',
                route: '/',
            }
        ]
    }
]

const SideMenu: React.FC = () => {

    const [clicked, setClicked] = React.useState(0)

    return (
        <Drawer
            sx={{
                width: drawerWidth + 64,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    backgroundColor: '#f1e7e7',
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    '&:active': {
                        cursor: 'none',
                    }
                },
                '&:active': {
                    cursor: 'none',
                }
            }}
            variant="persistent"
            anchor="left"
            open={true}
        >
            <Box
                height='12px'
                padding={2}
                mb={4}
                textAlign='center'
            >
                <Typography
                    borderBottom={1}
                    fontFamily='anvestea-bold'
                    fontSize={38}
                    color='#1a0e0e'
                >
                    Anvestea's Accord
                </Typography>
            </Box>
            <List sx={{'&:active': { cursor: 'none' }}}>
                {listItem.map((item: any, key: number) => (
                    <React.Fragment key={key}>
                        <ListItemDivider />
                        <ListItem
                            key={key}
                            disablePadding
                            component={NavLink}
                            onClick={() => setClicked(key)}
                            to={item.route}
                            sx={{
                                '&:active': { cursor: 'none' },
                                color: clicked === key ? '#a3595c' : '#1a0e0e',
                                backgroundColor: clicked === key ? '#1a0e0e' : null
                            }}>
                            <ListItemButton sx={{
                                '&:active': { cursor: 'none' },
                                '&:hover': { cursor: `url(${pointer}), pointer` },
                            }}>
                                <ListItemIcon sx={{'&:active': { cursor: 'none' }}}>
                                    <div style={{ 
                                        marginTop: '5px', 
                                        color: clicked === key ? 
                                            '#a3595c' : '#1a0e0e',
                                        cursor: `inherit`    
                                    }}>
                                        {item.icon}
                                    </div>
                                </ListItemIcon>
                                <ListItemText sx={{
                                    '&:active': { cursor: 'none' },
                                    height: 'auto',
                                    ml: '-10px'
                                }}
                                    primary={(
                                        <Typography sx={{'&:active': { cursor: 'none' }}} fontFamily='fredoka'>
                                            {item.label}
                                        </Typography>
                                    )} />
                            </ListItemButton>
                        </ListItem>
                    </React.Fragment>
                ))}
                <ListItemDivider />
            </List>
        </Drawer>
    )
}

export default SideMenu;