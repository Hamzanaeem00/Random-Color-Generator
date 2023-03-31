import React, { useState } from "react";
import Values from "values.js";
import ColorsList from "./ColorsList";


const Colour = () => {
  const [colour, setColour] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  console.log(list );

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
        
        let colours = new Values(colour).all(10)
        setList(colours)
    } catch (error) {
        setError(true)
        console.log('error==>', error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Colour Generator</h3>
        <form  onSubmit={handleSubmit}>
          <input type='text' value={colour} onChange={(e) => setColour(e.target.value)}  placeholder='#f15025'
          className={`${error? 'error': null}`}/>
        <button type="submit" className="btn">Submit</button>
        </form>
      </section>
        <section className="colors">
            {
                list?.map((colour, index)=>{
                 return <ColorsList key={index} {...colour} index={index} />
                })
            }
        </section>
    </>
  );
};

export default Colour;
