import React, {Component} from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

class PeopleList extends Component {
    constructor(props){
        super(props)
        console.log("classProps: ", this.props)
        this.state = {
            PL:props
        };
        console.log("hi")
        console.log(this.state)
        //console.log("PeopleListState: ",this.state)
    }
    // friendsFriends (item) {
    //     //console.log(item.friends);
    //     item.friends.map((friend, index) => {
    //         //console.log(friend.firstName);
    //         return <li>{friend.firstName}</li>
    //     })
    // }

    // componentDidMount(props){
    //     this.setState({ CDM: props });
    //     console.log("CDM prop: ", props)
    //   }

    render(props){
        //console.log("state: ", this.state)
        console.log("PL Render Props: ", this.props);
        //console.log("appState: ", this.props.appState);
        //console.log("peopleArr: ",this.props.appState.peopleArr);
        return (
            <ul>
                {
                 this.props.people.map( (item) => {
                    return (
                        <Card className="card" key={item.id}>
                            <CardTitle>{item.first_name + ' ' + item.last_name}</CardTitle>
                            <CardBody>
                                <CardText>Occupation: {item.occupation}</CardText>
                                <CardText>Gender: {item.gender}</CardText>
                            </CardBody>
                    <div onClick={()=>this.friendsFriends(item)} > My Friend's Friends </div>
                        </Card>

                    )
                })}
            </ul>
        )
    }
}

export default PeopleList;