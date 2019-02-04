<?php
/**
 * Plugin Name: Gutenberg Contact Card Block
 * Plugin URI: https://imransayed.com
 * Description: This plugin creates a custom gutenberg contact card block
 * Version: 1.0.0
 * Author: Imran Sayed
 * Author URI: https://profiles.wordpress.org/gsayed786
 * License: GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: cg-blocks
 * Domain Path: /languages
 *
 * @package Gutenberg Contact Card Block
 */

defined( 'ABSPATH' ) || exit;

define( 'CB_PLUGIN_URL', plugins_url( 'cg-blocks' ) );
define( 'CB_PLUGIN_DIR_PATH', plugin_dir_path( __FILE__ ) );


if ( version_compare( phpversion(), '5.3', '>=' ) ) {
	require_once 'inc/class-register-blocks.php';
	/**
	 * Registers Custom Card block.
	 */
	function cf_register_blocks() {
		new \cg_blocks\Register_Blocks();
	}
	add_action( 'plugins_loaded', 'cf_register_blocks' );
} else {
	if ( defined( 'WP_CLI' ) ) {
		WP_CLI::warning( _cg_gutenberg_blocks_php_version_text() );
	} else {
		add_action( 'admin_notices', '_cg_gutenberg_blocks_php_version_error' );
	}
}

/**
 * Admin notice for incompatible versions of PHP.
 */
function _cg_gutenberg_blocks_php_version_error() {
	printf( '<div class="error"><p>%s</p></div>', esc_html( _cg_gutenberg_blocks_php_version_text() ) );
}

/**
 * String describing the minimum PHP version.
 *
 * @return string
 */
function _cg_gutenberg_blocks_php_version_text() {
	return esc_html__( 'Cb Gutenberg Blocks plugin error: Your version of PHP is too old to run this plugin. You must be running PHP 5.3 or higher.', 'cg-blocks' );
}
