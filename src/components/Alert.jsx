// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import CheckIcon from "../../check-circle.svg";
import CircleIcon from "../../alert-circle.svg";
import TriangleIcon from "../../alert-triangle.svg";
import FrownIcon from "../../frown.svg";

export function SuccessAlert() {
  return (
    <div
      css={css`
        margin: 10px;
        display: flex;
        align-items: center;
        justify-content: start;
        padding-left: 20px;
        width: 650px;
        height: 76px;
        font-family: "Kanit", sans-serif;
        font-weight: 700;
        font-size: 20px;
        color: #444444;
        border-radius: 10px;
        background-color: #cef7cd;
      `}
    >
      <div
        css={css`
          margin-right: 20px;
        `}
      >
        <img
          src={CheckIcon}
          css={css`
            margin-right: 20px;
          `}
        ></img>
      </div>
      This is success alert box
    </div>
  );
}

export function InfoAlert() {
  return (
    <div
      css={css`
        margin: 10px;
        display: flex;
        align-items: center;
        justify-content: start;
        padding-left: 20px;
        width: 650px;
        height: 76px;
        font-family: "Kanit", sans-serif;
        font-weight: 700;
        font-size: 20px;
        color: #444444;
        border-radius: 10px;
        background-color: #F9EBC8;

      `}
    >
      <div
        css={css`
          margin-right: 20px;
        `}
      >
        <img
          src={CircleIcon}
          css={css`
            margin-right: 20px;
          `}
        ></img>
      </div>
      This is info alert box
    </div>
  );
}

export function WarningAlert() {
  return (
    <div
      css={css`
        margin: 10px;
        display: flex;
        align-items: center;
        justify-content: start;
        padding-left: 20px;
        width: 650px;
        height: 76px;
        font-family: "Kanit", sans-serif;
        font-weight: 700;
        font-size: 20px;
        color: #444444;
        border-radius: 10px;
        background-color: #F9D9C8;

      `}
    >
      <div
        css={css`
          margin-right: 20px;
        `}
      >
        <img
          src={TriangleIcon}
          css={css`
            margin-right: 20px;
          `}
        ></img>
      </div>
      This is warning alert box
    </div>
  );
}

export function ErrorAlert() {
  return (
    <div
      css={css`
        margin: 10px;
        display: flex;
        align-items: center;
        justify-content: start;
        padding-left: 20px;
        width: 650px;
        height: 76px;
        font-family: "Kanit", sans-serif;
        font-weight: 700;
        font-size: 20px;
        color: #444444;
        border-radius: 10px;
        background-color: #F9C8C8;

      `}
    >
      <div
        css={css`
          margin-right: 20px;
        `}
      >
        <img
          src={FrownIcon}
          css={css`
            margin-right: 20px;
          `}
        ></img>
      </div>
      This is error alert box
    </div>
  );
}
