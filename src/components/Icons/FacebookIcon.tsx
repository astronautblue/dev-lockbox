import PropTypes from 'prop-types'

const FacebookIcon = ({ className, fill }) => {
	return (
		<svg
			className={className}
			fill={fill}
			viewBox='0 0 24 24'
			aria-hidden='true'
		>
			<path d='M24 12c0 -6.627 -5.373 -12 -12 -12S0 5.373 0 12c0 5.628 3.874 10.35 9.101 11.647v-7.98H6.626V12h2.475v-1.58c0 -4.084 1.848 -5.978 5.858 -5.978 0.76 0 2.072 0.149 2.609 0.298v3.324c-0.283 -0.03 -0.775 -0.045 -1.386 -0.045 -1.968 0 -2.728 0.745 -2.728 2.683V12h3.92l-0.673 3.667h-3.246v8.245C19.396 23.194 24 18.135 24 12' />
		</svg>
	)
}

FacebookIcon.propTypes = {
	className: PropTypes.string,
	fill: PropTypes.string,
}

export default FacebookIcon
