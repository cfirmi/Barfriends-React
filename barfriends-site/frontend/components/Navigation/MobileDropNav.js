import React from 'react';
import Link from 'next/link';
import { Query} from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const LOCAL_STATE_QUERY = gql`
  query {
    dropOpen @client
  }
`;
const TOGGLE_CART_MUTATION = gql`
  mutation {
    toggleDrop @client
  }
`;

const MobileDropNav = () => (
  <Query query={LOCAL_STATE_QUERY}> 
  {({data}) => 
  console.log(data) || (
    <NavDropStyle open={data.dropOpen}>
        <NavBox>
          <Link href='#'>
            <a>
              <NavItems>
                    App
              </NavItems>
            </a>
          </Link>
          <Link href='#'>
            <a>
              <NavItems>
                    Products
              </NavItems>
            </a>
          </Link> 
          <Link href='#'>
            <a>
              <NavItems>
                    About
              </NavItems>
            </a>
          </Link>
        </NavBox>
      </NavDropStyle>
        )}
      </Query>
  );


export default MobileDropNav;
export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION };

const NavDropStyle = styled.div`
  padding: 20px;
  background: red;
  position: fixed;
  height: 100%;
  top: 44px;
  right: 0;
  width: 100vw;
  z-index: 10;
  transform: translateX(100%);
  transition: all 0.3s;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  ${props => props.open && `transform: translateX(0);`};
`;

const NavItems = styled.div`
  margin-left: 50%; transform: translateX(-50%);
  text-align: left;
  border-bottom: 0.5px solid rgba(255,255,255,0.49);
  width: 90%;
  line-height: 43px;
  color: white;
  font-weight: 300;
  letter-spacing: 0.55px;
  :hover {
    color: green;
  }
`;

const NavBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  width: 100%;
  margin-left: 50%;
  transform: translateX(-50%);  
`;