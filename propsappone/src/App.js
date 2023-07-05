import React from "react";
const App = () => {
  const para = {
    title : 'React',
    description : 'Component library'
  };
  return (
    <div><Welcome text = {para}/></div>
  );
}

const Welcome = (props) => {
  return (
    <div>
      <Paragraph paragraph = {`The framework ${props.text.title} is my ${props.text.description}`} />
    </div>
  )
}

const Paragraph = ({paragraph}) => {
  return (
    <div>
      <h1>{paragraph}</h1>
      
      </div>
  )
}
export default App;
