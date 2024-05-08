import styled from "styled-components";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithStyledComponents.js";

export default function HomePage() {
  return (
    <FlexWrapper>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents $isBlack />
      <BoxWithStyledComponents />
    </FlexWrapper>
  );
}

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
