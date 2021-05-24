import styled from 'styled-components';

export const MenuLabel = styled.label`
	position: absolute;
	top: 0;
	left: 0;
	margin-left: 1.5rem;
	height: 100%;
	display: flex;
	align-items: center;
	cursor: pointer;
	z-index: 999;
`;

type IconProps = {
	clicked: boolean;
};
export const Icon = styled.span`
	position: relative;
	background-color: ${(props: IconProps) => (props.clicked ? 'transparent' : 'black')};
	width: 2.5rem;
	height: 2px;
	display: inline-block;
	transition: all 0.3s;

	&::before,
	&::after {
		content: '';
		background-color: black;
		width: 2.5rem;
		height: 2px;
		display: inline-block;
		position: absolute;
		left: 0;
		transition: all 0.3s;
	}

	&::before {
		top: ${(props) => (props.clicked ? '0' : '-0.5rem')};
		transform: ${(props) => (props.clicked ? 'rotate(135deg)' : 'rotate(0)')};
	}

	&::after {
		top: ${(props) => (props.clicked ? '0' : '0.5rem')};
		transform: ${(props) => (props.clicked ? 'rotate(-135deg)' : 'rotate(0)')};
	}

	/* ${MenuLabel}:hover &::before {
		top: ${(props) => (props.clicked ? '0' : '-0.7rem')};
	}

	${MenuLabel}:hover &::after {
		top: ${(props) => (props.clicked ? '0' : '0.7rem')};
	} */
`;
