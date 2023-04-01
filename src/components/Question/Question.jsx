import React from "react";
import "./Question.css";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
const Question = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
      <div className="">
          <Fragment>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          Difference between Props and State?
        </AccordionHeader>
        <AccordionBody>
          <p>
            Props allow you to pass data from one component to other components
            as an argument
            <br />
            State holds information about the components.
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          How does the useState hook work?
        </AccordionHeader>
        <AccordionBody>
          <p>
            The useState hook is a special function that takes the initial state
            as an argument and returns an array of two entries. UseState
            encapsulate only singular value from the state, for multiple state
            need to have useState calls.
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          What is the practical use of useEffect?
        </AccordionHeader>
        <AccordionBody>
          <p>
            1.Running once on mount: fetch API data. Running on state change{" "}
            <br />
            2.validating input field. Running on state change: live filtering.{" "}
            <br />
            3.Running on state change: trigger animation on new array value.{" "}
            <br />
            4.Running on props change: update paragraph list on fetched API data
            update.
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)}>
          How the react-scripts start process works?
        </AccordionHeader>
        <AccordionBody>
          <p>
            1.Set the build environment into development for Node and Babel.{" "}
            <br />
            2.Ensure environment variables are read for the build process.{" "}
            <br />
            3.Verify the packages installed in your project are not outdated.{" "}
            <br />
            4.Check whether the code is in TypeScript or not.
          </p>
        </AccordionBody>
      </Accordion>
    </Fragment>
    </div>
  );
};

export default Question;
