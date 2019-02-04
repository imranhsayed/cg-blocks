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
	}
}