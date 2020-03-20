import React from 'react';
import { Card, CardImg, CardTitle, CardText, Button } from 'reactstrap';

function AmericanFoodList(props) {
    const {
        foodTypes,
        quickServices,
        recepies,
        restaurants,
    } = props.allFoodItems;

    const allServices = foodTypes.concat(quickServices, recepies, restaurants)
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
                    {americanFoodDirectory}
                </div>
            </div>
    );
}

export default AmericanFoodList;