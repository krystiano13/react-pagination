import { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const Card = ({ colorId }) => {
  return (
    <CardWrapper
      id={colorId}
      className={`font-head f-600 f-xxl br-1 bg-accent c-pointer m-3 flex jc-center ai-center`}
    >
      {colorId}
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 6rem;
  height: 6rem;
`;

Card.propTypes = {
  colorId: PropTypes.number,
};
