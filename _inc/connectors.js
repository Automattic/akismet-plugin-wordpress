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
			logo: createElement( 'img', { src : akismetConnectorsData.connector_logo } ),
			render: AkismetConnector
		} );
	}
}

function AkismetConnector( { name, description, logo } ) {
	const [ isExpanded, setIsExpanded ] = useState( false );

	return createElement(
		ConnectorItem,
		{
			name: name,
			description,
			logo,
			actionArea: createElement(
				Button,
				{
					variant: 'secondary',
					size: 'compact',
					onClick: () => setIsExpanded( ! isExpanded ),
					'aria-expanded': isExpanded,
				},
				isExpanded ? akismetConnectorsData.strings['Close'] : akismetConnectorsData.strings['View details']
			),
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
							{ className : 'akismet-connector-instructions' },
							createElement(
								'span',
								{},
								akismetConnectorsData.strings['Your Akismet API key is pre-configured and cannot be changed.']
							),
							createElement(
								'a',
								{ href: akismetConnectorsData.manage_akismet_url },
								akismetConnectorsData.strings['Manage your other Akismet settings here.']
							)
						)
					)
				)
				:
				(
					akismetConnectorsData.api_key ?
					// API key is configurable and set.
					(
						createElement(
							'div',
							{ className : 'components-flex components-h-stack components-v-stack connector-settings' },
							createElement(
								'div',
								{ className : 'components-base-control' },
								createElement(
									'div',
									{ className : 'components-base-control__field' },
									createElement(
										'label',
										{ className : 'akismet-api-key-label' },
										akismetConnectorsData.strings['API key']
									),
									createElement(
										'input',
										{
											className : 'components-text-control__input is-next-40px-default-size',
											type : 'text',
											value : akismetConnectorsData.api_key,
											disabled : true,
										}
									)
								),
								createElement(
									'p',
									{ className : 'akismet-connector-oneline-link' },
									createElement(
										'a',
										{ href: akismetConnectorsData.manage_akismet_url },
										akismetConnectorsData.strings['Manage your Akismet connection here.']
									)
								)
							)
						)
					)
					:
					// API key is configurable but not set.
					(
						createElement(
							'div',
							{},
							createElement(
								'p',
								{ className: 'akismet-connector-instructions' },
								createElement(
									'span',
									{},
									akismetConnectorsData.strings['Connect Akismet to start protecting your site from spam.']
								),
								createElement(
									'a',
									{ href: akismetConnectorsData.manage_akismet_url },
									akismetConnectorsData.strings['Set up your Akismet connection here.']
								)
							)
						)
					)
				)
		)
	);
}
