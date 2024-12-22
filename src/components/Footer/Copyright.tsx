import PropTypes from 'prop-types'
import { Typography } from '@material-tailwind/react'
import { SITE } from '../../routes/index'

const Copyright = ({ currentYear }) => {
	return (
		<Typography
			variant='small'
			className='copyright-content'
		>
			&copy; {currentYear}{' '}
			<Typography
				as='a'
				href='/'
				className='copyright-link custom-link'
			>
				{SITE.title}
			</Typography>
			. Made with 🩵 by&nbsp;
			<Typography
				as='a'
				href='#'
				target='_blank'
				className='copyright-link custom-link'
			>
				{SITE.author}
			</Typography>
			.
		</Typography>
	)
}

Copyright.propTypes = {
	currentYear: PropTypes.number.isRequired,
}

export default Copyright
