import React from 'react'

import Section from '../../Components/Section/Section'
import Heading from '../../Components/Heading/Heading'
import Paragraph from '../../Components/Paragraph/Paragraph'
import SideCart from '../../Components/SideCart/SideCart'
import "./Home.css"
import CatagoryBox from '../../Components/CatagoryBox/CatagoryBox'
import TopSeller from '../../Components/TopSeller/TopSeller'
const Home = () => {
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
      <CatagoryBox catName={"Watches"}/>
      <CatagoryBox/>
  
  </div>
</div>

      </Section>
      <TopSeller/>
   </React.Fragment>
    );
}

export default Home
