import axios from "axios";
import React, { Component } from "react";

//1. this.state will render first
export default class Main extends Component {
  //props allows you to have components in main that are located in other child components
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  //we need a way to fetch our students from our db routes using axios
  //2. this is how we mount the data we retrieved from the axios call to this.state and create the virtual DOM
  async componentDidMount() {
    console.log("fetching");
    try {
      const students = await axios.get("/student");
      //take the student data and add it to our state (setstate)
      this.setState({ students: students.data });
    } catch (error) {
      console.log(error);
    }
  }
  //3. then once mounted, it rerenders

  //actual code that will render the information
  render() {
    return (
      <div>
        <table>
          <tr>
            <th></th>
          </tr>
          <tr>
            {this.state.students.map((student) => (
              <tr>
                <td>{student.fullName}</td>
              </tr>
            ))}
          </tr>
        </table>
      </div>
    );
  }
}
