import React from 'react';
import { Card, CardImg, CardTitle, CardText, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function AsianFoodList(props) {
    const quickServices = props.quickServices;
    const recepies = props.recepies;
    const restaurants = props.restaurants.restaurants;
    
    const allServices = quickServices.concat(recepies, restaurants);
    const asianFoodOnly = allServices.filter(asianFood => asianFood.type === 'Asian'); 

    const asianFoodDirectory = asianFoodOnly.map(asianFood => {
        return (
            <div key={asianFood.id} className="col-md-5 m-1">
                <Card>
                    <CardImg height={240} width={240} src={asianFood.image} alt={asianFood.name} />
                    <CardTitle>{asianFood.name}</CardTitle>
                    <CardText>{asianFood.description}</CardText>
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
                        <BreadcrumbItem active>Asian</BreadcrumbItem>     
                    </Breadcrumb>
                    <h2>Asian Food</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {asianFoodDirectory}
            </div>
        </div>
    );
}

export default AsianFoodList;