import React from 'react';
import Introduction from './Introduction';
import Resume from './Resume';
import Skills from './Skills';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Face from '@material-ui/icons/Face';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FolderShared from '@material-ui/icons/FolderShared';
import InsertChart from '@material-ui/icons/InsertChart';
import Stars from '@material-ui/icons/Stars';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Biography from "./Biography";
import Interests from "./Interests";
import * as Scroll from 'react-scroll';

let Link = Scroll.Link;
let Element = Scroll.Element;

const drawerWidth = 350;

const useStyles = makeStyles(theme => ({

    '@global': {
        '*::-webkit-scrollbar': {
            width: '0.5em'
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#0996B9',
            outline: '1px solid slategrey'
        }
    },
    root: {
        display: 'flex'
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },

    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    }
}));



function Main(props) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();

    const drawer = (
        <div style={{backgroundColor: '#2B5B83'}}>
            <Divider/>
                <br/>
                <Introduction/>
            <Divider/>
            <List style={{color: '#eeeeee', alignItems: 'flex-start'}}>
                <Link style={{margin: 0}} to="biography" spy={true} smooth={true}>
                    <ListItem button>
                        <ListItemIcon><Face/></ListItemIcon>
                        <ListItemText primary="About Me"/>
                    </ListItem>
                </Link>
                <Link style={{margin: 0}} to="resume" spy={true} smooth={true} offset={10}>
                    <ListItem button>
                        <ListItemIcon><FolderShared/></ListItemIcon>
                        <ListItemText primary="Resume"/>
                    </ListItem>
                </Link>
                <Link style={{margin: 0}} to="skills" spy={true} smooth={true}>
                    <ListItem button>
                        <ListItemIcon><InsertChart/></ListItemIcon>
                        <ListItemText primary="Skills"/>
                    </ListItem>
                </Link>
            </List>
            <Divider />
            <List style={{color: '#eeeeee'}}>
                <Link style={{margin: 0}} to="interests" spy={true} smooth={true}>
                    <ListItem button>
                        <ListItemIcon><Stars/></ListItemIcon>
                        <ListItemText primary="Interests"/>
                    </ListItem>
                </Link>
                <Link style={{margin: 0}} to="biography" spy={true} smooth={true}>
                    <ListItem button>
                        <ListItemIcon><MailIcon/></ListItemIcon>
                        <ListItemText primary="Contact Me"/>
                    </ListItem>
                </Link>
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <nav className={classes.drawer} aria-label="sidebar options">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <Element name="biography">
                    <Typography paragraph component={'span'} variant={'body2'}>
                        <Biography/>
                    </Typography>
                </Element>
                <br/>
                <Divider/>
                <br/>
                <Element name="resume" style={{backgroundColor: "#6999B7", margin: 0}}>
                    <h1 style={{textAlign: 'center', color: '#eeeeee'}}>Resume</h1>
                    <Typography paragraph component={'span'} variant={'body2'}>
                        <br/>
                        <Resume/>
                    </Typography>
                </Element>
                <Divider/>
                <br/>
                <Element name="skills">
                    <h1 style={{textAlign: 'center'}}>Skills</h1>
                    <Typography paragraph component={'span'} variant={'body2'}>
                        <br/>
                        <Skills/>
                    </Typography>
                </Element>
                <Divider/>
                <br/>
                <br/>
                <Element style={{backgroundColor: "#6999B7", margin: 0}} name="interests">
                    <h1 style={{textAlign: 'center', color: '#eeeeee'}}>Hobbies and Interests</h1>
                    <br/>
                    <Typography paragraph component={'span'} variant={'body2'}>
                        <Interests/>
                    </Typography>
                </Element>
            </main>
        </div>
    );
}


export default Main;
