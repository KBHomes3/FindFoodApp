import React from 'react';
import { Card, CardImg, CardTitle, CardText, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function ItalianFoodList(props) {
    const quickServices = props.quickServices;
    const recepies = props.recepies;
    const restaurants = props.restaurants.restaurants;
    
    const allServices = quickServices.concat(recepies, restaurants);
    const italianFoodOnly = allServices.filter(italianFood => italianFood.type === 'Italian') 

    const italianFoodDirectory = italianFoodOnly.map(italianFood => {
        return (
            <div key={italianFood.id} className="col-md-5 m-1">
                <Card>
                    <CardImg height={240} width={240} src={italianFood.image} alt={italianFood.name} />
                    <CardTitle>{italianFood.name}</CardTitle>
                    <CardText>{italianFood.description}</CardText>
                    <Button>Let's Try This!</Button>
                </Card>
            </div>
        );
    });

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/directory">All Foods</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Italian</BreadcrumbItem>     
                    </Breadcrumb>
                    <h2>Italian Food</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {italianFoodDirectory}
            </div>
        </div>
    );
}

export default ItalianFoodList;