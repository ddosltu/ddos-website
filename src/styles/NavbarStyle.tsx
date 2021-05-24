import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from './device';

declare global {
	namespace JSX {
		interface IntrinsicElements {
			navbar: any;
		}
	}
}

const height = '80px';
const color = '#fbcb13';
const textColor = 'black';

export const NavBar = styled.div`
	background: ${color};
	position: fixed;
	z-index: 999;
	width: 100%;
	height: ${height};
	display: flex;
	align-items: center;

	@media ${device.tablet} {
		display: grid;
		grid-template-columns: 1fr auto minmax(100px, 5fr) 0.5fr;

		& label {
			visibility: hidden;
		}
	}
`;

type NavProps = {
	open: boolean;
};
export const Nav = styled.nav`
	position: fixed;
	text-align: left;
	overflow-y: auto;
	top: ${height};
	/* height: 100vh; */
	bottom: 0;
	background: ${color};
	width: auto;
	transform-origin: left;
	transition: transform 400ms ease-in-out;

	& ul {
		display: flex;
		flex-direction: column;
		margin: 2px;
		padding: 2px;
		list-style: none;
	}

	& li {
		margin-bottom: 1em;
		margin-left: 1em;
	}

	@media ${device.tablet} {
		all: unset;
		grid-column: 3/4;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;

		& ul {
			margin: 0;
			padding: 0;
			flex-direction: row;
			height: auto;
			align-items: center;
		}

		& li {
			margin: 0 0.5rem;
			height: 100%;
			display: flex;
			align-items: center;
		}
	}

	${(props: NavProps) => `
		transform: scale(${props.open ? 1 : 0}, 1)
	`}
`;

export const ImageLink = styled(NavLink)`
	margin: auto;
	grid-column: 2/3;
`;

type LinkProps = {
	fontSize?: string;
};
export const Link = styled(NavLink)`
	color: ${textColor};
	text-decoration: none;
	font-size: ${(props: LinkProps) => props.fontSize || '1rem'};
	position: relative;

	&.active {
		font-weight: bold;
	}

	@media ${device.tablet} {
		&.active {
			font-weight: normal;
		}

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
	@media ${device.tablet} {
		background-color: ${color};
		padding-right: 1em;
		height: ${height};
		display: flex;
		align-items: center;

		& ${DropdownContent} {
			list-style: none;
			padding: 0.1em;
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;
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
	}
`;
