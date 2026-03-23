<?php
/**
 * Represents a Base Ability.
 *
 * This class holds a default constructor to register the ability and a default permission.
 *
 * @package Akismet
 * @since 5.7
 */

declare( strict_types = 1 );
abstract class Akismet_Ability {

	/**
	 * Get the ability name.
	 *
	 * Classes extending this must implement this method to provide the ability name into the registration.
	 *
	 * @return string The ability name.
	 */
	abstract protected function get_ability_name(): string;

	/**
	 * Get the ability name.
	 *
	 * Classes extending this must implement this method to provide the ability name into the registration.
	 *
	 * @return array The ability configuration array.
	 */
	abstract protected function get_config(): array;

	/**
	 * Constructor - registers the ability.
	 */
	public function __construct() {
		wp_register_ability(
			$this->get_ability_name(),
			$this->get_config()
		);
	}

	/**
	 * Permission callback for any ability that uses this trait.
	 *
	 * @param array|null $input The input parameters (unused).
	 * @return bool Whether the current user can use this ability.
	 */
	public function current_user_has_permission( ?array $input = null ): bool {
		return current_user_can( 'moderate_comments' );
	}
}
