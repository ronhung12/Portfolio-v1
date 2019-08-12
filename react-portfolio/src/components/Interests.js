import React from 'react';
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import clsx from "clsx";
import basketball from '../images/basketball.jpg';
import fishing from '../images/fishing.jpg';
import snowboarding from '../images/snowboarding.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    card: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary,
        height: '100%',
        margin: '10px'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    }
}));

function Interests() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    function handleExpandClick() {
        setExpanded(!expanded);
    }



    return (
        <>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Card className={classes.card}>
                            <CardMedia>
                                <FontAwesomeIcon icon={['fas', 'basketball-ball']} size='3x' color="#FA8320"/>
                                {" "}
                                <FontAwesomeIcon icon={['fas', 'futbol']} size='3x' color="black"/>
                                {" "}
                                <FontAwesomeIcon icon={['fas', 'football-ball']} size='3x' color="brown"/>
                            </CardMedia>
                            <CardActions disableSpacing>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>
                                        I played basketball competitively and recreationally since I was 7.
                                        My favorite NBA team is the Toronto Raptors and I was there for the Game 5
                                        of the 2019 NBA Finals.
                                    </Typography>
                                    <Typography paragraph>
                                        I play soccer recreationally and have loved watching professional soccer since I
                                        was a kid. My favorite teams are Arsenal, Borussia Dortmund, and FC Barcelona.
                                    </Typography>
                                    <Typography paragraph>
                                        I play football recreationally(flag football) and my favorite team is the New York
                                        Giants.
                                    </Typography>
                                    <CardMedia
                                        component="img"
                                        alt="Ronald at the Toronto Raptors NBA Final Game 5 in 2019"
                                        height="300"
                                        src={basketball}
                                        title="Ronald at NBA Finals 2019"
                                    />
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                    <Grid item xs>
                        <Card className={classes.card}>
                            <CardMedia>
                                <FontAwesomeIcon icon={['fas', 'snowboarding']} size='3x' color="black"/>
                                {" "}
                                <FontAwesomeIcon icon={['fas', 'fish']} size='3x' color="#FA8320"/>
                                {" "}
                                <FontAwesomeIcon icon={['fas', 'gamepad']} size='3x' color="#d04242"/>
                            </CardMedia>
                            <CardActions disableSpacing>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>
                                        I am an avid snowboarder since childhood. My favorite mountains are Jiminy Peak,
                                        Catskills, Mont-Tremblant, Poconos, and Mountain Creek.
                                    </Typography>
                                    <Typography paragraph>
                                        I love fishing and shrimping when I can. I usually go down to the OBX for deep sea
                                        fishing and shrimping. Otherwise I do sound fishing near NJ and Delaware.
                                    </Typography>
                                    <Typography paragraph>
                                        I am an avid gamer and have played videogames since the Nintendo Cube. My most played games are
                                        the Call of Duty games, Halo, League of Legends, Fortnite, Apex Legends, and MapleStory.
                                    </Typography>
                                    <CardMedia style={{display: 'inline'}}
                                        component="img"
                                        alt="Ronald at the Toronto Raptors NBA Final Game 5 in 2019"
                                        height="400"
                                        src={fishing}
                                        title="Ronald at NBA Finals 2019"
                                    />
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Card className={classes.card}>
                            <CardMedia>
                                <FontAwesomeIcon icon={['fas', 'laptop-medical']} size='3x' color="black"/>
                                {" "}
                                <FontAwesomeIcon icon={['fas', 'user-md']} size='3x' color="#23408e"/>
                                {" "}
                                <FontAwesomeIcon icon={['fas', 'chart-line']} size='3x' color="#ed1b24"/>
                            </CardMedia>
                            <CardActions disableSpacing>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>
                                        I have always had an interest in bioinformatics and the healthcare industry. I was originally
                                        Biology/Premed before changing my major to Computer Science with a Bioinformatics minor. I was a
                                        research assistant at the Institute of Microbiology in Beijing and performed my own experiments and
                                        research paper while assisting the professor in his pursuit of synergistic medicine cancer research.
                                        I moved into a subdivision of his lab that was focused on bioinformatics after switching my major to
                                        Computer Science. I enjoy reading medical articles and research papers especially those related to biomechanics, cancer research
                                        , and sports medicine.
                                    </Typography>
                                    <Typography paragraph>
                                        I enjoy statistics especially in the financial field. I do my own stock trading on a personal Roth
                                        IRA account.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Interests;
