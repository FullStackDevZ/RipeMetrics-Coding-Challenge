import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios"
import logo from "../components/logo.png"
import { returnStatement } from "@babel/types";
// import YourStudents from "../components/YourStudents"
import IndividualCard from "../components/individualCard";
import { Table } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';
import AddStudent from "../components/AddStudent";
import data from "../components/students.json";

const styles = {
    oweHeader: {
        backgroundColor: "#4C7300"
    },
    oweHeader2: {
        backgroundColor: "#4C7300"
    }
};


class Home extends Component {
    state = {
        data,
        name: '',
        science: '',
        math: '',
        english: '',
        history: ''
    }


    componentDidMount() {
        console.log(data);
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

        // Promise.all([
        //     axios.get("/user/findOwedByUserId/" + username),
        //     axios.get("/user/findYouOwedByUserId/" + username)
        // ])
        //     .then(resultArray => {
        //         this.setState({
        //             ...this.state,
        //             name: resultArray[0].data,
        //             science: resultArray[1].data,
        //             // math: resultArray[2].data,
        //             // english: resultArray[3].data,
        //             // history: resultArray[4].data
        //         })
        //     });

    }


    // handleClick = (name, math, history, science, english) => {
    //     console.log("click handling! ", name, math, history, science, english);

    //     const eventToUpdate = {
    //         // userId: username,
    //         name: name,
    //         science: science,
    //         math: math,
    //         english: english,
    //         history: history,

    //     };



    //     console.log(eventToUpdate);
    //     axios
    //         .post("/home", eventToUpdate)
    //         .then(response => {
    //             console.log("there goes payment!");
    //             this.notify(history + "has been added.");
    //             this.props.history.push("/home");
    //         })
    //         .catch(err => console.log(err));
    // };

    notify = message => {
        toast(message);
    };
    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })

    }
    getDataFromForm = () => {
        var studentInfo = {
            name: this.state.name,
            math: this.state.math,
            history: this.state.history,
            science: this.state.science,
            english: this.state.english
        }
        data.push(studentInfo);
        this.setState({
            data:data
        })
        console.log(this.state.data);

    }
    handleFormSubmit = e => {
        e.preventDefault();
        this.getDataFromForm();
    }
    

    render() {
        console.log(this.props)
        return (

            <div>

                {this.props.loggedIn ? (

                    <div>
                        <h4 className="text-info text-center">Your Students</h4>
                        {/* {console.log(this.state)} */}


                        <AddStudent
                            handleInputChange = {this.handleInputChange}
                            handleFormSubmit = {this.handleFormSubmit}
                            name={this.state.name}
                            math = {this.state.math}
                            history={this.state.history}
                            science={this.state.science}
                            english={this.state.english}
                        />
                        <br />

                        <div className="row">
                            <div className="col-md-12 mx-auto">
                                <div className="card" style={styles.oweHeader}>
                                   
                                    <table className="table table-hover">
                                        <thead>
                                            <tr className="text-white">
                                                <th scope="col">Name</th>
                                                <th scope="col">Math</th>
                                                <th scope="col">History</th>
                                                <th scope="col">Science</th>
                                                <th scope="col">English</th>
                                                <th scope="col">GPA</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            
                                                    <IndividualCard
                                                        onClick={this.handleFormSubmit}
                                                        name={this.state.name}
                                                        math={this.state.math}
                                                        history={this.state.history}
                                                        science={this.state.science}
                                                        english={this.state.english}
                                                    />
                                            
                                            
                                            
                                            
                                            

                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>

                    </div>


                    // <YourStudents></YourStudents>

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