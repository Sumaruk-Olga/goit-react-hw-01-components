import styled from "@emotion/styled";

export const Paper = styled.section`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    background-color: ${p => p.theme.colors.page};
    border-radius: ${p => p.theme.radii.normal};
    margin-bottom: ${p => p.theme.space[4]}px;
    box-shadow: ${p => p.theme.shadow};
    
    @media screen and (min-width: 768px) {
      width: 70%;
    }
    @media screen and (min-width: 1200px) {
      width: 35%;
  }
`;

export const StatList = styled.ul`
display:flex;
justify-content: space-between;
`;