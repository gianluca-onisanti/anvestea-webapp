import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import { Link, NavLink } from 'react-router-dom';
import ListItemDivider from './ListIemDivider';
import { Box, Typography } from '@mui/material';
import pointer from '../styles/pointer.png'

const drawerWidth = 265

const listItem = [
    { 
        label: 'Home',
        route: '/',
        icon: <HomeIcon /> 
    },
    { 
        label: 'Sobre',
        route: '/sobre',
        icon: <InfoIcon />
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
            <List>
                {listItem.map((item: any, key: number) => (
                    <>
                        <ListItemDivider />
                        <ListItem
                            key={key}
                            disablePadding
                            component={NavLink}
                            onClick={() => setClicked(key)}
                            to={item.route}
                            sx={{
                                color: clicked === key ? '#a3595c' : '#1a0e0e',
                                backgroundColor: clicked === key ? '#1a0e0e' : null
                            }}>
                            <ListItemButton sx={{'&:hover': { cursor: `url(${pointer}), pointer` }}}>
                                <ListItemIcon>
                                    <div style={{ marginTop: '5px', color: clicked === key ? '#a3595c' : '#1a0e0e' }}>
                                        {item.icon}
                                    </div>
                                </ListItemIcon>
                                <ListItemText sx={{ height: 'auto', ml: '-10px' }} primary={(
                                    <Typography fontFamily='fredoka'>
                                        {item.label}
                                    </Typography>
                                )} />
                            </ListItemButton>
                        </ListItem>
                    </>
                ))}
                <ListItemDivider />
            </List>
        </Drawer>
    )
}

export default SideMenu;