import React, { Component } from "react";

class Details extends Component {
    componentDidMount() {
        const {location, history} = this.props;

        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        
        if (location.state !== undefined){
            return (
                <span>{location.state.title}</span>
            )
        } else {
            return null;
        }
    }
}

export default Details;