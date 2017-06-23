import React from "react";
import styled from "styled-components";
import { Grid } from "react-flexbox-grid";

const Display = styled.div`
  margin-bottom: 24px;
`;

const Photos = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
`;

const Photo = styled.img`
  height: 25rem;
  width: auto;
`;

const ButtonWrapper = styled.div`
  position: relative;
`;

const Button = styled.button`
  position: absolute;
  bottom: 1rem;
  background-color: #00779a;
  padding: .5rem 1rem;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 300;
  font-size: .625rem;
  line-height: .625rem;
  color: #fff;
  border-radius: 2px;
  border: none;
`;

export default () => {
  return (
    <div>
      <Display>
        <Photos>
          <Photo
            src={process.env.PUBLIC_URL + "img/complex-page-photos/photo1.png"}
            alt="photo1"
          />
          <Photo
            src={process.env.PUBLIC_URL + "img/complex-page-photos/photo2.png"}
            alt="photo2"
          />
          <Photo
            src={process.env.PUBLIC_URL + "img/complex-page-photos/photo3.png"}
            alt="photo3"
          />
          <Photo
            src={process.env.PUBLIC_URL + "img/complex-page-photos/photo4.png"}
            alt="photo4"
          />
          <Photo
            src={process.env.PUBLIC_URL + "img/complex-page-photos/photo5.png"}
            alt="photo5"
          />
        </Photos>
        <ButtonWrapper>
          <Grid>
            <Button>41 фотография</Button>
          </Grid>
        </ButtonWrapper>
      </Display>
    </div>
  );
};
