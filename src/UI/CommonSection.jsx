import React from 'react'
import {Container} from 'reactstrap'
import  '../styles/common-section.css'

const CommonSection = ({title}) => {
  return (
    <div>
      return <section className="common_section">
       <Container className="text-center">
        <h1>{title}</h1>
       </Container>
      </section>
    </div>
  )
}

export default CommonSection
