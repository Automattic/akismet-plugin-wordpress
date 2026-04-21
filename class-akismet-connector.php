<?php
/**
 * Akismet Connector integration.
 *
 * @package Akismet
 */

declare( strict_types = 1 );

/**
 * Integrates Akismet with the WordPress Connectors framework,
 * handling API key validation and connection status reporting.
 */
class Akismet_Connector {

	/**
	 * Register hooks for the WordPress Connectors integration.
	 */
	public static function init() {
		add_action( 'wp_connectors_init', array( 'Akismet_Connector', 'register_connector' ) );

		// Priority 9 so we validate the real key before core's connector masking filter at priority 10.
		add_filter( 'rest_post_dispatch', array( 'Akismet_Connector', 'validate_api_key' ), 9, 3 );
		add_filter( 'script_module_data_options-connectors-wp-admin', array( 'Akismet_Connector', 'set_connected_status' ), 11 );
	}

	/**
	 * Validate the Akismet API key when saved via the connectors REST settings endpoint.
	 * If the key is invalid, revert it to an empty string.
	 *
	 * @param WP_REST_Response $response The response object.
	 * @param WP_REST_Server   $server   The server instance.
	 * @param WP_REST_Request  $request  The request object.
	 * @return WP_REST_Response
	 */
	public static function validate_api_key( $response, $server, $request ) {
		if ( '/wp/v2/settings' !== $request->get_route() ) {
			return $response;
		}

		if ( 'POST' !== $request->get_method() && 'PUT' !== $request->get_method() ) {
			return $response;
		}

		$data = $response->get_data();
		if ( ! is_array( $data ) || ! array_key_exists( 'wordpress_api_key', $data ) ) {
			return $response;
		}

		$key = $data['wordpress_api_key'];
		if ( ! is_string( $key ) || '' === $key ) {
			return $response;
		}

		if ( 'invalid' === Akismet::verify_key( $key ) ) {
			update_option( 'wordpress_api_key', '' );
			$data['wordpress_api_key'] = '';
			$response->set_data( $data );
		}

		return $response;
	}

	/**
	 * Set the isConnected status for the Akismet connector based on actual key validity.
	 *
	 * @param array $data Script module data.
	 * @return array
	 */
	public static function set_connected_status( $data ) {
		if ( ! isset( $data['connectors']['akismet']['authentication'] ) ) {
			return $data;
		}

		$key = Akismet::get_api_key();

		if ( empty( $key ) ) {
			$data['connectors']['akismet']['authentication']['isConnected'] = false;
			return $data;
		}

		$data['connectors']['akismet']['authentication']['isConnected'] = ( 'valid' === Akismet::verify_key( $key ) );

		return $data;
	}

	/**
	 * Register the Akismet connector with an is_active callback so the
	 * connectors page can detect Akismet as active when installed as a mu-plugin.
	 *
	 * We re-register the full connector rather than patching the core one
	 * so that Akismet still has a connector even if core removes its own.
	 *
	 * @see https://github.com/WordPress/gutenberg/pull/76994
	 *
	 * @param WP_Connector_Registry $registry Connector registry instance.
	 */
	public static function register_connector( $registry ) {
		if ( method_exists( $registry, 'is_registered' ) && $registry->is_registered( 'akismet' ) ) {
			$registry->unregister( 'akismet' );
		}

		$registry->register(
			'akismet',
			array(
				'name'           => __( 'Akismet Anti-spam', 'akismet' ),
				'description'    => __( 'Protect your site from spam.', 'akismet' ),
				'type'           => 'spam_filtering',
				'plugin'         => array(
					'file'      => 'akismet/akismet.php',
					'is_active' => function () {
						return defined( 'AKISMET_VERSION' );
					},
				),
				'authentication' => array(
					'method'          => 'api_key',
					'credentials_url' => 'https://akismet.com/get/',
					'setting_name'    => 'wordpress_api_key',
					'constant_name'   => 'WPCOM_API_KEY',
				),
			)
		);
	}
}
