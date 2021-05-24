import { useState } from 'react';
import { MenuLabel, Icon } from './HamburgerMenuStyle';

interface Props {
	onChange: any;
}

export default function HamburgerMenu(props: Props) {
	const [click, setClick] = useState(false);

	const handleClick = () => {
		props.onChange(!click);
		setClick(!click);
	};

	return (
		<MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
			<Icon clicked={click}>&nbsp;</Icon>
		</MenuLabel>
	);
}
