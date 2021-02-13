import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icons = () => {
  return (
    <div>
      <div className={'box'}>

      <dd>
        <FontAwesomeIcon 
        className={'box_icon'} 
        aria-hidden="true"
        icon="check-square" />
        &nbsp; Home 
        <a href="#link-dest">hrefのリンク先種類</a>
      </dd> 
      
      </div>
    </div>
  );
};
export default Icons;