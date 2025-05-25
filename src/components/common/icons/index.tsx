export default function Icon({
	type,
}: {
	type:
		| 'card'
		| 'paypal'
		| 'cash'
		| 'home'
		| 'settings'
		| 'notification'
		| 'notificationSetting'
		| 'soarIcon'
		| 'hamburgerIcon'
		| 'searchIcon'
		| 'chip'
		| 'chip2';
}) {
	switch (type) {
		case 'card':
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='55'
					height='55'
					fill='none'
					viewBox='0 0 55 55'
				>
					<circle cx='27.5' cy='27.5' r='27.5' fill='#FFF5D9'></circle>
					<path
						fill='#FFBB38'
						d='M32.645 37.61H19.68a2.62 2.62 0 0 1-2.617-2.618v-7.738a2.62 2.62 0 0 1 2.617-2.617h12.965a2.62 2.62 0 0 1 2.617 2.617v7.738a2.62 2.62 0 0 1-2.617 2.617M19.68 26.277a.98.98 0 0 0-.977.976v7.738a.98.98 0 0 0 .977.977h12.965a.98.98 0 0 0 .977-.977v-7.738a.98.98 0 0 0-.977-.976z'
					></path>
					<path
						fill='#FFBB38'
						d='M36.321 33.192h-1.879a.82.82 0 1 1 0-1.64h1.88a.98.98 0 0 0 .975-.978v-7.737a.98.98 0 0 0-.976-.978H23.356a.98.98 0 0 0-.977.977v2.62a.82.82 0 1 1-1.64 0v-2.62a2.62 2.62 0 0 1 2.617-2.617H36.32a2.62 2.62 0 0 1 2.617 2.618v7.737a2.62 2.62 0 0 1-2.617 2.618'
					></path>
					<path
						fill='#FFBB38'
						d='M34.442 31.746h-16.56a.82.82 0 0 1-.82-.82v-2.755a.82.82 0 0 1 .82-.82h16.56a.82.82 0 0 1 .82.82v2.755a.82.82 0 0 1-.82.82m-15.739-1.64h14.919V28.99H18.703z'
					></path>
				</svg>
			);
		case 'paypal':
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='55'
					height='55'
					fill='none'
					viewBox='0 0 55 55'
				>
					<circle cx='27.5' cy='27.5' r='27.5' fill='#E7EDFF'></circle>
					<path
						fill='#396AFF'
						d='M36.995 22.383a5.81 5.81 0 0 0-5.801-5.758H22.75a.875.875 0 0 0-.875.735l-2.992 18.769a.88.88 0 0 0 .2.7.88.88 0 0 0 .666.315h3.614l-.193 1.216a.873.873 0 0 0 .875 1.015h4.069a.875.875 0 0 0 .875-.726l.875-5.346h2.756a6.527 6.527 0 0 0 6.501-6.52v-.244a5.14 5.14 0 0 0-2.126-4.157m-13.501-4.008h7.7a4.06 4.06 0 0 1 3.946 3.159 5 5 0 0 0-1.155-.131h-7.297a.875.875 0 0 0-.875.735l-.517 3.237a.886.886 0 0 0 1.75.28l.403-2.52h6.553c.42.002.835.082 1.225.236a5.66 5.66 0 0 1-5.6 4.979h-4.06a.875.875 0 0 0-.875.726l-1.067 6.318h-2.852zm13.877 8.409a4.777 4.777 0 0 1-4.751 4.768h-3.5a.875.875 0 0 0-.875.727l-.875 5.346h-2.31l.193-1.216 1.05-6.291h3.307a7.4 7.4 0 0 0 7.14-5.53c.406.569.623 1.251.621 1.95z'
					></path>
				</svg>
			);
		case 'cash':
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='55'
					height='55'
					fill='none'
					viewBox='0 0 55 55'
				>
					<circle cx='27.5' cy='27.5' r='27.5' fill='#DCFAF8'></circle>
					<path
						fill='#16DBCC'
						d='M28 25.379c.496 0 .901.404.901.9a.82.82 0 0 0 1.64 0c0-1.112-.724-2.05-1.721-2.393v-.465a.821.821 0 0 0-1.64 0v.465a2.54 2.54 0 0 0-1.72 2.393A2.543 2.543 0 0 0 28 28.821c.496 0 .901.405.901.9a.902.902 0 0 1-1.801 0 .821.821 0 0 0-1.64 0c0 1.113.722 2.05 1.72 2.393v.466a.82.82 0 1 0 1.64 0v-.466a2.54 2.54 0 0 0 1.721-2.392 2.544 2.544 0 0 0-2.54-2.542.902.902 0 0 1 0-1.801m6.872 7.176a.82.82 0 0 0 1.108-.341A9.04 9.04 0 0 0 37.022 28c0-4.973-4.049-9.02-9.022-9.02-4.974 0-9.021 4.047-9.021 9.02 0 4.974 4.047 9.022 9.021 9.022a9 9 0 0 0 4.155-1.012.82.82 0 1 0-.758-1.456 7.3 7.3 0 0 1-3.397.828c-4.07 0-7.382-3.311-7.382-7.382 0-4.069 3.312-7.381 7.382-7.381S35.383 23.93 35.383 28a7.4 7.4 0 0 1-.852 3.446.82.82 0 0 0 .341 1.109M28 15.697c-2.376 0-4.683.68-6.67 1.965a.82.82 0 0 0-.244 1.134.823.823 0 0 0 1.135.243 10.63 10.63 0 0 1 5.78-1.7c5.879 0 10.66 4.782 10.66 10.661 0 5.88-4.781 10.663-10.66 10.663S17.336 33.88 17.336 28c0-2.04.578-4.023 1.673-5.733a.82.82 0 0 0-1.382-.885A12.26 12.26 0 0 0 15.698 28c0 6.785 5.517 12.303 12.302 12.303S40.303 34.785 40.303 28c0-6.783-5.519-12.303-12.303-12.303'
					></path>
				</svg>
			);
		case 'home':
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='25'
					height='25'
					fill='none'
					viewBox='0 0 25 25'
				>
					<g clipPath='url(#clip0_14_1303)'>
						<path
							fill='#B1B1B1'
							d='m24.326 10.874-.002-.002L14.126.674A2.29 2.29 0 0 0 12.498 0c-.614 0-1.192.24-1.627.674L.678 10.867l-.01.01a2.304 2.304 0 0 0 .004 3.25 2.3 2.3 0 0 0 1.598.675h.407v7.505A2.697 2.697 0 0 0 5.37 25h3.99a.73.73 0 0 0 .732-.732v-5.884a1.23 1.23 0 0 1 1.229-1.23h2.353a1.23 1.23 0 0 1 1.229 1.23v5.884c0 .404.328.732.732.732h3.99a2.697 2.697 0 0 0 2.694-2.693v-7.505h.377c.614 0 1.192-.24 1.627-.675a2.305 2.305 0 0 0 .002-3.253'
						></path>
					</g>
					<defs>
						<clipPath id='clip0_14_1303'>
							<path fill='#fff' d='M0 0h25v25H0z'></path>
						</clipPath>
					</defs>
				</svg>
			);
		case 'settings':
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='25'
					height='25'
					fill='none'
					viewBox='0 0 25 25'
				>
					<g clipPath='url(#clip0_14_1863)'>
						<path
							fill='#B1B1B1'
							d='M22.699 9.414h-.531q-.26-.811-.65-1.567l.375-.376c.912-.91.887-2.37 0-3.255l-1.108-1.11a2.3 2.3 0 0 0-3.256 0l-.376.377a10 10 0 0 0-1.567-.65V2.3A2.304 2.304 0 0 0 13.284 0h-1.569a2.304 2.304 0 0 0-2.3 2.301v.531q-.812.26-1.568.65l-.376-.375a2.3 2.3 0 0 0-3.255 0l-1.11 1.109a2.3 2.3 0 0 0 0 3.255l.377.376q-.391.756-.65 1.567H2.3A2.304 2.304 0 0 0 0 11.716v1.569a2.304 2.304 0 0 0 2.301 2.3h.531q.26.812.65 1.568l-.375.376a2.3 2.3 0 0 0 0 3.255l1.109 1.11a2.3 2.3 0 0 0 3.255 0l.376-.377q.757.391 1.567.65v.532A2.304 2.304 0 0 0 11.716 25h1.569a2.304 2.304 0 0 0 2.301-2.301v-.531q.811-.26 1.567-.65l.376.375c.909.91 2.368.889 3.255 0l1.11-1.109a2.3 2.3 0 0 0 0-3.255l-.377-.376c.26-.503.478-1.028.65-1.567h.532A2.304 2.304 0 0 0 25 13.284v-1.569a2.304 2.304 0 0 0-2.302-2.3M12.5 17.94c-3 0-5.44-2.44-5.44-5.44S9.5 7.06 12.5 7.06s5.44 2.44 5.44 5.44-2.44 5.44-5.44 5.44'
						></path>
					</g>
					<defs>
						<clipPath id='clip0_14_1863'>
							<path fill='#fff' d='M0 0h25v25H0z'></path>
						</clipPath>
					</defs>
				</svg>
			);
		case 'notification':
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='50'
					height='50'
					fill='none'
					viewBox='0 0 50 50'
				>
					<circle cx='25' cy='25' r='25' fill='#F5F7FA'></circle>
					<path
						fill='#396AFF'
						d='M24.442 37a3.91 3.91 0 0 1-3.906-3.906.782.782 0 0 1 1.562 0 2.347 2.347 0 0 0 2.344 2.343 2.347 2.347 0 0 0 2.344-2.343.782.782 0 0 1 1.562 0A3.91 3.91 0 0 1 24.442 37'
					></path>
					<path
						fill='#396AFF'
						d='M33.036 33.875H15.848a1.825 1.825 0 0 1-1.185-3.208 1 1 0 0 1 .083-.063 7 7 0 0 0 2.404-5.281v-2.906c0-4.021 3.272-7.292 7.292-7.292.167 0 .347.003.514.031a.781.781 0 1 1-.257 1.54c-.083-.013-.175-.009-.257-.009a5.736 5.736 0 0 0-5.73 5.73v2.906a8.57 8.57 0 0 1-3.023 6.532l-.046.036a.26.26 0 0 0-.055.161c0 .142.119.26.26.26h17.188c.142 0 .26-.118.26-.26a.25.25 0 0 0-.056-.161l-.045-.036a8.57 8.57 0 0 1-3.024-6.532v-1.135a.782.782 0 0 1 1.563 0v1.135c0 2.028.876 3.949 2.407 5.284a1 1 0 0 1 .08.06 1.825 1.825 0 0 1-1.186 3.207'
					></path>
					<path
						fill='#396AFF'
						d='M31.734 22.417a5.214 5.214 0 0 1-5.209-5.209A5.214 5.214 0 0 1 31.734 12a5.214 5.214 0 0 1 5.208 5.208 5.214 5.214 0 0 1-5.208 5.209m0-8.855a3.65 3.65 0 0 0-3.646 3.646 3.65 3.65 0 0 0 3.646 3.646 3.65 3.65 0 0 0 3.645-3.646 3.65 3.65 0 0 0-3.645-3.645'
					></path>
				</svg>
			);
		case 'notificationSetting':
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='50'
					height='50'
					fill='none'
					viewBox='0 0 50 50'
				>
					<circle cx='25' cy='25' r='25' fill='#F5F7FA'></circle>
					<g fill='#718EBF' clipPath='url(#clip0_14_1999)'>
						<path d='M25.285 37h-1.57a2.304 2.304 0 0 1-2.301-2.301v-.531q-.811-.26-1.567-.65l-.376.375a2.3 2.3 0 0 1-3.256 0l-1.108-1.109a2.3 2.3 0 0 1 0-3.255l.376-.376a10 10 0 0 1-.65-1.567H14.3A2.304 2.304 0 0 1 12 25.285v-1.57a2.304 2.304 0 0 1 2.302-2.3h.53q.26-.812.65-1.568l-.375-.376a2.3 2.3 0 0 1 0-3.255l1.109-1.11a2.3 2.3 0 0 1 3.255 0l.376.377q.756-.391 1.567-.65V14.3A2.304 2.304 0 0 1 23.715 12h1.57a2.304 2.304 0 0 1 2.3 2.301v.531q.812.26 1.568.65l.376-.375a2.3 2.3 0 0 1 3.256 0l1.108 1.109a2.3 2.3 0 0 1 0 3.255l-.376.376q.391.756.65 1.567h.532A2.304 2.304 0 0 1 37 23.715v1.57a2.304 2.304 0 0 1-2.301 2.3h-.531q-.26.812-.65 1.568l.375.376c.912.91.887 2.37 0 3.256l-1.109 1.109a2.3 2.3 0 0 1-3.255 0l-.376-.377c-.503.26-1.028.478-1.567.65v.532A2.304 2.304 0 0 1 25.285 37m-5.193-5.021c.7.414 1.452.726 2.238.929.323.083.549.375.549.71v1.08c0 .462.375.837.836.837h1.57a.84.84 0 0 0 .836-.836v-1.082c0-.334.226-.626.55-.709a8.6 8.6 0 0 0 2.237-.929.73.73 0 0 1 .891.113l.766.766c.33.33.86.323 1.183 0l1.11-1.11a.837.837 0 0 0 0-1.183l-.766-.766a.73.73 0 0 1-.113-.89c.414-.7.726-1.453.929-2.238a.73.73 0 0 1 .71-.55h1.08a.84.84 0 0 0 .837-.836v-1.57a.837.837 0 0 0-.836-.836h-1.082a.73.73 0 0 1-.709-.55 8.6 8.6 0 0 0-.929-2.237.73.73 0 0 1 .113-.891l.766-.766a.836.836 0 0 0 0-1.183l-1.11-1.11a.836.836 0 0 0-1.183 0l-.766.767a.73.73 0 0 1-.89.112 8.6 8.6 0 0 0-2.238-.929.73.73 0 0 1-.55-.709v-1.082a.84.84 0 0 0-.836-.836h-1.57a.84.84 0 0 0-.836.836v1.082a.73.73 0 0 1-.55.709 8.6 8.6 0 0 0-2.237.929.73.73 0 0 1-.891-.113l-.766-.766a.836.836 0 0 0-1.183 0l-1.11 1.11a.837.837 0 0 0 0 1.183l.766.766a.73.73 0 0 1 .113.89 8.6 8.6 0 0 0-.929 2.238.73.73 0 0 1-.71.55h-1.08a.84.84 0 0 0-.837.836v1.57c0 .46.375.836.837.836h1.08c.335 0 .627.226.71.55.203.785.515 1.538.929 2.237a.73.73 0 0 1-.113.891l-.766.766a.836.836 0 0 0 0 1.183l1.11 1.11a.836.836 0 0 0 1.183 0l.766-.766a.736.736 0 0 1 .89-.113'></path>
						<path d='M24.5 29.94c-3 0-5.44-2.44-5.44-5.44s2.44-5.44 5.44-5.44 5.44 2.44 5.44 5.44-2.44 5.44-5.44 5.44m0-9.415a3.98 3.98 0 0 0-3.975 3.975 3.98 3.98 0 0 0 3.975 3.975 3.98 3.98 0 0 0 3.975-3.975 3.98 3.98 0 0 0-3.975-3.975'></path>
					</g>
					<defs>
						<clipPath id='clip0_14_1999'>
							<path fill='#fff' d='M12 12h25v25H12z'></path>
						</clipPath>
					</defs>
				</svg>
			);
		case 'soarIcon':
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='25'
					height='33'
					fill='none'
					viewBox='0 0 25 33'
				>
					<path
						fill='#232323'
						fillRule='evenodd'
						d='M16.875.917a2.92 2.92 0 0 1 2.526 1.458h1.849a2.916 2.916 0 0 1 2.917 2.917v17.5a7.29 7.29 0 0 1-7.292 7.291H3.75a2.917 2.917 0 0 1-2.917-2.916V5.292A2.917 2.917 0 0 1 3.75 2.375H5.6A2.92 2.92 0 0 1 8.124.917zm-.257 10.76-6.186 6.188-2.063-2.063a1.458 1.458 0 0 0-2.062 2.062l2.99 2.991a1.604 1.604 0 0 0 2.268 0l7.117-7.115a1.458 1.458 0 1 0-2.064-2.062m-.472-7.844H8.854a.73.73 0 0 0-.717.598l-.012.132V6.02a.73.73 0 0 0 .598.717l.131.012h7.292a.73.73 0 0 0 .717-.598l.012-.131V4.563a.73.73 0 0 0-.598-.718z'
						clipRule='evenodd'
					></path>
				</svg>
			);

		case 'hamburgerIcon':
			return (
				<svg
					className='w-7 h-7 text-indigo-500'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					viewBox='0 0 24 24'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M4 6h16M4 12h16M4 18h16'
					/>
				</svg>
			);

		case 'searchIcon':
			return (
				<svg
					className='w-5 h-5 text-indigo-400'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					viewBox='0 0 24 24'
				>
					<circle cx='11' cy='11' r='8' />
					<line x1='21' y1='21' x2='16.65' y2='16.65' />
				</svg>
			);
		case 'chip':
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					xmlnsXlink='http://www.w3.org/1999/xlink'
					width='35'
					height='35'
					fill='none'
					viewBox='0 0 35 35'
				>
					<path fill='url(#pattern0_14_1323)' d='M0 0h34.771v34.771H0z'></path>
					<defs>
						<pattern
							id='pattern0_14_1323'
							width='1'
							height='1'
							patternContentUnits='objectBoundingBox'
						>
							<use xlinkHref='#image0_14_1323' transform='scale(.01)'></use>
						</pattern>
						<image
							xlinkHref='data:image/png;base64,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'
							id='image0_14_1323'
							width='100'
							height='100'
							preserveAspectRatio='none'
						></image>
					</defs>
				</svg>
			);
			case 'chip2':
			return (
				<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="35"
    height="35"
    fill="none"
    viewBox="0 0 35 35"
  >
    <path fill="url(#pattern0_14_1343)" d="M0 0h34.771v34.771H0z"></path>
    <defs>
      <pattern
        id="pattern0_14_1343"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#image0_14_1343" transform="scale(.01)"></use>
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="image0_14_1343"
        width="100"
        height="100"
        preserveAspectRatio="none"
      ></image>
    </defs>
  </svg>
			);

		default:
			return null;
	}
}

