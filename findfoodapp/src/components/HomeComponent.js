import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Loading } from './LoadingComponent';
import RenderVideo from './RenderVideoComponent';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderFeaturedCard({item, isLoading, errMess}) {
    if (isLoading) {
        return (
             <Loading />
        );
    }
    if (errMess) {
        return (
            <h4>{errMess}</h4>
        );
    }
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    const restaurant = props.restaurants[0] ? props.restaurants[0] : props.restaurants;
    console.log(props.restaurants);

    return (
        <React.Fragment>
            <div className="row m-1">
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardTitle className="centered">Are you hungry? But you dont want to eat at the same old restaurant?</CardTitle>
                <CardText>If you are like me, you dont't want to eat at the same restaurant over and over again. 
                    You have strict standards and the discriminating taste buds to distingush fresh and delicious food
                    from not so fresh. Your friend tells you about an amazing restaurant and you try it and love it but 
                    that feeling only lasts a few times.  Now its time to find that new place that you will love until the
                    next time. Thats were FindFoodApp can help!  </CardText>
                </Card>
            </div>
            <div className="container centered">
                <RenderVideo />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md m-1">
                        <RenderFeaturedCard item={props.recepie} />
                    </div>
                    <div className="col-md m-1">
                        <RenderFeaturedCard item={props.quickservice} />
                    </div>
                    <div className="col-md m-1">
                        <RenderFeaturedCard item={restaurant}
                        isLoading={props.restaurantsLoading}
                        errMess={props.restaurantsErrMess} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default Home;