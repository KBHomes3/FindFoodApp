import React from 'react';
import { Card, CardImg, CardTitle, CardText, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function MexicanFoodList(props){
    const quickServices = props.quickServices;
    const recepies = props.recepies;
    const restaurants = props.restaurants.restaurants;
    
    const allServices = quickServices.concat(recepies, restaurants);
    const mexicanFoodOnly = allServices.filter(mexicanFood => mexicanFood.type === 'Mexican') 

    const mexicanFoodDirectory = mexicanFoodOnly.map(mexicanFood => {
        return (
            <div key={mexicanFood.id} className="col-md-5 m-1">
                <Card>
                    <CardImg height={240} width={240} src={mexicanFood.image} alt={mexicanFood.name} />
                    <CardTitle>{mexicanFood.name}</CardTitle>
                    <CardText>{mexicanFood.description}</CardText>
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
                        <BreadcrumbItem active>Mexican</BreadcrumbItem>     
                    </Breadcrumb>
                    <h2>Mexican Food</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {mexicanFoodDirectory}
            </div>
        </div>
    );
}

export default MexicanFoodList;