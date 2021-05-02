import React from "react";
import { Jumbotron as Jumbo,Container} from "react-bootstrap";
import styled from "styled-components";
import shoe from '../assets/shoe.jpg';


const Styles = styled.div`
.jumbo{
    background:url(${shoe}) no-repeat fixed bottom;
    background-size:cover;
    color:#ccc;
    height:200px;
    position:relative;
}
.overlay{
    background-color:#000;
    opacity:0.6;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:-1;
}
`;

export const Jumb =() => (
    <Styles>
        <Jumbo fluid className='jumbo'>
            <div className='overlay'></div>
            <Container>
                <h1>Welcome Users</h1>
                <p>Post your featured product here!</p>
            </Container>
        </Jumbo>
    </Styles>
)