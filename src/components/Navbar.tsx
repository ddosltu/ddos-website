import React, { useState } from 'react';
import { NavBar, Nav, LinkList, LinkItem, Link, Dropdown, DropdownContent } from '../styles/NavbarStyle';

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

	return (
		<NavBar>
			<Nav>
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
