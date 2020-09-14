import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Menu = (props) => (
	<nav id="menu">
		<div className="inner">
			<ul className="links">
				<li>
					<Link onClick={props.onToggleMenu} to="/">
						{' '}
						Home
					</Link>
				</li>
				<li>
					<Link onClick={props.onToggleMenu} to="/rockets">
						{' '}
						Nasze rakiety
					</Link>
				</li>
				<li>
					{' '}
					<Link onClick={props.onToggleMenu} to="/about">
						{' '}
						O nas{' '}
					</Link>
				</li>
				<li>
					{' '}
					<Link onClick={props.onToggleMenu} to="/team">
						{' '}
						Nasz Team{' '}
					</Link>
				</li>
				<li>
					{' '}
					<Link onClick={props.onToggleMenu} to="/sponsors">
						{' '}
						Sponsorzy{' '}
					</Link>
				</li>
				<li>
					{' '}
					<Link onClick={props.onToggleMenu} to="/news">
						{' '}
						Newsy{' '}
					</Link>
				</li>
			</ul>{' '}
			<ul className="actions vertical">
				<li>
					{' '}
					<a href="#one" onClick={props.onToggleMenu} className=" button special fit">
						{' '}
						Zaczynajmy{' '}
					</a>
				</li>
			</ul>{' '}
		</div>{' '}
		<a className="close" onClick={props.onToggleMenu} href="javascript:;">
			{' '}
			Close{' '}
		</a>{' '}
	</nav>
);

Menu.propTypes = {
	onToggleMenu: PropTypes.func
};

export default Menu;
