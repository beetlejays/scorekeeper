import styled from "styled-components";

export default function ButtonPrimary({ text, onClick }) {
  return (
    <>
      <Primary onClick={onClick} type="button">
        {text}
      </Primary>
    </>
  );
}

const Primary = styled.button`
  background-color: goldenrod;
  padding: 0.5rem 1.6rem;
  border-radius: 8px;
  border: none;
  color: white;
  font-size: 1.3rem;
  margin: 10px 0;
`;
