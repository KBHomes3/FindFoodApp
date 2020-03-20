import React from 'react';
import { Card, CardImg, CardTitle, CardText, Button } from 'reactstrap';

function RecepiesList(props) {

        const directory = props.recepies.map(recepie => {
            return (
                <div key={recepie.id} className="col-md-5 m-1">
                    <Card>
                        <CardImg height={240} width={240} src={recepie.image} alt={recepie.name} />
                        <CardTitle>{recepie.name}</CardTitle>
                        <CardText>{recepie.description}</CardText>
                        <Button>Show Me The Recepie</Button>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }

export default RecepiesList;