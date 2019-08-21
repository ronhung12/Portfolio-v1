import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { PDFExport } from '@progress/kendo-react-pdf';
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";

const StyledCardHeader = withStyles({
    root: {
        color: 'black'
    }
})(CardHeader);


class Resume extends React.Component {

    exportPDF = () => {
        this.resume.save();
    };

    render(){
        return(
            <section>
                <PDFExport paperSize={'Letter'}
                           fileName="Ronald_Hung_Resume.pdf"
                           title=""
                           subject=""
                           keywords=""
                           ref={(r) => this.resume = r}>
                    <div style={{
                        color: 'black',
                        height: 792,
                        width: 612,
                        padding: 'none',
                        backgroundColor: 'white',
                        boxShadow: '5px 5px 5px black',
                        margin: 'auto',
                        overflowX: 'hidden',
                        overflowY: 'hidden'}}>
                        <br/>
                        <h4 style={{margin: 0}}>Ronald Hung</h4>
                        <h5 style={{margin: 0}}>Green Brook, NJ 08812</h5>
                        <h5 style={{margin: 0}}>ron.h.hung@gmail.com</h5>
                        <h5 style={{margin: 0}}>https://github.com/ronhung12</h5>
                        <br/>
                        <Divider/>
                        <Card>
                            <StyledCardHeader style={{fontSize: '1rem', fontWeight: 'bold'}}>Education</StyledCardHeader>
                            <CardContent style={{textAlign: 'left'}}><strong>Fordham University, Rose Hill College</strong>
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                New York, NY
                                <br/>
                                <i>Bachelor of Science - Computer Science (Track: Pre-Medical), Bioinformatics Minor</i>
                                <br/>
                                <br/>
                                <strong><i>Relevant Coursework</i></strong>
                                <article style={{display: 'inline', fontSize: '0.7rem'}}>: Data Structures (C++), Database Systems, Computer Algorithms,
                                Data Communications and Network, Bioinformatics,
                                Computer Organization, Machine Learning (graduate level)
                                </article>
                            </CardContent>
                        </Card>
                        <Divider/>
                        <Card>
                            <StyledCardHeader style={{fontSize: '1rem', fontWeight: 'bold'}}>Skills</StyledCardHeader>
                            <CardContent style={{textAlign: 'left'}}>
                                <strong>Technical</strong>
                                <article style={{display: 'inline', fontSize: '0.7rem'}}>: Java, React/React Redux, JavaScript ES6+, NodeJS, Express, Spring, Bootstrap,
                                RESTful APIs, JSON, AJAX, Spring MVC, Oracle 11g, HTML5/CSS3, Maven, C++, Perl, Python, MATLAB,
                                AutoCAD, MySQL, UNIX, Machine Learning, AngularJS, Angular2+, TypeScript, JQuery, AWS, MongoDB
                                </article>
                                <br/>
                                <br/>
                                <strong>Languages</strong>
                                <article style={{display: 'inline', fontSize: '0.7rem'}}>: Cantonese (fluent), Mandarin (conversational), Spanish (conversational)
                                </article>
                            </CardContent>
                        </Card>
                        <Divider/>
                        <Card>
                            <StyledCardHeader style={{fontSize: '1rem', fontWeight: 'bold'}}>Work Experience</StyledCardHeader>
                            <CardContent style={{textAlign: 'left'}}>
                                <article>
                                    <strong>Mercury Systems Inc</strong>,
                                    <p style={{display: 'inline', fontSize: '0.7rem'}}><i> Full Stack Software Consultant</i>, Princeton NJ
                                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Feb 2019-Present</p>
                                    <ul style={{marginTop: 0, fontSize: '0.65rem'}}>
                                        <li>Trained in fullstack setting, learning core Java, Spring framework, AngularJS, Angular2+,
                                            React, Oracle SQL, HTML5/CSS, and Node/Express
                                        </li>
                                        <li>Applied these technologies to create a project that would be presented and approved before becoming a consultant</li>
                                    </ul>
                                    <strong>Chinese Academy of Sciences</strong>,
                                    <p style={{display: 'inline', fontSize: '0.7rem'}}><i> Research Assistant</i>, Beijing China
                                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;May 2015-Aug 2017</p>
                                    <ul style={{marginTop: 0, fontSize: '0.65rem'}}>
                                        <li>Ran PCR trial runs for different plasmids and used biotechnology and bioinformatics technology for cancer and TB research</li>
                                        <li>Became fluent in Perl programming language and implemented Perl to CGI and bioinformatics capabilities in a project</li>
                                        <li>Designed spacers and ran CRISPR-Cas9 experiments for professor in a synergistic cancer and TB treatment research</li>
                                    </ul>
                                    <strong>American Multi-Cinema</strong>,
                                    <p style={{display: 'inline', fontSize: '0.7rem'}}><i> Server</i>, Bridgewater NJ
                                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Aug 2015-Sept 2016
                                    </p>
                                    <ul style={{marginTop: 0, fontSize: '0.65rem'}}>
                                        <li>Host guests by greeting them before movies, taking their food/drink orders, and providing timely and appropriate
                                            customer service throughout movie
                                        </li>
                                        <li>Used the Point of Sale system to correctly provide the bill, accept payment, and deliver the correct change to the
                                            customers in a timely manner
                                        </li>
                                    </ul>
                                </article>
                            </CardContent>
                            <br/>
                        </Card>
                    </div>
                </PDFExport>
                <br/>
                <Button style={{justifyContent: 'center'}} variant="contained" color="primary" onClick={this.exportPDF}>DOWNLOAD PDF VERSION</Button>
                <br/>
                <br/>
                <br/>
            </section>
        )
    }
}

export default Resume;
