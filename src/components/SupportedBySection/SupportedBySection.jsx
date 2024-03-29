import React from "react";
// Import Section definition
import Section from "../Section/Section";
import SiteButton from "../SiteButton";
import styles from "./SupportedBySection.module.scss";

const SupportedBySection = (props) => {
  return (
    <Section className="sponsors" height="half">
      <h2>{props.name}</h2>
      <h3 className="section-tag">{props.tag}</h3>

      <p className={styles.details}>Interested in supporting us?</p>
      <SiteButton className="btn btn-solid-red" href="#">
        Find Out More
      </SiteButton>
    </Section>
  );
};

export default SupportedBySection;
