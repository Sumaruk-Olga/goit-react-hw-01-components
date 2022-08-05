import styled from "@emotion/styled";

export const ListofFriends = styled.ul`
display: flex;
flex-direction: column;
width: 50%;
margin-left: auto;
margin-right:auto;
margin-bottom: ${ p => p.theme.space[4] }px;
background-color: ${p => p.theme.colors.page};
box-shadow: ${p => p.theme.shadow};
border-radius: ${p=>p.theme.radii.normal};
`;
