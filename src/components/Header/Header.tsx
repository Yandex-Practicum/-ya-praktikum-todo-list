import React, {FC} from 'react';

import Icon from '../Icon';

import logo from '../../assets/images/logo.svg';
import './Header.css';

type Props = {
    link: string;
}

const Header: FC<Props> = ({link}) => (
    <header className="header">
        <Icon
            src={logo}
            className="someAdvClassName"
            alt="logo"
        />

        <p>
            Edit <code>src/containers/App/App.tsx</code> and save to reload.
        </p>

        <a
            className="header-link"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React
        </a>
    </header>
);
export default Header;
