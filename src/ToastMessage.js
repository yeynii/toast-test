import React, { forwardRef } from "react";
import { SnackbarContent } from "notistack";
import styled, { keyframes, css } from "styled-components";

const ToastMessage = forwardRef((props, ref) => {
  return (
    <SnackbarContent ref={ref}>
        <ToastMessageContainer theme={props.style}>
          <ToastMessageBox>{props.message}</ToastMessageBox>
        </ToastMessageContainer>
    </SnackbarContent>
  );
});

const ToastMessageContainer = styled.div`
  z-index: 999;
  display: flex;
  justify-content: center;
  position: absolute;
  width: 344px;
  padding: 15px 0;
  background-color: #afd8ce;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  ${(props) => props.theme[0]}
  // 애니메이션 처리 해야됨
`;

const ToastMessageBox = styled.div`
  font-family: Noto Sans KR;
  font-size: 12;
  line-height: 1.5;
`;

export default ToastMessage;
