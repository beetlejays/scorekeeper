import styled from "styled-components";

export default function MainHeading() {
  return (
    <>
      <Heading> Cool Scorekeeper App</Heading>
    </>
  );
}

const Heading = styled.h1`
  margin-bottom: 1rem;
  border: none;
  color: white;
  padding: 0.4rem 0;
  font-size: 1rem;
  cursor: pointer;
`;
