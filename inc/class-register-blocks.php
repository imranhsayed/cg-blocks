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

	/**
	 * Enqueue Editor Scripts.
	 */
	public function enqueue_blocks_scripts() {

		// Block front end styles.
		wp_register_style(
			'cg-block-front-end-styles',
			CB_PLUGIN_URL . '/blocks/styles.css',
			array( 'wp-edit-blocks' ),
			filemtime( CB_PLUGIN_DIR_PATH . 'blocks/styles.css' )
		);

		// Block editor styles.
		wp_register_style(
			'cg-block-editor-styles',
			CB_PLUGIN_URL . '/blocks/editor.css',
			array( 'wp-edit-blocks' ),
			filemtime( CB_PLUGIN_DIR_PATH . 'blocks/editor.css' )
		);

		// Font Awesome Styles.
		wp_enqueue_style(
			'cg-block-font-awesome-styles',
			'https://use.fontawesome.com/releases/v5.7.1/css/all.css',
			array( 'wp-edit-blocks', 'cg-block-front-end-styles', 'cg-block-editor-styles' ),
			'1.0'
		);

		// Block Editor Script.
		wp_register_script(
			'cg-block-editor-js',
			CB_PLUGIN_URL . '/dist/index.js',
			array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n' ),
			filemtime( CB_PLUGIN_DIR_PATH . 'dist/index.js' ),
			true
		);

		register_block_type(
			'cg-blocks/contact-card-block',
			array(
				'style'         => 'cg-block-front-end-styles',
				'editor_style'  => 'cg-block-editor-styles',
				'editor_script' => 'cg-block-editor-js',
			)
		);

		if ( function_exists( 'wp_set_script_translations' ) ) {
			/**
			 * Sets translated strings for the block script.
			 */
			wp_set_script_translations( 'cg-block-editor-js', 'cg-blocks' );
		}
	}

}