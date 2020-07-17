import React from 'react'
import SimpleInput from '../SiimpleInput/SimpleInput'
import Button from '../Button/Button'
import { useState } from 'react'

const QVquantity = () => {
    
    const [quantity,setQuantity] = useState()
    return (
      <React.Fragment>
             <SimpleInput
          width="7rem"
          type="number"
          placeholder=""
          label="Quantity"
          value={quantity}
          min="1"
          onChange={(e)=> setQuantity(e.target.value)}
        />
        <Button
          value="ADD TO CART"
          colorScheme="black"
          style={{ width: "100%", height: "5rem" }}
        />
      </React.Fragment>
    )
}

export default QVquantity
