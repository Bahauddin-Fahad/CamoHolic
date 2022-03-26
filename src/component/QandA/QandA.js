import React from "react";
import { Accordion } from "react-bootstrap";
import "./QandA.css";
const QandA = () => {
  return (
    <div>
      <div className="qna-section container row g-4 mx-auto">
        <h1>QnA Section</h1>
        <div className="col-lg-5 col-md-12">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>How React Works?</Accordion.Header>
              <Accordion.Body className="answers">
                React is a <strong>JavaScript Library</strong> that helps a
                developer to build UI easily. React compiles{" "}
                <strong>JSX</strong> into <strong>HTML</strong> and make a
                virtual DOM which actually is a blueprint of the real DOM where
                it stores all the components or elements. If there is any kind
                of change in the state, <strong>React</strong> creates a new
                virtual DOM and starts to compare it with the previous DOM and
                find the changes by following Diff Algorithm. Then updates the
                changes in the Browser DOM. Finally Reacts Re-render the
                application.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Differences Between Props and State??
              </Accordion.Header>
              <Accordion.Body className="answers">
                <strong>State:</strong> <br />A state is an updatable structure
                used to hold data or information about a component and can
                change over time. State changes can occur in response to user
                actions or system events. It is the heart of the Reaction
                component that determines how the component behaves and how it
                is rendered. It can only be accessed or modified within or
                directly from the component. <br />
                <strong>Props:</strong> <br />
                Props are object containing values of components that can only
                be read. It holds the value of a tag's attributes and functions
                similarly to HTML attributes. It allows data to be sent from one
                component to another. It's comparable to function arguments, and
                it may be supplied to the component in the same manner that
                function arguments can. Because props are immutable, we can't
                change them from the component.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header> How useState Works?</Accordion.Header>
              <Accordion.Body className="answers">
                <strong>useState()</strong> hook allows to add state to a
                functional component. A <strong>useState()</strong> within a
                function component produces a single state which is associated
                with that component. The state of the class is always an object,
                but the state of the hook can be of any type. Each state item
                contains a single value and can be an object, an array, a
                Boolean value, or any other possible type. This is especially
                useful for the status of local components.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="col-lg-5 col-md-12">
          <img
            className="img-fluid"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default QandA;
