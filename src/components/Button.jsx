// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
export function Button(props) {
  let bgColor = undefined;
  if (props.color === "primary") {
    bgColor = "#074EE8";
  } else if (props.color === "secondary") {
    bgColor = "#07A4E8";
  }
  return (
  <div>
    <button
      css={css`
        display: block;
        background-color: ${bgColor};
        margin: 10px;
        width: 170px;
        height: 50px;
        border: none;
        border-radius: 4px;
        color: white;
        font-weight: 400;
        font-size: 16px;
        font-family: "Sarabun", sans-serif;
      `}
    >
      {props.text}
    </button>
  </div>
  );
}
