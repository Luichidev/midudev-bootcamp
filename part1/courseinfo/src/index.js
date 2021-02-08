import React from "react";
import ReactDOM from "react-dom";

const Title = ({ course }) => <h1>{course}</h1>;
const Description = ({ part, exercises }) => {
  return (
    <p>
      {part} &nbsp;
      {exercises}
    </p>
  );
};

const TotalCourses = ({ exe1, exe2, exe3 }) => exe1 + exe2 + exe3;

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Title course={course} />
      <Description part={part1} exercises={exercises1} />
      <Description part={part2} exercises={exercises2} />
      <Description part={part3} exercises={exercises3} />
      <p>
        Number of exercises &nbsp;
        <TotalCourses exe1={exercises1} exe2={exercises2} exe3={exercises3} />
      </p>

      {/* <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
