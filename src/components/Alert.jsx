// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import CheckIcon from "../../check-circle.svg";
import CircleIcon from "../../alert-circle.svg";
import TriangleIcon from "../../alert-triangle.svg";
import FrownIcon from "../../frown.svg";



export function SuccessAlert() {

    return ( 
       
        <div css={css`
            width: 650px;
            height: 76px;
            gap: 0px;
            border-radius: 10px 0px 0px 0px;
            opacity: 0px;
            background-color: #CEF7CD;
            margin: 20px;

         `}>
            <img src={CheckIcon} css={css `padding-top: 30px;`}></img>
               This is success alert box
            
        </div>
    );    
}

export function InfoAlert() {

    return ( 
        <div css={css`
            width: 650px;
            height: 76px;
            gap: 0px;
            border-radius: 10px 0px 0px 0px;
            opacity: 0px;
            background-color: #F9EBC8;
            margin: 20px;
        
        `}>
            <img src={CircleIcon} css={`position relative; 
                padding-top: 20px;
                padding-right: 600px;` }></img>
        </div>
    );    
}

export function WarningAlert() {

    return ( 
        <div
        css={css`
            width: 650px;
            height: 76px;
            gap: 0px;
            border-radius: 10px 0px 0px 0px;
            opacity: 0px;
            background-color: #F9D9C8;
            margin: 20px;
        
        `}>
            <img src={TriangleIcon} css={`position relative; 
                padding-top: 20px;
                padding-right: 600px;` }></img>
        </div>
    );    
}

export function ErrorAlert() {

    return ( 
        <div
        css={css`
          width: 650px;
          height: 76px;
          gap: 0px;
          border-radius: 10px 0px 0px 0px;
          opacity: 0px;
          background-color: #F9C8C8;
          margin: 20px;
        `}>
            <img src={FrownIcon} css={`position relative; 
                padding-top: 20px;
                padding-right: 600px;` }></img>
        </div>
    );    
}
 