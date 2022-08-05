import styled from "@emotion/styled";

export const ListofFriends = styled.ul`
display: flex;
flex-direction: column;
width: 100%;
margin-left: auto;
margin-right:auto;
margin-bottom: ${ p => p.theme.space[4] }px;
background-color: ${p => p.theme.colors.page};
border-radius: ${p => p.theme.radii.normal};

@media screen and (min-width: 768px) {
      width: 50%;
    }
    @media screen and (min-width: 1200px) {
      width: 25%;
  }
`;
