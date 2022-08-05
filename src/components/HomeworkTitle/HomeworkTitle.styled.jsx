import styled from "@emotion/styled";

export const HomeworkTitle = styled.h1`
    display: block;
    text-align: center;
    font-style: italic;
    margin-bottom:${p => p.theme.space[4]}px;
    background-color: ${p => p.theme.colors.secondary};
`;

export const NameOfTask = styled.h2`
    display: block;
    text-align: center;
    background-color: ${p => p.theme.colors.secondary};
    border-top-left-radius: ${p => p.theme.radii.normal};
    border-top-right-radius: ${p => p.theme.radii.normal};
`;