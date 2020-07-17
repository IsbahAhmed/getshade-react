import React from 'react'

import Section from '../../Components/Section/Section'
import Heading from '../../Components/Heading/Heading'
import Paragraph from '../../Components/Paragraph/Paragraph'

import "./Home.css";


import TopSeller from '../../Components/TopSeller/TopSeller'
import Button from '../../Components/Button/Button'
import NewProducts from '../../Components/NewProducts/NewProducts'
import Collections from '../../Components/Collections/Collections'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'
import {connect} from "react-redux"
import {fetchCatagories} from "../../Redux/catagoriesReducer/catagoriesActions"
import CatagoriesList from '../../Components/CatagoriesList/CatagoriesList'

const Home = ({fetchCatagories}) => {

  React.useEffect(()=>{
    fetchCatagories()
  },[])

    return (
   <React.Fragment>
      <Section >
      <div className="flex-center" style={{height:"50vw",background:"pink"}}>
      <h1>Slider</h1>
      </div>
  
    </Section>
      <Section>
   <div className="catagories">
  <div className="cat-heading">
    {/* <div class="line"> </div> */}
    <h4>catagories</h4>
  </div> 
  <div className="cats">
  <CatagoriesList/>
  </div>
</div>

      </Section>

      <TopSeller/>
      <Section>
        <div className="extra-section">
        <div className="content">
          <Heading fontSize="30">
            THE CLASSIC MEN ISSUE
          </Heading>
          <Paragraph fontWeight="500" fontSize="16">
            Our sustainable comintment is reflected in everything we do.
            <br/> Our way of reinviting materials and a new approch to.
          </Paragraph>
          <Button value="SHOP NOW" style={{letterSpacing:"2px",padding:"1.3rem 3rem"}} 
          colorScheme="white" backgroundColor="transparent"/>
        </div>
        </div>
      </Section>
      <NewProducts/>
      <Collections/>
      <NewsLetter/>
   </React.Fragment>
    );
}
var actions = {
  fetchCatagories
}
export default connect(null,actions)(Home)
