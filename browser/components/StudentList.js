import React from "react";

export default function StudentList(props) {
  return (
    //return has to have a parent element before the mapping occurs
    <tbody>
      {/* this.state is no longer available here therefore we need to pass it in as props. First, we add the arguments props in the functional component. Second, we add the props name as an attribute in Main.js*/}
      {props.students.map((student) => {
        return (
          <tr key={student.id}>
            <td>{student.fullName}</td>
            {/* We added an event listener to  */}
            <td onClick={() => props.selectStudent(student)}>Details</td>
          </tr>
        );
      })}
    </tbody>
  );
}
