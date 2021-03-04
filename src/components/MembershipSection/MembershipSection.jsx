import * as React from "react"
import styles from "./MembershipSection.module.scss"

// Import Section definition

import Section from "../Section/Section"

const MembershipSection = (props) => {
    return (
        <Section className="membership" height="half">
            <h1>{props.name}</h1>
            <p>{props.tag}</p>
        </Section>
    )
  }
  
  export default MembershipSection
  