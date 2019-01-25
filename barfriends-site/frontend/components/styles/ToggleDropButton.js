import styled from 'styled-components';

const ToggleDropButton = styled.div`
`;

const InputCheckBox = styled.input`
  display: block;
  width: 20px;
  height: 32px;
  position: absolute;
  top: 7px;
  left: 27px;
  background-color: #4CAF50;
  -ms-transform: scale(2.5); /* IE */
  -moz-transform: scale(2.5); /* FF */
  -webkit-transform: scale(2.5); /* Safari and Chrome */
  
  cursor: pointer;
  
  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */
  
  -webkit-touch-callout: none;
  input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}
input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}
input:checked ~ span:nth-last-child(2)
{
  transform: rotate(-45deg) translate(0, -1px);
}
`;

const NavHamburger = styled.div`
  height: 30px; width: 33px;
  margin-left: 20px;
  margin-top: 8px;
  color: white;
  /* Change this if text is not on the right hand side of the mobile nav */
  :hover {
    color: green;
  }

span
{
  display: block;
  width: 33px;
  height: 4px;
  margin-top: 10px;
  margin-bottom: 5px;
  position: relative;
  
  background: #cdcdcd;
  border-radius: 5px;
  
  z-index: 1;
  
  transform-origin: 4px 0px;
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}
input:checked ~ span:first-child
{
  /* transform-origin: 0% 0%; */
  transform: rotate(45deg) translate(0, -1px);
}

/* input:checked ~ span:nth-last-child(2)
{
  transform-origin: 0% 100%;
} */
 input:checked ~ span:nth-last-child(1)
{
  /* opacity: 0; */
  transform: rotate(-45deg) translate(-3px, 6px);
  /* transform: rotate(0deg) scale(0.2, 0.2); */
}
 input:checked ~ span:nth-last-child(2)
{
  transform: rotate(45deg) translate(6px, -2px);
}
`;


export default ToggleDropButton;
export {NavStyles, InputCheckBox, NavHamburger};