const {
	__experimentalRegisterConnector: registerConnector,
	__experimentalConnectorItem: ConnectorItem,
} = await import( '@wordpress/connectors' );

const { createElement, useState } = wp.element;
const { Button } = wp.components;

var akismetConnectorsData = {};

// Guard against the experimental APIs going away or changing names.
if ( registerConnector && ConnectorItem ) {
	// Retrieve the localized strings and variables set up on the server side.
	const dataContainer = document.getElementById( 'wp-script-module-data-akismet-connectors' );

	if ( dataContainer ) {
		try {
			akismetConnectorsData = JSON.parse( dataContainer.textContent );
		} catch {
		}
	}

	if ( akismetConnectorsData ) {
		registerConnector( 'akismet', {
			name: 'Akismet',
			description: akismetConnectorsData.strings['Protect your site from spam.'],
			logo: createElement( 'img', { src : akismetConnectorsData.connector_logo, alt: akismetConnectorsData.strings['Akismet logo'] } ),
			render: AkismetConnector
		} );
	}
}

function AkismetConnector( { name, description, logo } ) {
	const [ isExpanded, setIsExpanded ] = useState( false );
	const [ apiKey, setApiKey ] = useState( akismetConnectorsData.api_key || '' );
	const [ isConnected, setIsConnected ] = useState( !! akismetConnectorsData.api_key );
	const [ isSaving, setIsSaving ] = useState( false );
	const [ statusMessage, setStatusMessage ] = useState( '' );

	function handleSave() {
		setIsSaving( true );
		setStatusMessage( '' );

		let request;

		if ( apiKey ) {
			request = wp.apiFetch( {
				path: '/akismet/v1/key',
				method: 'POST',
				data: { key: apiKey },
			} );
		} else {
			request = wp.apiFetch( {
				path: '/akismet/v1/key',
				method: 'DELETE',
			} );
		}

		request.then( function () {
			if ( apiKey ) {
				setIsConnected( true );
				setStatusMessage( akismetConnectorsData.strings['API key saved successfully.'] );
			} else {
				setIsConnected( false );
				setStatusMessage( akismetConnectorsData.strings['Your API key has been deleted.'] );
			}
		} ).catch( function ( error ) {
			setStatusMessage( error.message || akismetConnectorsData.strings['An unexpected error occurred. Please try again later.'] );
		} ).finally( function () {
			setIsSaving( false );
		} );
	}

	function getHelpText() {
		if ( statusMessage ) {
			return createElement(
				'p',
				{ className : 'akismet-connector__status' },
				statusMessage
			);
		}

		if ( ! isConnected && ! isSaving ) {
			return createElement(
				'p',
				{ className : 'akismet-connector__status' },
				createElement(
					'a',
					{ href: 'https://akismet.com/get/?utm_source=akismet_plugin&utm_campaign=plugin_static_link&utm_medium=in_plugin&utm_content=connectors', target : '_blank' },
					akismetConnectorsData.strings['Get your API key at akismet.com']
				)
			);
		}

		return null;
	}

	return createElement(
		ConnectorItem,
		{
			name,
			description,
			logo,
			actionArea: createElement(
				'div',
				{ className : 'components-flex components-h-stack akismet-connector__action-area' },
				createElement(
					'span',
					{
						className : 'akismet-connector__connected-notice',
						style : {
							display : akismetConnectorsData.api_key_predefined || isConnected ? '' : 'none'
						}
					},
					akismetConnectorsData.strings['Connected']
				),
				createElement(
					Button,
					{
						variant: ( isExpanded || ! isConnected ) ? 'secondary' : 'tertiary',
						size: 'compact',
						onClick: () => { setIsExpanded( ! isExpanded ); setStatusMessage( '' ); },
						'aria-expanded': isExpanded,
					},
					(
						isExpanded ?
						akismetConnectorsData.strings['Cancel'] : (
							akismetConnectorsData.api_key_predefined ?
							akismetConnectorsData.strings['View details'] :
							(
								isConnected ?
								akismetConnectorsData.strings['Edit'] :
								akismetConnectorsData.strings['Set up']
							)
						)
					)
				)
			)
		},
		isExpanded && (
			akismetConnectorsData.api_key_predefined ?
				// API key is preconfigured via a constant or some other filter.
				(
					createElement(
						'div',
						{},
						createElement(
							'p',
							{ className : 'akismet-connector__instructions' },
							createElement(
								'span',
								{},
								akismetConnectorsData.strings['Your Akismet API key is pre-configured and cannot be changed.']
							),
							createElement(
								'a',
								{ href: akismetConnectorsData.manage_akismet_url },
								akismetConnectorsData.strings['Manage your other Akismet settings']
							)
						)
					)
				)
				:
				(
					createElement(
						'div',
						{ className : 'components-flex components-h-stack components-v-stack connector-settings akismet-connector__settings' },
						createElement(
							'div',
							{ className : 'components-base-control' },
							createElement(
								'div',
								{ className : 'components-base-control__field' },
								createElement(
									'label',
									{ className : 'akismet-connector__key-label' },
									akismetConnectorsData.strings['API key']
								),
								createElement(
									'input',
									{
										className : 'components-text-control__input is-next-40px-default-size',
										type : 'text',
										value : apiKey,
										onChange : function ( e ) {
											setApiKey( e.target.value );
										}
									}
								)
							),
							getHelpText()
						),
						createElement(
							'div',
							{ className : 'components-flex components-h-stack' },
							createElement(
								Button,
								{
									variant : 'primary',
									size : 'default',
									isBusy : isSaving,
									disabled : isSaving,
									onClick : handleSave,
								},
								akismetConnectorsData.strings['Save']
							)
						)
					)
				)
		)
	);
}
