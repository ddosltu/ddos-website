import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

declare global {
	namespace JSX {
		interface IntrinsicElements {
			navbar: any;
		}
	}
}

const height = '80px';
const color = '#d5b60a';
const textColor = 'black';

export const NavBar = styled.div`
	background: ${color};
	text-align: center;
	position: absolute;
	z-index: 999;
	width: 100%;
	height: ${height};
`;

export const Nav = styled.nav``;

type LinkProps = {
	fontSize?: string;
};
export const Link = styled(NavLink)`
	color: ${textColor};
	text-decoration: none;
	font-size: ${(props: LinkProps) => props.fontSize || '1rem'};
	position: relative;

	&:after {
		content: '';
		display: block;
		position: absolute;
		height: 3px;
		background: ${textColor};
		bottom: -0.2em;
		left: 0;
		right: 0;
		transform: scale(0, 1);
		transition: transform ease-in-out 250ms;
	}

	&.active:after {
		transform: scale(1, 1);
	}

	&:hover {
		transition: 250ms ease-in-out;
	}
	transition: 250ms ease-in-out;

	&:before {
		content: '';
		display: block;
		height: 3px;
		background: ${textColor};
		top: 0;
		left: 0;
		right: 0;
		transform: scale(0, 1);
		transition: transform ease-in-out 250ms;
	}

	&:hover:before {
		transform: scale(1, 1);
	}
`;

type LinkListProps = {
	horizontal?: boolean;
};
export const LinkList = styled.ul`
	list-style: none;
	display: flex;
	${(props: LinkListProps) => `
		flex-direction: ${props.horizontal ? 'row' : 'column'}
	`}
`;

export const LinkItem = styled.li``;

export const DropdownContent = styled(LinkList)`
	& ${LinkItem} {
		text-align: left;
		margin: 5px;
	}

	& .active:after {
		all: unset;
	}

	& ${Link}.active {
		font-weight: bold;
	}
`;

export const Dropdown = styled.div`
	background-color: ${color};
	padding-right: 1em;
	height: ${height};
	display: flex;
	align-items: center;

	& ${DropdownContent} {
		list-style: none;
		padding: 0.1em;
		background-color: ${color};
		position: absolute;
		z-index: 1;
		top: ${height};
		transform: scale(1, 0);
		transition: transform 250ms ease-in-out;
		transform-origin: top;
	}

	&:hover ${DropdownContent} {
		transform: scale(1, 1);
		transform-origin: top;
	}
`;
