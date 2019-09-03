// import React, { Component } from "react";
// import axios from "axios";
// // import TextInput from 'react-autocomplete-input';
// import Select from "react-select";
// import { ToastContainer, toast } from 'react-toastify';
// import { withRouter } from 'react-router-dom';
// // import { Consumer } from '../../Context';
// import uuid from 'uuid';

// toast.configure();
// class AddStudent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             student: [{
//                 name: '',
//                 math: '',
//                 history: '',
//                 science: '',
//                 english: '',
//                 gpa: ''
//             }]
//         };

//     }

//     notify = (message) => {
//         toast(message);
//     }

//     getAllExistingUsers = () => {
//         axios.get("/user/allUsers/").then(response => {
//             let tempArray = [];
//             // let tempArray = response.data
//             response.data.forEach(element => {
//                 let obj = {
//                     value: element._id,
//                     label: element.username
//                 };
//                 tempArray.push(obj);
//             });

//             this.setState({
//                 participantsOptions: tempArray
//             });
//         });
//     };

//     handleChange = (e) => {
//         if (["name", "math", "history", "science", "english", "gpa"].includes(e.target.className)) {
//             let student = [...this.state.student]
//             student[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()
//             this.setState({ student }, () => console.log(this.state.student))
//         } else {
//             this.setState({ [e.target.name]: e.target.value.toUpperCase() })
//         }
//     }


//     handleSubmit = (e) => {
//         e.preventDefault();
//         // get our form data out of state
//         // const studentData = {
//         //     userId: currentStudent,

//         //     name: this.state.name,
//         //     math: this.state.math,
//         //     history: this.state.history,
//         //     science: this.state.science,
//         //     english: this.state.english


//         // };

//         // console.log(this.state.math);
//         // axios
//         //     .post("/user/newEvent", student)
//         //     .then(response => {
//         //         console.log(response);
//         //         this.setState({
//         //             message: "Successfully updated",
//         //             toDashboard: true,
//         //             show: true
//         //         });
//         //         this.notify(this.state.student.name + " has been successfully added." + this.state.math);
//         //         this.props.history.push('/')
//         //         // this.resetAllState();
//         //     })
//         //     .catch(err => {
//         //         this.setState({
//         //             message: err
//         //         });
//         //         this.notify(this.state.student.name + " has been successfully added.");
//         //     });
//     }

//     addStudent = (e) => {
//         this.setState((prevState) => ({
//             student: [...prevState.student, { name: "", math: "", history: "", science: "", english: "", gpa: "" }],
//         }));
//     }

//     handleChangeMathGrade = event => {
//         event.preventDefault();
//         const target = event.target;
//         const value = target.value;
//         this.setState({
//             math: value
//         });
//     };

//     handleChangeScienceGrade = event => {
//         event.preventDefault();
//         const target = event.target;
//         const value = target.value;
//         this.setState({
//             science: value
//         });
//     };

//     handleChangeEnglishGrade = event => {
//         event.preventDefault();
//         const target = event.target;
//         const value = target.value;
//         this.setState({
//             english: value
//         });
//     };

//     handleChangeHistoryGrade = event => {
//         event.preventDefault();
//         const target = event.target;
//         const value = target.value;
//         this.setState({
//             history: value
//         });
//     };

//     handleChangeNameInput = event => {
//         event.preventDefault();
//         const target = event.target;
//         const value = target.value;
//         this.setState({
//             name: value
//         });
//     };

//     componentDidMount() {
//         this.getAllExistingUsers();
//     }

//     render() {
//         // const currentStudent = this.props.currentStudent;
//         let { name, math, english, history, science } = this.state
//         return (
//             <div className="col-xs-12 bg-light p-3 rounded col-lg-6 mx-auto text-center">
//                 <form onSubmit={this.handleSubmit} >
//                     <fieldset>
//                         <legend className="text-center">Add a New Student</legend>
//                         <div className="row">
//                             <div className="form-group col-lg-2">
//                                 <label htmlFor="name">Name</label>
//                                 <input
//                                     type="text"
//                                     name="name"
//                                     className="form-control mb-3"
//                                     value={name}
//                                     id="name"
//                                     rows="1"
//                                     onChange={this.handleChange}
//                                 // onChange={this.handleChangeNameInput}
//                                 />
//                             </div>
//                             <div className="form-group  col-lg-2">
//                                 <label htmlFor="math">Math</label>
//                                 <input
//                                     type="text"
//                                     className="form-control mb-3"
//                                     name="math"
//                                     value={math}
//                                     id="math"
//                                     rows="1"
//                                     onChange={this.handleChange}

