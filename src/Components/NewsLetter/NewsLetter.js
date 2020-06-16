import React, { useState } from 'react'
import StyledInput from '../StyledInput/StyledInput'
import "./NewsLetter.css"
import Paragraph from '../Paragraph/Paragraph'
import Button from '../Button/Button'
import Heading from '../Heading/Heading'
const NewsLetter = () => {
    var [inputValue,setValue] = useState("")
   
    return (
        <div className="newsletter">
            <div className="text-part">
               <Heading fontSize="25">
               Getshade is here <br/> for creative pros to carry, build & hack life better
               </Heading>
            </div>
  
        <div className="form-part">
      <form className="input-xs" >
     
                 <div className="">
                 <div className="xs1">
                
                   <StyledInput
                       required
                       value={inputValue}
                        placeholder="Enter Email" 
                        type="email"
                        onChange={(e)=> setValue(e.target.value)}
                        />
                  

                   </div>
                   <div className="xs2 ">
                    <Button value="SUBSCRIBE &rarr;" colorScheme="black" 
                    style={{color:"black",paddingBottom:"1rem",border:"none",fontWeight:"600",letterSpacing:"3px"}}
                     backgroundColor="transparent"/>
                   </div>
                 </div>
              
      </form>
            </div>
    
        </div>
    )
}

export default NewsLetter
