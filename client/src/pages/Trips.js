import React, { Component } from "react";
import axios from "axios";
// import TextInput from 'react-autocomplete-input';
import Select from "react-select";
import { ToastContainer, toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';

toast.configure();
class Trips extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventName: "",
            eventId: "",
            payerName: "",
            totalAmountPaid: 0,
            participantsOptions: [],
            participantOptionsPair: [],
            participants: [],
            noSelectedValue: { label: "", key: "" },
            toDashboard: false,
            message: "",
            show: false
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

    handleSubmit = currentUser => event => {
        event.preventDefault();
        console.log("in here");
        const eventToInsert = {
            userId: currentUser,
            payerId: this.state.payerName,
            amount: this.state.totalAmountPaid,
            eventName: this.state.eventName,
            paid: true,
            usersAttended: this.state.participants
        };
        console.log(eventToInsert);
        axios
            .post("/user/newEvent", eventToInsert)
            .then(response => {
                console.log(response);
                this.setState({
                    message: "Successfully updated",
                    toDashboard: true,
                    show: true
                });
                this.notify(this.state.eventName + " has been successfully added.");
                this.props.history.push('/')
                // this.resetAllState();
            })
            .catch(err => {
                this.setState({
                    message: err
                });
                this.notify(this.state.eventName + " has been successfully added.");
            });
    };

    isParticipantsArrayEmpty = () => {
        let returnBool = true;
        this.participant.forEach(element => {
            if (element === "") {
                returnBool = false;
                return;
            }
        });
        return returnBool;
    };

    isParticipantsArrayEmpty = () => {
        let returnBool = true;
        this.participant.forEach(element => {
            if (element === "") {
                returnBool = false;
                return;
            }
        });
        return returnBool;
    };

    handleChangeEventInput = event => {
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        this.setState({
            eventName: value
        });
    };
    handleChangePayerNameInput = event => {
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        this.setState({
            payerName: value
        });
    };

    handleChangeTotalAmount = event => {
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        this.setState({
            totalAmountPaid: value
        });
        console.log(this.state.totalAmountPaid);
    };

    handleSelectChange = selectedOption => {
        this.setState({ participants: selectedOption });
    };

    handlepayerSelectChange = selectedOption => {
        console.log(selectedOption.label);
        this.setState({ payerName: selectedOption.label });
    };

    handleChangeEventInput = event => {
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        this.setState({
            eventName: value
        });
    };
    handleChangePayerNameInput = event => {
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        this.setState({
            payerName: value
        });
    };

    componentDidMount() {
        this.getAllExistingUsers();
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
                                <label for="eventtName">Name</label>
                                <textarea

                                    className="form-control mb-3"
                                    value={this.state.eventName}
                                    id="eventName"
                                    placeholder="Adam"
                                    rows="1"
                                    name="eventName"
                                    onChange={this.handleChangeEventInput}
                                />
                            </div>
                            <div className="form-group  col-lg-2">
                                <label for="payerFirstName">Math</label>
                                <input
                                    // name="payer"
                                    className="form-control mb-3"
                                    // value={this.state.eventName}
                                    // id="eventName"
                                    placeholder=""
                                    rows="1"
                                    // name="eventName"
                                    // onChange={this.handleChangeEventInput}
                                    // defaultValue={[
                                    //     this.state.participantsOptions[2],
                                    //     this.state.participantsOptions[1]
                                    // ]}
                                    // options={this.state.participantsOptions}
                                    // className="basic-multi-select"
                                    // classNamePrefix="select"
                                    onChange={this.handlepayerSelectChange}
                                />
                            </div>
                            <div className="form-group col-lg-2">
                                <label for="amount">History</label>

                                <input
                                    type="text"
                                    // value={this.state.totalAmountPaid}
                                    className="form-control mb-3"
                                    name="totalAmountPaid"
                                    onChange={this.handleChangeTotalAmount}
                                />
                            </div>
                            <div className="form-group col-lg-2">
                                <label for="payerFirstName">Science</label>

                                <input
                                    // defaultValue={[
                                    //     this.state.participantsOptions[2],
                                    //     this.state.participantsOptions[1]
                                    // ]}
                                    // isMulti
                                    type="text"
                                    name="participantsList"
                                    // options={this.state.participantsOptions}
                                    className="form-control mb-3"
                                    // classNamePrefix="select"
                                    onChange={this.handleSelectChange}
                                    placeholder=""
                                />
                            </div>
                            <div className="form-group col-lg-2">
                                <label for="amount">English</label>


                                <input
                                    type="text"
                                    // value={this.state.totalAmountPaid}
                                    className="form-control mb-3"
                                    name="totalAmountPaid"
                                    onChange={this.handleChangeTotalAmount}
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

// export default Trips;
export default withRouter(Trips)