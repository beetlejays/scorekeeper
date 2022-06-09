import styled from "styled-components";

export default function MainHeading() {
  return (
    <>
      <Heading> Scorekeeper App</Heading>
    </>
  );
}

const Heading = styled.h1`
  margin-bottom: 1rem;
  font-family: sans-serif;
  border: none;
  color: lightgrey;
  padding: 0.4rem 0;
  font-size: 3rem;
  text-align: center;
`;
