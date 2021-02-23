import styled from "styled-components";

const Container = styled.svg``;

function Arrow({ color, width, height }) {
  return (
    <Container width={width} height={height}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.20711 4.79289C4.81658 4.40237 4.18342 4.40237 3.79289 4.79289C3.40237 5.18342 3.40237 5.81658 3.79289 6.20711L8.29289 10.7071C8.68342 11.0976 9.31658 11.0976 9.70711 10.7071L14.2071 6.20711C14.5976 5.81658 14.5976 5.18342 14.2071 4.79289C13.8166 4.40237 13.1834 4.40237 12.7929 4.79289L9 8.58579L5.20711 4.79289Z"
        fill={color}
      />
    </Container>
  );
}

export default Arrow;
