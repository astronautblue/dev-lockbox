import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import { ListItem } from '@material-tailwind/react'

const SidebarItemComponent = ({ page, onClick }) => (
	<Link
		to={page.href}
		key={page.name}
		onClick={onClick}
	>
		<ListItem className='sidebar-item'>{page.name}</ListItem>
	</Link>
)

SidebarItemComponent.propTypes = {
	page: PropTypes.shape({
		href: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
	}).isRequired,
	onClick: PropTypes.func.isRequired,
}

const SidebarItem = React.memo(SidebarItemComponent)
SidebarItem.displayName = 'SidebarItem'

export default SidebarItem
