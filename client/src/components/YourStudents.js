import React, { Component } from "react";
import Individualcard from "../components/individualCard";
import axios from "axios";
import { Table } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';
import AddStudent from "./AddStudent";
import data from "./students.json";

const styles = {
    oweHeader: {
        backgroundColor: "#4C7300"
    },
    oweHeader2: {
        backgroundColor: "#4C7300"
    }
};

class YourStudents extends Component {
    state = {
        data: [],
        name: '',
        science: '',
        math: '',
        english: '',
        history: ''
    };

    componentDidMount() {
        this.getNewEvent(this.props.username);
    }

    componentWillReceiveProps(props) {
        this.getNewEvent(props.username);
    }

    getNewEvent(username) {
        // console.log(this.props.username);

        Promise.all([
            axios.get("/user/findOwedByUserId/" + username),
            axios.get("/user/findYouOwedByUserId/" + username)
        ]).then(resultArray => {
            this.setState({
                ...this.state,
                data: resultArray[0].data,
                name: resultArray[1].data,

            });
        });
    }


    handleClick = (username, name, math, history, science, english) => {
        console.log("click handling! ", name, math, history, science, english);

        const eventToUpdate = {
            userId: username,
            name: name,
            science: science,
            math: math,
            english: english,
            history: history,

        };



        console.log(eventToUpdate);
        axios
            .post("/user/pay", eventToUpdate)
            .then(response => {
                console.log("there goes payment!");
                this.notify(history + "has been added.");
                this.props.history.push("/individualcard");
            })
            .catch(err => console.log(err));
    };

    notify = message => {
        toast(message);
    };


    render() {
        return (
            <div>
                <h4 className="text-info text-center">Your Students:</h4>
                {/* {console.log(this.state)} */}


                <AddStudent></AddStudent>
                <br />

                <div className="row">
                    <div className="col-md-12 mx-auto">
                        <div className="card" style={styles.oweHeader}>
                            <p className="lead pl-3 text-white align-mnamedle pt-3">
                                Your Students
                            </p>
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
                                <tbody> {
                                    this.state.data.map(element => {
                                        return (
                                            <Individualcard
                                                onClick={this.handleClick}
                                                color="danger"
                                                name={element.name}
                                                math={element.math}
                                                history={element.history}
                                                science={element.science}
                                                english={element.english } />
                                        )



                                    }
                                    )}

                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default withRouter(YourStudents);
