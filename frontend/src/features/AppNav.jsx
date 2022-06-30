import { Nav, NavItem, NavLink, NavSection } from "../components/nav";
import { LogoContainer } from "../components/styles";

const planeLogo = new URL("../images/PlaneLogo.jpg", import.meta.url);

export const AppNav = () => {
    return (
        <Nav>
            <NavSection>
                <NavItem fontFamily='Lobster' fontSize='5rem'>
                    Air Express
                </NavItem>

                <LogoContainer src={planeLogo} alt="Air Express Logo" />

            </NavSection>

            <NavSection jc="flex-end">

                <NavItem>
                    <NavLink to="/"> Home </NavLink>
                </NavItem>
                <NavItem> | </NavItem>

                <NavItem>
                    <NavLink to="/AddFlight"> Create Flight </NavLink>
                </NavItem>

                <NavItem> | </NavItem>

                <NavItem>
                    <NavLink to="/UpdateFlight"> Update Flight </NavLink>
                </NavItem>

            </NavSection>


        </Nav >

    );
}

// 2:15:00