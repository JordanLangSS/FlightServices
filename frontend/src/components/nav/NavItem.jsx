import styled from "styled-components";

export const NavItem = styled.div`
    display: flex;
    align-items: center;
    margin: ${({ margin }) => margin ?? '0px 0.5em'};
    padding: ${({ padding }) => padding ?? '0px'};
    font-family: ${({ fontFamily }) => fontFamily ?? 'Kanit'};
    font-size: ${({ fontSize }) => fontSize ?? '2.5rem'};
    

`;

