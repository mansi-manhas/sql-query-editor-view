import React from "react";

import { sectionNames } from "./consts";
import executeQuery from '../assets/executeQuery.svg';
import { ExecuteQueryButton, Title } from './styled.style';
import { SvgWrapper } from "../styled.style";

const SideNavList = ({ returnInput }) => {

  const handleQuerySelection = (event) => {
    let value = event.target.innerText;
    if (!value) {
      value = event.target.alt
    }
    returnInput(value);
  }


  return (
    <>
    <Title>Predefined Queries</Title>
    {sectionNames.map((sectionName, i) => (
        <ExecuteQueryButton key={i} onClick={(e) => handleQuerySelection(e)}> 
           {sectionName}  <SvgWrapper><img style={{marginBottom: '-4px'}} width={16} height={16} src={executeQuery} alt={sectionName}/></SvgWrapper>
        </ExecuteQueryButton>
    ))}
    </>
  );
};

export default SideNavList;
