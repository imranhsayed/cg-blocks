/**
 * Contact Card Block
 */

const { __, setLocaleData } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload } = wp.editor;
const { Button } = wp.components;

/**
 * Registers a new Gutenberg block Contact Card
 */
registerBlockType(
	'cg-blocks/contact-card-block',
	{
		title: __( 'Contact Card', 'cg-blocks' ),
		icon: 'index-card',
		category: 'layout',
		attributes: {
			mediaID: {
				type: 'number',
			},
			mediaURL: {
				type: 'string',
				source: 'attribute',
				selector: 'img',
				attribute: 'src',
			}
		},
		edit: ( props ) => {
			const {
				className,
				attributes: {
					mediaID,
					mediaURL,
				},
			} = props;

			return (
				<div className={ className }>
					<div className="contact-card-image-container">
						<MediaUpload
							onSelect={ onSelectImage }
							allowedTypes="image"
							value={ mediaID }
							render={ ( { open } ) => (
								<Button className={ mediaID ? 'image-button' : 'button button-large' } onClick={ open }>
									{ ! mediaID ? __( 'Upload Image', 'cg-blocks' ) : <img src={ mediaURL } className="cg-contact-card-image" alt={ __( 'Upload Contact Person\'s Image', 'cg-blocks' ) } /> }
								</Button>
							) }
						/>
					</div>
				</div>
			);
		},

		save: ( props ) => {
			const {
				className,
				attributes: {
					mediaURL,
				},
			} = props;

			return (
				<div className={ className }>
					{
						mediaURL && (
							<img className="cg-contact-card-image" src={ mediaURL } alt={ __( 'Some Image', 'cg-blocks' ) } />
						)
					}
				</div>
			);
		},
	}
);
