import React, { useState } from 'react';
import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners';
import '../styles/Spinner.css';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export const Spinner = props => {
  const [loading] = useState(true);

  return (
    <div className="sweet-loading">
      <ClipLoader css={override} size={100} loading={loading} />
    </div>
  );
};
