import React, { useState } from "react";
import './accordion.css';
import Iconstar from "../assets/styles/icon-star"
import Iconplus from "../assets/styles/icon-plus";
import Iconminus from "../assets/styles/icon-minus";


function Accordion() {
  const [selected, setSelected] = useState(0);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  return (

    <div className="accordion" >
      <div className="head"><Iconstar /> <h1>FAQs</h1></div>
      {data.map((item, i, arr) => (
        <>
        <div className="item">
          <div className="title" onClick={() => toggle(i)}>
            <h3>{item.question}</h3>
            <span>{selected === i ? <Iconminus /> : <Iconplus />}</span>
          </div>
          <div className={selected === i ? 'content show' : 'content'}>
          <br />
          <p>{item.answer}</p></div>
        </div>
         {arr.length - 1 !== i && <hr /> }
  
        </>
        
      ))}


    </div>
  )
}



const data = [
  {
    question: 'What is Frontend Mentor, and how will it help me?',
    answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building"
  },
  {
    question: 'Is Frontend Mentor free?',
    answer: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
  },
  {
    question: 'Can I use Frontend Mentor projects in my portfolio?',
    answer: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers"
  },
  {
  question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
  answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members"
  }
]
export default Accordion;


