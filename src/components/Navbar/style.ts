import styled from "styled-components";

export const StyledNavbar = styled.nav`
    .btn-dropdown-profile{
        border: none;
        background-color: transparent;
    }
    .drop-down-visibility-hidden{
        display: none;
    }
    .drop-down-visibility-visible{
        display: flex;
    }
    
    @media (max-width:1024px) {
        .btn-dropdown-profile{
            display: none;
        }
        
    }
    @media (min-width: 1024px) {
        /* .drop-down-visibility{
            display: none;
        } */
    }
`