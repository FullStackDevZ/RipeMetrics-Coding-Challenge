import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios"
import logo from "./logo.png"
import { returnStatement } from "@babel/types";
import YourStudents from "../components/YourStudents"



class Home extends Component {
    state = {
        name: [],
        science: [],
        math: [],
        english: [],
        history: []
    }


    componentDidMount() {

        this.getNewEvent(this.props.username);
    }
    componentWillReceiveProps(props) {

        this.getNewEvent(props.username);
    }
    getNewEvent(username) {
        // if (this.props.username && (!this.state.owed.length || !this.state.paid.length)){
        //     return;
        // }

        console.log(username)

        Promise.all([
            axios.get("/user/findOwedByUserId/" + username),
            axios.get("/user/findYouOwedByUserId/" + username)
        ])
            .then(resultArray => {
                this.setState({
                    ...this.state,
                    name: resultArray[0].data,
                    science: resultArray[1].data,
                    // math: resultArray[2].data,
                    // english: resultArray[3].data,
                    // history: resultArray[4].data
                })
            });

    }
    

    render() {
        console.log(this.props)
        return (

            <div>
             
                {this.props.loggedIn ? (
                    <YourStudents></YourStudents>
                    
                ) : (
                        <div className="row">
                            <div className="jumbotron rounded col-lg-16 mx-auto">
                                <img src={logo} height={125} width={100} />
                                <br /> <br />
                                <h1 className="display-5 text-primary text-left">Prudent Student</h1>

                                <p className="lead text-left">Keep track of your students, set goals, and create metrics for improvement.</p>
                                <hr className="my-4 text-left" />
                                {/* <p className="text-left">It uses utility classes for typography and spacing to space content out within the larger container.</p> */}
                                <p className="lead text-left">
                                    <Link className="btn btn-primary bg-primary btn-lg" to="/signup" role="button">Sign Up</Link>
                                </p>
                            </div>
                        </div>
                    )}
            </div>
        );
    }
}

export default Home;