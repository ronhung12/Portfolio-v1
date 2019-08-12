import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: '#4f4f4f',
        height: '100%'
    },
}));

function Skills () {
    const classes = useStyles();

        return(
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <header>
                                <FontAwesomeIcon icon={['fab', 'js-square']} size='3x' color="#F1DE4F"/>
                                <br/>
                                <strong><i>Vanilla JavaScript</i></strong>
                            </header>
                            <p>Over three years of vanilla JavaScript experience in an academic and workplace environment</p>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <header>
                                <FontAwesomeIcon icon={['fab', 'react']} size='3x' color="#62D4FA"/>
                                <br/>
                                <strong><i>React</i></strong>
                            </header>
                            <p>Over two years of ReactJS experience in an academic and workplace environment</p>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <header>
                                <FontAwesomeIcon icon={['fab', 'node']} size='3x' color="#6cc24a"/>
                                <br/>
                                <strong><i>Node</i></strong>
                            </header>
                            <p>Over a year of NodeJS experience in an academic and workplace environment</p>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <header>
                                <FontAwesomeIcon icon={['fab', 'html5']} size='3x' color="#e34f26"/>
                                {" "}
                                <FontAwesomeIcon icon={['fab', 'css3-alt']} size='3x' color="#53A7DC"/>
                                <br/>
                                <strong><i>HTML & CSS</i></strong>
                            </header>
                            <p>Over a year of web design experience using HTML/CSS in an academic and workplace environment</p>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <header>
                                <FontAwesomeIcon icon={['fab', 'bootstrap']} size='3x' color="#e34f26"/>
                                <br/>
                                <strong><i>Bootstrap & MaterialUI</i></strong>
                            </header>
                            <p>Around a year of web design experience using CSS libraries like Bootstrap and MaterialUI in a workplace environment</p>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <header>
                                <FontAwesomeIcon icon={['fa', 'database']} size='3x' color="#ff0000"/>
                                <br/>
                                <strong><i>Database Management</i></strong>
                            </header>
                            <p>Over a year of web design experience using MySQL and Oracle Database in a workplace environment</p>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <header>
                                <FontAwesomeIcon icon={['fab', 'java']} size='3x' color="#f89820"/>
                                <br/>
                                <strong><i>Java & C++</i></strong>
                            </header>
                            <p>Over two years of software developing experience with C++ and Java in a academinc and workplace environment</p>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <header>
                                <FontAwesomeIcon icon={['fab', 'python']} size='3x' color="#4584b6"/>
                                <br/>
                                <strong><i>Python & Perl</i></strong>
                            </header>
                            <p>Around a year of software developing and scripting experience with Python and Perl in a workplace environment</p>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item style={{width: '100%'}}>
                        <Paper className={classes.paper}>
                            <header>
                                <FontAwesomeIcon icon={['fab', 'angular']} size='3x' color="#b52e31"/>
                                {" "}
                                <FontAwesomeIcon icon={['fab', 'aws']} size='3x' color="#ff9900"/>
                                {" "}
                                <FontAwesomeIcon icon={['fab', 'linux']} size='3x' color="#072C61"/>
                                {" "}
                                <FontAwesomeIcon icon={['fab', 'ubuntu']} size='3x' color="#dd4814"/>
                                {" "}
                                <br/>
                                <strong><i>AngularJS/Angular, AWS, Linux, Ubuntu, MongoDB...  </i></strong>
                            </header>
                            <p>Experience with all these other technologies and others as listed on resume in some capacity either workplace, academic, or
                                self-learning environment. Including but not limited to JQuery, Typescript and etc.
                            </p>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
}

export default Skills;
