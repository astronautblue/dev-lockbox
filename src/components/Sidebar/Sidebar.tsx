import PropTypes from 'prop-types'
import { Typography, List, Input, Drawer, Card } from '@material-tailwind/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

import { SITE, PAGES } from '../../routes/index'

import '../../assets/styles/components/sidebar.css'

import SidebarItem from './SidebarItem'
import SocialLinks from '../SocialLinks'

const ICON_CLASS_NAME = 'size-5'
const ICON_FILL = 'white'
const ICON_GAP = 'gap-1'

const Sidebar = ({ isDrawerOpen, toggleDrawer }) => {
	
	return (
		<aside className='sidebar-container'>
			<Drawer
				open={isDrawerOpen}
				onClose={toggleDrawer}
				className='sidebar-drawer'
			>
				<Card
					color='transparent'
					shadow={false}
					className='card-custom'
				>
					<div className='sidebar-header'>
						<img
							src='/assets/img/react.svg'
							alt={SITE.title}
							className='h-6'
						/>
						<Typography
							variant='h5'
							color='white'
						>
							{SITE.title}
						</Typography>
					</div>
					<div className='search-input'>
						<Input
							icon={
								<MagnifyingGlassIcon
									className='size-5'
									color='white'
								/>
							}
							label='Search'
							title='Search'
							color='white'
						/>
					</div>
					<List>
						{PAGES.map(page => (
							<SidebarItem
								key={page.name}
								page={page}
								onClick={toggleDrawer}
							/>
						))}
					</List>
					<br className='br-small' />
					<div className='social-links-container'>
						<SocialLinks
							iconClassName={ICON_CLASS_NAME}
							iconFill={ICON_FILL}
							iconGap={ICON_GAP}
						/>
					</div>
				</Card>
			</Drawer>
		</aside>
	)
}

Sidebar.propTypes = {
	isDrawerOpen: PropTypes.bool.isRequired,
	toggleDrawer: PropTypes.func.isRequired,
}

export default Sidebar
