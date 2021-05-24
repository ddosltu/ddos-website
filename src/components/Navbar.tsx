import { useState } from 'react';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import { NavBar, Nav, ImageLink, LinkList, LinkItem, Link, Dropdown, DropdownContent } from '../styles/NavbarStyle';
import logoImg from '../resources/images/logo.png';

type Link = {
	name: string;
	to: string;
	dropdown?: Link[];
};
interface Props {
	links: Link[];
}

export default function Navbar(props: Props) {
	const { links } = props;
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<NavBar>
			<HamburgerMenu onChange={(e: boolean) => setOpenMenu(e)} />
			<ImageLink to={'/'}>
				<img src={logoImg} alt="Logotype" width="auto" height="60px" />
			</ImageLink>
			<Nav open={openMenu}>
				<LinkList horizontal>
					{links.map((link, index) => {
						return (
							<LinkItem key={index}>
								<Dropdown>
									<Link activeClassName="active" exact={link.to === '/'} to={link.to} fontSize="1.2rem">
										{link.name}
									</Link>
									{link.dropdown && (
										<DropdownContent>
											{link.dropdown?.map((sublink, index) => {
												return (
													<LinkItem key={index}>
														<Link exact to={link.to + sublink.to}>
															{sublink.name}
														</Link>
													</LinkItem>
												);
											})}
										</DropdownContent>
									)}
								</Dropdown>
							</LinkItem>
						);
					})}
				</LinkList>
			</Nav>
		</NavBar>
	);
}
