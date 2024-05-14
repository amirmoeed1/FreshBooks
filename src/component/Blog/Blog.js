import React from 'react';
import Multicard from './Multicard/Multicard';
import Ebook from './ebook/Ebook';
import Casestudies from './Casestudy/Casestudies';
import Productnews from './Productnews/Productnews';
import Accountingpartners from './Accountingpartners/Accountingpartners';


const Blog = () => {
  return (
    <div>
        <Multicard/>
       <Ebook> </Ebook>
     <Casestudies></Casestudies>
      <Productnews></Productnews>
      <Accountingpartners></Accountingpartners>
    </div>
  )
}

export default Blog
