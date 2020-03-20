import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';

function About(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to="/directory">All Foods</Link></BreadcrumbItem>
                            <BreadcrumbItem active>About Us</BreadcrumbItem>
                            <BreadcrumbItem><Link to="/contactus">Contact Us</Link></BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About Us</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <h3>Our Mission</h3>
                    <p>To entertain, inform and inspire people around the globe through the power and love 
                        for food, reflecting the iconic brands, creative minds and innovative cooking
                        technologies that make ours the world’s premier food providing company. Realizing
                        the full potential of the internet -- universal access to research and education, Find Food App 
                        stives to include full participation in culture to drive a new era of understanding, growth, and
                        community through the foods we all love! </p>
                </div>
                <div className="col-sm-6">
                    <Card>
                        <CardHeader className="bg-primary text-white"><h3>Facts At a Glance</h3></CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-6">Founded</dt>
                                <dd className="col-6">February 3, 2020</dd>
                                <dt className="col-6">No. of Food Providers in 2020</dt>
                                <dd className="col-6">10</dd>
                                <dt className="col-6">No. of Reviews in 2020</dt>
                                <dd className="col-6">1</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">1</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col">
                    <Card className="bg-light mt-3">
                        <CardBody>
                            <blockquote className="blockquote">
                                <p className="mb-0">Humor keeps us alive. Humor and food. Don't forget food. You can go a week without laughing.</p>
                                <footer className="blockquote-footer">Joss Whedon,{' '}
                                    <cite title="Source Title">"Wind-Wafted Wild Flowers" -
                                    The Open Court, 1943</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}
export default About;