import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.displayData = [];

    this.state = {
      name: "",
      department: "",
      rating: "",
      showData: this.displayData,
    };

    this.description = this.description.bind(this);
    this.setName = this.setName.bind(this);
    this.setDepartment = this.setDepartment.bind(this);
    this.setRating = this.setRating.bind(this);
  }

  description() {
    this.displayData.push(
      <div className="display_data">
        Name: {this.state.name} | Department: {this.state.department} | Rating:{" "}
        {this.state.rating}
      </div>
    );

    this.setState({
      name: "",
      department: "",
      rating: "",
      showData: this.displayData,
    });
  }

  setName(e) {
    let val = e.target.value;
    this.setState({
      name: val,
    });
  }

  setDepartment(e) {
    let val = e.target.value;
    this.setState({
      department: val,
    });
  }

  setRating(e) {
    let val = e.target.value;
    this.setState({
      rating: val,
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <h1>EMPLOYEE FEEDBACK FORM</h1>
        <form className="feed_form" onSubmit={this.onSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.setName} />
          </label>
          <label>
            Department:
            <input type="text" value={this.state.department} onChange={this.setDepartment} />
          </label>
          <label>
            Rating:
            <input type="text" value={this.state.rating} onChange={this.setRating} />
          </label><br/>
          <button onClick={this.description}>Submit</button>
        </form>
        <div id="formData">{this.displayData}</div>
      </div>
    );
  }
}

export default Form;