import React from 'react';
import { Card, CardImg, CardTitle, CardText, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';



function Directory(props) {

        const directory = props.foodTypes.map(foodType => {
            return (
                <div key={foodType.id} className="col-md-5 m-1">
                    <Card>
                        <CardImg height={240} width={240} src={foodType.image} alt={foodType.name} />
                        <CardTitle>{foodType.name}</CardTitle>
                        <CardText>{foodType.description}</CardText>
                        <Link to={foodType.path}>
                            <Button color="primary">See More Like This!</Button>
                        </Link>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                <div className="col">
                    <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active >All Foods</BreadcrumbItem>
                            <BreadcrumbItem><Link to='/aboutus'>About Us</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to="/contactus">Contact Us</Link></BreadcrumbItem>
                    </Breadcrumb>
                </div>
            </div>
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }

export default Directory;
