import { useEffect } from 'react';

import {
	MemoryRouter,
	Routes,
	Route,
	Link,
	useLocation,
	useNavigate,
} from 'react-router-dom';

import { Navigation } from '../Navigation/Navigation';

import { Sider } from './Sider';

import type { Meta, StoryObj } from '@storybook/react';

const routeList = [
	{ name: 'Dashboard', href: '/dashboard', icon: 'e323' },
	{ name: 'Teams', href: '/teams', icon: 'e533' },
	{ name: 'Favorite', href: '/favorite', icon: 'f762' },
	{ name: 'Wallet', href: '/wallet', icon: 'f555' },
	{ name: 'Settings', href: '/settings', icon: 'f013' },
];

const Renderer = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (pathname === '/') navigate(routeList[0]?.href);
	}, [navigate, pathname]);

	return (
		<Sider
			leftSider={
				<Navigation as={Link} hrefPropName='to' pathname={pathname} routes={routeList}>🎲 XtremeUI</Navigation>
			}
		/>
	);
};

const ReactRouterDecorator = () => {
	return (
		<MemoryRouter>
			<Routes>
				<Route path='/*' element={<Renderer />} />
			</Routes>
		</MemoryRouter>
	);
};

const meta: Meta<typeof Sider> = {
	title: 'Layouts/Sider',
	render: () => <ReactRouterDecorator />,
	tags: [],
	argTypes: {
		className: { control: false },
		leftSider: { control: false },
		rightSider: { control: false },
		showMiniLeftSider: { defaultValue: { summary: true } },
		showMiniRightSider: { defaultValue: { summary: false } },
	},
	args: {
		showMiniLeftSider: true,
	},
};

export default meta;
export const Default: StoryObj<typeof meta> = {
	args: {
	},
};
