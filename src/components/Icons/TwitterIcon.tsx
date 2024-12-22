import PropTypes from 'prop-types'

const TwitterIcon = ({ className, fill }) => {
	return (
		<svg
			className={className}
			fill={fill}
			viewBox='0 0 24 24'
			aria-hidden='true'
		>
			<path d='M14.285 10.163 23.221 0h-2.116L13.342 8.823 7.147 0H0l9.371 13.343L0 24h2.116l8.193 -9.32L16.855 24H24zm-2.9 3.297 -0.951 -1.329L2.88 1.562h3.251l6.098 8.532 0.948 1.33 7.925 11.09h-3.253z' />
		</svg>
	)
}

TwitterIcon.propTypes = {
	className: PropTypes.string,
	fill: PropTypes.string,
}

export default TwitterIcon
