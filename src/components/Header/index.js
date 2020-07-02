import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '../Notifications';
import { Container, Content, Profile } from './styles';

import logo from '~/assets/logo-header.svg';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
        <Notifications />
         <Profile>
            <div>
              <strong>Felipe Almeida</strong>
              <Link to="/profile"> Meu Perfil</Link>
            </div>
            <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt=""/>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
