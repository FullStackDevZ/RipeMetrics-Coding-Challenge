import React, { Component } from "react";
import axios from "axios";
// import TextInput from 'react-autocomplete-input';
import Select from "react-select";
import { ToastContainer, toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';

toast.configure();
class AddStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            math: "",
            history: "",
            science: "",
            english: "",
        };
    }

    notify = (message) => {
        toast(message);
    }
    handleChange = (e) => {
        /*
          Because we named the inputs to match their
          corresponding values in state, it's
          super easy to update the state
        */
        this.setState({ [e.target.name]: e.target.value });
      }

      handleSubmit = currentUser => event => {
        event.preventDefault();
        // get our form data out of state
        const studentData = {
            userId: currentUser,
            name: this.state.name,
            math: this.state.math,
            history: this.state.history,
            science: this.state.science,
            english: this.state.english
        };
    

        axios.post('/user/newEvent', studentData)
          .then((result) => {
            //access the results here....
          });
      }

    render() {
        const currentUser = this.props.currentUser;
        return (
            <div className="col-xs-12 bg-light p-3 rounded col-lg-6 mx-auto text-center">
                <form>
                    <fieldset>
                        <legend className="text-center">Add a New Student</legend>
                        <div className="row">
                            <div className="form-group col-lg-2">
                                <label for="name">Name</label>
                                <input

                                    className="form-control mb-3"
                                    value={this.state.name}
                                    id="name"
                                    placeholder="Adam"
                                    rows="1"
                                    name="name"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group  col-lg-2">
                                <label for="math">Math</label>
                                <input
                                    name="math"
                                    className="form-control mb-3"
                                    value={this.state.math}
                                    id="math"
                                    placeholder=""
                                    rows="1"
                            
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group col-lg-2">
                                <label for="history">History</label>

                                <input
                                    type="text"
                                    value={this.state.history}
                                    className="form-control mb-3"
                                    name="history"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group col-lg-2">
                                <label for="science">Science</label>

                                <input
                                    type="text"
                                    value={this.state.science}
                                    className="form-control mb-3"
                                    name="science"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group col-lg-2">
                                <label for="english">English</label>


                                <input
                                    type="text"
                                    value={this.state.english}
                                    className="form-control mb-3"
                                    name="english"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group col-lg-2">
                                <button
                                    type="submit"
                                    className="btn btn-primary float-right mt-3"
                                    onClick={this.handleSubmit(currentUser)}
                                >
                                    +Student
                        </button>
                            </div>
                        </div>
                    </fieldset>
                </form>

                {/* <div>
                    <h4>{this.state.message}</h4>
                </div> */}


            </div>
        );
    }
}

export default AddStudent;
// export default withRouter(AddStudent)