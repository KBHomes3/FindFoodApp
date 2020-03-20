import React from 'react';
import { Card, CardImg, CardTitle, CardText, Button } from 'reactstrap';

function ItalianFoodList(props) {
    const {
        foodTypes,
        quickServices,
        recepies,
        restaurants,
    } = props.allFoodItems;

    const allServices = foodTypes.concat(quickServices, recepies, restaurants)
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
                    {italianFoodDirectory}
                </div>
            </div>
    );
}

export default ItalianFoodList;