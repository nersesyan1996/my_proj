import React from 'react'
import Section1 from './Section1.jsx'

export default class FirstLesson extends React.Component{
    constructor(props){
        super()
    }
  

    render(){
        return(
               <div className="sec">
          <section className="section">
        <Section1/>
          </section>
          <section className="section">
            <p>
              Lorem
              dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
              Lorem
              ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddLorem
              ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddLorem
              ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddLorem
              dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            </p>
          </section>
      
     
        
        </div> 
        )
    }
}