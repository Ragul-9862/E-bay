import { Badge } from '@mui/material';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import logo from "../Components/Images/Red Minimalist Fashion Woman Free Logo (1).jpg";
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 20px;
  position:relative;
  bottom:85px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 400px; 
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const LogoImage = styled.img`
  width: 150px; 
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration: none;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <LogoImage src={logo} alt="Logo" />
          </Logo>
        </Center>
        <Right>
          <Link to="/register" style={{ textDecoration: 'none',color:"black" }} >
          <MenuItem>REGISTER</MenuItem>
          </Link>
         
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
          <Link to="/cart" style={{ textDecoration: 'none',color:"black" }} >
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
