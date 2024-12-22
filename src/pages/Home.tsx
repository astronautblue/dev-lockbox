import React from 'react'
import BaseLayout from '../layouts/BaseLayout'

import { Alert } from '@material-tailwind/react'
import { InformationCircleIcon } from '@heroicons/react/24/outline'

import '../assets/styles/pages/home.css'

const Home: React.FC = () => {
	return (
		<BaseLayout title="Home page">
			<div className="home-container">
				<Alert
					variant="outlined"
					className="alert-custom"
					icon={<InformationCircleIcon className="alert-icon-custom" />}
				>
					This template comes with a common Layout for all pages called&nbsp;
					<span>BaseLayout</span>. You can node a different structure for each
					page as children of the Layout and you can even create your own
					Layouts.
				</Alert>
			</div>
		</BaseLayout>
	)
}

export default Home
