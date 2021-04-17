import '../css/header.css'
import { useState } from 'react';

//icons
import {FaDraftingCompass} from 'react-icons/fa';


//slide de fotos imports
import foto1 from '../img/sid1.jpg';
import foto2 from '../img/sid2.jpg';
import foto3 from '../img/sid3.jpg';
import foto4 from '../img/sid4.jpg';

let cont = 0;
//component 
function Header(){
    //ficar trocado as fotos...
    const exchangeimg =()=>{
        const imgs = [foto1,foto2,foto3,foto4]
        setTimeout(() => {setfoto(imgs[cont])}, 8000);
        cont++
        if(cont===4){
            cont=0
        }
    }
    //rolagem do menu
    window.addEventListener('scroll',scrollmenu)
    function scrollmenu(){
        if(window.scrollY < 80){
            setmenu(true)
        }
        if(window.scrollY > 80){
            setmenu(false)
        }
    }

    //stats da pagina...
    const [foto,setfoto]=useState(foto1)
    const [menu, setmenu]=useState(true)
    
    return(
        <div className='header'>
            <div className={menu ? 'navmenu':'navmenuclose'}>
                <div className='titlemenu'>
                     <FaDraftingCompass className='iconmenu'/><h1>YourDream</h1>
                </div>
                <div className='loginmenu'>
                    <button onClick={()=>window.location.assign('/login')}>Login</button>
                    <button onClick={()=>window.location.assign('/register')}>Register</button>
                </div>
                
            </div>
        <span className='textslid'>- Create your Dreams <br/>  with us- <strong>More 30 costum tools!</strong> </span>
        <img src={foto} alt='pic' className='imgmenu' onLoad={exchangeimg}/>
        
        </div>
    )
}

export default Header;