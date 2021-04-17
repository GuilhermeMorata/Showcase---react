import'../css/imgtext.css';

import model from '../img/suportimg.png';


function Imgtext(){
    return(
      <div className='imgcontent'>
        <img className='imgpure' alt='oi' src={model}/> 
        <span className='imgtext'>
        <h1>SUPPORT</h1><br/>
        yourdream has 24-hour support,
        to help you with any questions about the platform or difficulties,
        prioritizing your time for your dream
        </span>
      </div>
    )
}

export default Imgtext;