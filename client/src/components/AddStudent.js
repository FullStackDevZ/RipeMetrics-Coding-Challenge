import React, { Component } from "react";
import axios from "axios";
// import TextInput from 'react-autocomplete-input';
import Select from "react-select";
import { ToastContainer, toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';
// import { Consumer } from '../../Context';
import uuid from 'uuid';

toast.configure();
class AddStudent extends Component {
    constructor(props) {
        super(props);
    this.state = {
        name: '',
        math: '',
        history: '',
        science: '',
        english: ''
    };
    
    }

    notify = (message) => {
        toast(message);
    }

    getAllExistingUsers = () => {
        axios.get("/user/allUsers/").then(response => {
            let tempArray = [];
            // let tempArray = response.data
            response.data.forEach(element => {
                let obj = {
                    value: element._id,
                    label: element.username
                };
                tempArray.push(obj);
            });

            this.setState({
                participantsOptions: tempArray
            });
        });
    };

    handleChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value.trim().toUpperCase()
        });
    }

    handleSubmit = currentStudent => event => {
        event.preventDefault();
        // get our form data out of state
        const studentData = {
            userId: currentStudent,
         
                name: this.state.name,
                math: this.state.math,
                history: this.state.history,
                science: this.state.science,
                english: this.state.english
            

        };

        console.log(this.state.math);
        axios
            .post("/user/newEvent", studentData)
            .then(response => {
                console.log(response);
                this.setState({
                    message: "Successfully updated",
                    toDashboard: true,
                    show: true
                });
                this.notify(this.state.name + " has been successfully added." + this.state.math);
                this.props.history.push('/')
                // this.resetAllState();
            })
            .catch(err => {
                this.setState({
                    message: err
                });
                this.notify(this.state.name + " has been successfully added.");
            });
    }

    handleChangeMathGrade = event => {
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        this.setState({
            math: value
        });
    };

    handleChangeScienceGrade = event => {
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        this.setState({
            science: value
        });
    };

    handleChangeEnglishGrade = event => {
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        this.setState({
            english: value
        });
    };

    handleChangeHistoryGrade = event => {
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        this.setState({
            history: value
        });
    };

    handleChangeNameInput = event => {
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        this.setState({
            name: value
        });
    };

    componentDidMount() {
        this.getAllExistingUsers();
    }

    render() {
        const currentStudent = this.props.currentStudent;
        return (
            <div className="col-xs-12 bg-light p-3 rounded col-lg-6 mx-auto text-center">
                <form>
                    <fieldset>
                        <legend className="text-center">Add a New Student</legend>
                        <div className="row">
                            <div className="form-group col-lg-2">
                                <label for="name">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control mb-3"
                                    value={this.state.name}
                                    id="name"
                                    rows="1"

                                    onChange={this.handleChangeNameInput}
                                />
                            </div>
                            <div className="form-group  col-lg-2">
                                <label for="math">Math</label>
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    name="math"
                                    value={this.state.math}
                                    id="math"
                                    rows="1"

                                    onChange={this.handleChangeMathGrade}
                                />
                            </div>
                            <div className="form-group col-lg-2">
                                <label for="history">History</label>

                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    name="history"
                                    value={this.state.history}

                                    onChange={this.handleChangeHistoryGrade}
                                />
                            </div>
                            <div className="form-group col-lg-2">
                                <label for="science">Science</label>

                                <input
                                    type="text"

                                    className="form-control mb-3"
                                    name="science"
                                    value={this.state.science}
                                    onChange={this.handleChangeScienceGrade}
                                />
                            </div>
                            <div className="form-group col-lg-2">
                                <label for="english">English</label>


                                <input
                                    type="text"

                                    className="form-control mb-3"
                                    name="english"
                                    value={this.state.english}
                                    onChange={this.handleChangeEnglishGrade}
                                />
                            </div>
                            <div className="form-group col-lg-2">
                                <button
                                    type="submit"
                                    className="btn btn-primary float-right mt-3"
                                    onClick={this.handleSubmit(currentStudent)}
                                >
                                    +Student
                        </button>
                            </div>
                        </div>
                    </fieldset>
                </form>


            </div>
        );
    }
}

export default AddStudent;
// export default withRouter(AddStudent)