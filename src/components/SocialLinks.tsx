import PropTypes from 'prop-types'
import { Typography } from '@material-tailwind/react'

import FacebookIcon from './Icons/FacebookIcon'
import GitHubIcon from './Icons/GitHubIcon'
import InstagramIcon from './Icons/InstagramIcon'
import MastodonIcon from './Icons/MastodonIcon'
import ThreadsIcon from './Icons/ThreadsIcon'
import TwitterIcon from './Icons/TwitterIcon'

const SOCIAL_LINKS = [
	{
		name: 'Facebook',
		href: '#',
		Icon: FacebookIcon,
	},
	{
		name: 'Instagram',
		href: '#',
		Icon: InstagramIcon,
	},
	{
		name: 'Threads',
		href: '#',
		Icon: ThreadsIcon,
	},
	{
		name: 'Twitter',
		href: '#',
		Icon: TwitterIcon,
	},
	{
		name: 'GitHub',
		href: '#',
		Icon: GitHubIcon,
	},
	{
		name: 'Mastodon',
		href: '#',
		Icon: MastodonIcon,
	},
]

const SocialLinks = ({ iconClassName, iconFill, iconGap }) => {
	return (
		<div className={`flex ${iconGap} flex-wrap sm:justify-center`}>
			{SOCIAL_LINKS.map((link, index) => (
				<SocialLink
					key={index}
					{...link}
					iconClassName={iconClassName}
					iconFill={iconFill}
				/>
			))}
		</div>
	)
}

const SocialLink = ({ name, href, Icon, iconClassName, iconFill }) => {
	return (
		<Typography
			as='a'
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			className='p-2 opacity-80 transition-opacity hover:opacity-100'
			aria-label={name}
		>
			<Icon
				className={iconClassName}
				fill={iconFill}
			/>
			<span className='sr-only'>{name}</span>
		</Typography>
	)
}

SocialLinks.propTypes = {
	iconClassName: PropTypes.string.isRequired,
	iconFill: PropTypes.string.isRequired,
	iconGap: PropTypes.string.isRequired,
}

SocialLink.propTypes = {
	name: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	Icon: PropTypes.elementType.isRequired,
	iconClassName: PropTypes.string.isRequired,
	iconFill: PropTypes.string.isRequired,
}

export default SocialLinks
