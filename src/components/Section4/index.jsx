import React from "react";
import PropTypes from "prop-types";

Section4.propTypes = {};

function Section4(props) {
  const students = [
    {
      id: 1,
      name: "Jame",
      score: 9,
    },
    {
      id: 2,
      name: "Davis",
      score: 6,
    },
    {
      id: 3,
      name: "Davis",
      score: 7.5,
    },
    {
      id: 4,
      name: "Erik",
      score: 10,
    },
  ];
  const newStudents = students;
  newStudents
    .sort((s1, s2) => s1.score - s2.score)
    .forEach((student) => (student.score = Math.min(10, student.score + 0.5)));

  return (
    <div>
      <p style={{ fontWeight: "600", marginBottom: "20px" }}>Section 4</p>
      <p>students[0].score = 6.5 vì newStudents là một mảng copy nhưng nó vẫn tác động lên mảng students.</p>
      <p>Ở dòng sort sắp xếp score từ bé đến lớn nên students[0].score là 6</p>
      <p>Ở dòng forEach Math.min() sẽ so sánh 10 với student.score và sẽ gán student.score bằng giá trị bé hơn + với 0.5</p>
      <p>Nên cuối cùng giá trị của students[0].score là 6.5</p>
    </div>
  );
}

export default Section4;
