import styled from "styled-components"
import {Avatar, Button} from "@mui/material"
import ChatIcon from "@mui/icons-material/Chat";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import * as EmailValidator from "email-validator";


function Sidebar() {
  const createChat = () => {
    const input = prompt("Please enter the email address of your friend");

    if(!input) return null;

    if(EmailValidator.validate(input)) {
      
    }
  }
  return (
    <Container>
      <Header>
        <AvatarIco />
        <IconGrid>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </IconGrid>
      </Header>
      <Search>
        <SearchIcon />
        <SearchInput placeholder="Search"/>
      </Search>
      <SidebarButton onClick={createChat}>New Chat</SidebarButton>
    </Container>
  );
}

export default Sidebar

const Container = styled.div`

`;
const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius:2px;
`;
const SearchInput = styled.input`
  outline-width: 0px;
  border: none;
  flex: 1;
`;

const SidebarButton = styled(Button)`
  width:100%;
  &&&{
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`;
const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index:1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;

const AvatarIco = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
const IconGrid= styled.div``;