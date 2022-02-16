import React from 'react'

export default class FirstLesson extends React.Component{
    constructor(props){
        super()
    }
  

    render(){
        return(
        <div className='section1'>
     
      <div className='forimg'><img src="img/3.png" alt="imig" /></div>
      <div className='forimg'><img src="img/2.jpg" alt="imig" /></div>
      <div className='forimg'><img src="./img/2.jpg" alt="imig" /></div>
    
     
        
        </div> 
        )
    }
}