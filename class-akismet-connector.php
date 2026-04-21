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
}
