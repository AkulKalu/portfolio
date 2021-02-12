import React, {useEffect, useState} from 'react';
import classes from './Album.module.css';
import {animateOnScroll} from '../../Toolkit/functions';


import {projectDescription} from '../../Content/Text/text';




const Album = props => {
    const [state, setState] = useState({scrolledTo: false})
    useEffect(()=> {
        animateOnScroll(props.project, setState, window.innerHeight * 1.35);

        const pics = document.querySelectorAll(`#${props.project} [data-pic]`);
        let prev = 0;
        let curr = 1;
        if(state.scrolledTo) {
            const switchPic = () => {
                pics[prev].style.opacity = '0';
                pics[curr].style.opacity = '1';
                 
                [prev, curr] = [curr,  curr === pics.length - 1 ? 0 : curr + 1]    
                setTimeout( switchPic, 5000);  
            }
            setTimeout( switchPic, 3000);
        }
       
    }, [state.scrolledTo]) 

   
    let imgLinks = projectDescription[props.project].images;
 
    const photos = imgLinks.map(( link, i )=> {
        const show = i === 0 ? {opacity: '1'} : null;
      
        return  <img key={`${props.project}${i}`} src={ link} data-pic style={show} className={classes.Pic} alt="asd"/>
    } )
    const showAlbum = state.scrolledTo ? {
        opacity: '1'
    } : null;
    return(
        <div style={showAlbum} id={props.project} className={classes.AlbumWrap}>
            {photos}
            
        </div>
    )
}



export default Album;
