import React from 'react';
import { Card, CardImg, CardTitle, CardText, Button } from 'reactstrap';

function MexicanFoodList(props){
    const {
        foodTypes,
        quickServices,
        recepies,
        restaurants,
    } = props.allFoodItems;

    const allServices = foodTypes.concat(quickServices, recepies, restaurants)
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
                    {mexicanFoodDirectory}
                </div>
            </div>
    );
}

export default MexicanFoodList;