//                                 // onChange={this.handleChangeMathGrade}
//                                 />
//                             </div>
//                             <div className="form-group col-lg-2">
//                                 <label htmlFor="history">History</label>

//                                 <input
//                                     type="text"
//                                     className="form-control mb-3"
//                                     name="history"
//                                     id="history"
//                                     value={history}
//                                     onChange={this.handleChange}

//                                 // onChange={this.handleChangeHistoryGrade}
//                                 />
//                             </div>
//                             <div className="form-group col-lg-2">
//                                 <label htmlFor="science">Science</label>

//                                 <input
//                                     type="text"

//                                     className="form-control mb-3"
//                                     name="science"
//                                     value={science}
//                                     onChange={this.handleChange}

//                                 // onChange={this.handleChangeScienceGrade}
//                                 />
//                             </div>
//                             <div className="form-group col-lg-2">
//                                 <label for="english">English</label>


//                                 <input
//                                     type="text"

//                                     className="form-control mb-3"
//                                     name="english"
//                                     id="english"
//                                     value={english}
//                                     onChange={this.handleChange}

//                                 // onChange={this.handleChangeEnglishGrade}
//                                 />
//                             </div>
//                             <div className="form-group col-lg-2">
//                                 <button
//                                     type="submit"
//                                     className="btn btn-primary float-right mt-3"
//                                     onClick={this.addStudent}
//                                 >
//                                     +Student
//                         </button>
//                             </div>
//                         </div>
//                     </fieldset>
//                 </form>


//             </div>
//         );
//     }
// }

// export default AddStudent;
// // export default withRouter(AddStudent)
import React from "react";

const AddStudent = props => (
    <div className="col-xs-12 bg-light p-3 rounded col-lg-6 mx-auto text-center">
        <form>
        <div className="row">
            <div className="form-group col-lg-4">
            <label htmlFor="name">Name</label>
                <input
                    className="form-control mb-3"
                    id="name"
                    type="text"
                    value={props.name}
                    placeholder="Name"
                    name="name"
                    onChange={props.handleInputChange}
                    required
                />
            </div>
            <div className="form-group col-lg-2">
            <label htmlFor="name">Math</label>
                <input
                    className="form-control mb-3"
                    id="math"
                    type="text"
                    value={props.math}
                    placeholder="Math"
                    name="math"
                    onChange={props.handleInputChange}
                    required
                />
                </div>
                <div className="form-group col-lg-2">
                <label htmlFor="name">History</label>
                <input
                    className="form-control mb-3"
                    id="history"
                    type="text"
                    value={props.history}
                    placeholder="History"
                    name="history"
                    onChange={props.handleInputChange}
                    required
                />
                </div>
                <div className="form-group col-lg-2">
                <label htmlFor="name">Science</label>
                <input
                    className="form-control mb-3"
                    id="science"
                    type="text"
                    value={props.science}
                    placeholder="Science"
                    name="science"
                    onChange={props.handleInputChange}
                    required
                />
                </div>
                <div className="form-group col-lg-2">
                <label htmlFor="name">English</label>
                <input
                    className="form-control mb-3"
                    id="english"
                    type="text"
                    value={props.english}
                    placeholder="English"
                    name="english"
                    onChange={props.handleInputChange}
                    required
                />
                </div>
            </div>
            <div className="pull-center">
                <button
                    onClick={props.handleFormSubmit}
                    type="submit"
                    className="btn btn-lg btn-primary"
                >
                    +Student
      </button>
            </div>
        </form>
    </div>
);

export default AddStudent;
