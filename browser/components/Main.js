import React, { Component } from "react";
import axios from "axios";
import StudentList from "./StudentList";
import SingleStudent from "./SingleStudent";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      selectedStudent: {},
    };
    this.selectStudent = this.selectStudent.bind(this);
  }

  componentDidMount() {
    this.getStudents();
  }

  async getStudents() {
    console.log("fetching");
    try {
      const { data } = await axios.get("/student");
      this.setState({ students: data });
    } catch (err) {
      console.error(err);
    }
  }

  //we want to update
  selectStudent(student) {
    return this.setState({ selectedStudent: student });
  }

  render() {
    return (
      <div>
        <h1>Students</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Tests</th>
            </tr>
          </thead>
          {/* we added attribute "students" as a prop in StudentList which references this.state.students */}
          <StudentList
            students={this.state.students}
            selectStudent={this.selectStudent}
          />
          {/* we gave StudentList access to the function selectStudent */}
        </table>
        <div>
          {this.state.selectedStudent.id ? (
            <SingleStudent student={this.state.selectedStudent} />
          ) : null}
        </div>
      </div>
    );
  }
}
