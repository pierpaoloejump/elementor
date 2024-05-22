import React from 'react';
import { SvgIcon } from '@elementor/ui';

const ZoomInIcon = React.forwardRef( ( props, ref ) => {
	return (
		<SvgIcon viewBox="0 0 24 24" { ...props } ref={ ref }>
			<path fillRule="evenodd" clipRule="evenodd" d="M10 3.75C6.54822 3.75 3.75 6.54822 3.75 10C3.75 13.4518 6.54822 16.25 10 16.25C13.4518 16.25 16.25 13.4518 16.25 10C16.25 6.54822 13.4518 3.75 10 3.75ZM2.25 10C2.25 5.71979 5.71979 2.25 10 2.25C14.2802 2.25 17.75 5.71979 17.75 10C17.75 14.2802 14.2802 17.75 10 17.75C5.71979 17.75 2.25 14.2802 2.25 10Z" />
			<path fillRule="evenodd" clipRule="evenodd" d="M6.25 10C6.25 9.58579 6.58579 9.25 7 9.25H13C13.4142 9.25 13.75 9.58579 13.75 10C13.75 10.4142 13.4142 10.75 13 10.75H7C6.58579 10.75 6.25 10.4142 6.25 10Z" />
			<path fillRule="evenodd" clipRule="evenodd" d="M10 6.25C10.4142 6.25 10.75 6.58579 10.75 7V13C10.75 13.4142 10.4142 13.75 10 13.75C9.58579 13.75 9.25 13.4142 9.25 13V7C9.25 6.58579 9.58579 6.25 10 6.25Z" />
			<path fillRule="evenodd" clipRule="evenodd" d="M14.4697 14.4697C14.7626 14.1768 15.2374 14.1768 15.5303 14.4697L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L14.4697 15.5303C14.1768 15.2374 14.1768 14.7626 14.4697 14.4697Z" />
		</SvgIcon>
	);
} );

export default ZoomInIcon;
