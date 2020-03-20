import React from 'react';
import { Card, CardImg, CardTitle, CardText, Button } from 'reactstrap';

function AsianFoodList(props) {
    const {
        foodTypes,
        quickServices,
        recepies,
        restaurants,
    } = props.allFoodItems;

    const allServices = foodTypes.concat(quickServices, recepies, restaurants)
    const asianFoodOnly = allServices.filter(asianFood => asianFood.type === 'Asian') 

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
                    {asianFoodDirectory}
                </div>
            </div>
    );
}

export default AsianFoodList;