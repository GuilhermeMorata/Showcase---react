import'../css/contant.css';

import {MdEmail} from 'react-icons/md'
import { useState } from 'react';

function Contant(){
    const [ename ,setname]=useState('anonimo');
    const [esubject ,setsubject]=useState('contract');
    const [etext ,settext]=useState('no text');

    return(
    <div className="contantbox">
        <div className='contantintro'>
            <h1>Contact Us</h1>
            <p>Swing by for a cup of coffee, or leave us a message:</p>
        </div>
        <div className="contemail">
            <MdEmail className='iconemail'></MdEmail>
            <form className="contantform">
                <label for="fname">Name</label>
                <input type="text" onChange={e=>setname(e.target.value)} placeholder="Your name.."/>
                <label>subject</label>
                <input type="text" onChange={e=>setsubject(e.target.value)}  placeholder="subject.."/>
                <label>text</label>
                <textarea onChange={e=>settext(e.target.value)}  placeholder="Write something.." ></textarea>
                <a href={`mailto:name@rapidtables.com?subject=${esubject}&body=my%20name%20is%20${ename}%20%20%20,${etext}`}>Send mail</a>
            </form>
        </div>
    </div>
    )
}

export default Contant