import React from 'react'
import "./ProductPreview.css"

import { useState } from 'react'
import { useEffect } from 'react'
import { getSiblings } from '../../Utility/Utility'
import useStateWithCallback from 'use-state-with-callback';
const ProductPreview = ({imagesLinks}) => {
var initialTimeout = (link)=>   setTimeout(()=>{
  selectImage({linkType:"org", link})
 
},1000)

var changeTimeout = (link)=>  setTimeout(()=>{
  selectImage({linkType:"org",link})

},500)

  const [loadCheck,setLoadCheck] = useState(true)
  var [selectedImage,selectImage] = useStateWithCallback({},()=>{
  if(selectedImage){
    if(selectedImage.linkType ==="comp"){
      setLoadCheck(true)
    }
    else {
      setLoadCheck(false)
    }
  }
  })
  const [multiPics,setMultiPics]= useState([])
useEffect(()=>{
  if(imagesLinks.length){
    var tempArr = []
    selectImage({linkType:"comp",link:imagesLinks[0].comp_url})
 initialTimeout(imagesLinks[0].org_link)
 
    
    imagesLinks.forEach((linkObj)=>{
      tempArr.push({...linkObj})
    })
    setMultiPics([...tempArr])
  }
  
},[imagesLinks])

useEffect(()=>{
return ()=>{
  clearTimeout(initialTimeout);
  clearTimeout(changeTimeout)
}
},[])


/// link selector
var linkSelector = (e)=>{
  var {name,src}= e.target;
  var item = e.target;
 var siblings =  getSiblings(item);
 item.classList.add('selected-image');
 siblings.forEach((sib)=>{
   sib.classList.remove("selected-image")
 })
  var link = name;
if(link !== selectedImage.link){

  selectImage({linkType:"comp",link:src})
changeTimeout(link)
}
}
var bool = true;
return (
<React.Fragment>
  <div className="product-preview flex-center">
  <img src={selectedImage.link} className={(loadCheck) && "blur-image"}/> 
 
    
  </div>
  <div className="multi-pics">
  {
    multiPics.map((mp)=> {
      if(bool){
        bool = false;
        return (
          <img src={mp.comp_url} 
          className="selected-image"
          key={mp.id}  
          name={mp.org_link} 
           onClick={linkSelector}/>
        )
      }
      else{
        return(
          <img src={mp.comp_url} 
          
          key={mp.id}  
          name={mp.org_link} 
          onClick={linkSelector}/>
          )
        }
    
    })
  }
  
  </div>
  </React.Fragment>


        
    )
}

export default ProductPreview
