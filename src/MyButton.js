import { Fade } from '@material-ui/core';
import React from 'react'
import { css } from 'styled-components';
import UseCustomSnackbar from './hooks/useCustomSnackbar';

const MyButton = () => {
  const { showSnackbar } = UseCustomSnackbar();
  const snackbarStyle = css`
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
  `;
  const options = {
    autoHideDuration:1000,
  }

  const handleClick = () => {
    showSnackbar('인증요청이 완료되었습니다.', snackbarStyle, options);
  }
  return (
    <button onClick={handleClick}>MyButton</button>
  )
}

export default MyButton