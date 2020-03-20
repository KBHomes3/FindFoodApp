import React from 'react';
import { Card, CardImg, CardTitle, CardText, Button } from 'reactstrap';

function QuickServiceList(props) {

        const directory = props.quickServices.map(quickService => {
            return (
                <div key={quickService.id} className="col-md-5 m-1">
                    <Card>
                        <CardImg height={240} width={240} src={quickService.image} alt={quickService.name} />
                        <CardTitle>{quickService.name}</CardTitle>
                        <CardText>{quickService.description}</CardText>
                        <Button>Let's See the Menu</Button>
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

export default QuickServiceList;