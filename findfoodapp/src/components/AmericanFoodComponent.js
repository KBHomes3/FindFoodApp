import React from 'react';
import { Card, CardImg, CardTitle, CardText, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function AmericanFoodList(props) {
    const quickServices = props.quickServices;
    const recepies = props.recepies;
    const restaurants = props.restaurants.restaurants;
    
    const allServices = quickServices.concat(recepies, restaurants);
    const americanFoodOnly = allServices.filter(americanFood => americanFood.type === 'American') 

    const americanFoodDirectory = americanFoodOnly.map(americanFood => {
        return (
            <div key={americanFood.id} className="col-md-5 m-1">
                <Card>
                    <CardImg height={240} width={240} src={americanFood.image} alt={americanFood.name} />
                    <CardTitle>{americanFood.name}</CardTitle>
                    <CardText>{americanFood.description}</CardText>
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
                        <BreadcrumbItem active>American</BreadcrumbItem>     
                    </Breadcrumb>
                    <h2>American Food</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {americanFoodDirectory}
            </div>
        </div>
    );
}

export default AmericanFoodList;