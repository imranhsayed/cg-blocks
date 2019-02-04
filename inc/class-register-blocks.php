<?php
/**
 * Class Register_Blocks
 *
 * @package Gutenberg Contact Card Block
 */

namespace cg_blocks;

/**
 * Class Register_Blocks
 *
 * @package Gutenberg Contact Card Block
 */
class Register_Blocks {
	/**
	 * Constructor function.
	 */
	public function __construct() {

		if ( ! function_exists( 'register_block_type' ) ) {

			// Gutenberg is not active.
			return;
		}
		add_action( 'init', array( $this, 'load_textdomain' ) );
	}

	/**
	 * Load all translations for our plugin from the MO file.
	 */
	public function load_textdomain() {
		load_plugin_textdomain( 'cg-blocks', false, CB_PLUGIN_DIR_PATH . 'languages' );
	}

}