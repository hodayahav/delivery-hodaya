import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import {MENU_ITEMS, MESSAGES} from "../../common/consts";
import { useHistory } from 'react-router-dom'
import {Grid} from "@mui/material";
import "./styles.css";

export default function HeaderMenu() {
    const [openDrawer, setOpenDrawer] = React.useState(false);

    const history = useHistory();

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpenDrawer(open);
    };

    return (
        <Grid className='header-menu'>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            {MESSAGES.HEADER_TITLE}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer
                anchor={"left"}
                open={openDrawer}
                onClose={toggleDrawer(false)}
            >
                <Box
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List className='menu_items_list'>
                        {MENU_ITEMS.map(({text, path}) => (
                            <ListItem button onClick={() => history.push(path)} key={text}>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Grid>
    );
}
