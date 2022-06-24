import { Nav, NavItem, NavLink, NavSection } from "../components/nav";

export const AppNav = () => {
    return (
        <Nav>

            <NavSection jc="flex-end">

                <NavItem>
                    <NavLink to="/"> Home</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink to="/AddFlight"> Add Flight </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink to="/UpdateFlight"> Update Flight </NavLink>
                </NavItem>

            </NavSection>


        </Nav >

    );
}

// 2:15:00