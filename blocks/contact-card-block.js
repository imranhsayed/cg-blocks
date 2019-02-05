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
			title: {
				type: 'array',
				source: 'children',
				selector: '.cg-title',
			},
			subtitle: {
				type: 'array',
				source: 'children',
				selector: '.cg-subtitle'
			},
			mediaID: {
				type: 'number',
			},
			mediaURL: {
				type: 'string',
				source: 'attribute',
				selector: 'img',
				attribute: 'src',
			},
			description: {
				type: 'array',
				source: 'children',
				selector: '.cg-description',
			},
			twitterLink: {
				attribute: 'href',
				source: 'attribute',
				selector: '.twitter-link',
			},
			facebookLink: {
				attribute: 'href',
				source: 'attribute',
				selector: '.facebook-link',
			},
			emailAddress: {
				type: 'array',
				source: 'children',
				selector: '.email-address',
			},
		},
		edit: ( props ) => {
			const {
				className,
				attributes: {
					title,
					subtitle,
					mediaID,
					mediaURL,
					description,
					twitterLink,
					facebookLink,
					emailAddress,
				},
				setAttributes,
			} = props;
			const onChangeTitle = ( value ) => {
				setAttributes( { title: value } );
			};

			const onChangeSubTitle = ( value ) => {
				setAttributes( { subtitle: value } );
			};

			const onSelectImage = ( media ) => {
				setAttributes( {
					mediaURL: media.url,
					mediaID: media.id,
				} );
			};

			const onChangeDescription = ( value ) => {
				setAttributes( { description: value } );
			};

			const onChangeTwitterLink = ( value ) => {
				props.setAttributes( { twitterLink: value } );
			};

			const onChangeFacebookLink = ( value ) => {
				props.setAttributes( { facebookLink: value } );
			};

			const onChangeEmailAddress = ( value ) => {
				setAttributes( { emailAddress: value } );
			};

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
					<RichText
						tagName="h4"
						placeholder={ __( 'Name', 'cg-blocks' ) }
						value={ title }
						onChange={ onChangeTitle }
						className="cg-title"
					/>
					<RichText
						tagName="p"
						placeholder={ __( 'Subtitle', 'cg-blocks' ) }
						value={ subtitle }
						onChange={ onChangeSubTitle }
						className="cg-subtitle"
					/>
					<RichText
						tagName="div"
						multiline="p"
						placeholder={ __( 'Description', 'cg-blocks' ) }
						value={ description }
						onChange={ onChangeDescription }
						className="cg-description"
					/>
					<div className="cg-twitter-container">
						<i className="fab fa-twitter"/>
						<RichText
							format="string"
							placeholder={ __( 'Enter twitter link', 'cg-blocks' ) }
							value={ twitterLink }
							onChange={ onChangeTwitterLink }
							className="twitter-link"
						/>
					</div>
					<div className="cg-facebook-container">
						<i className="fab fa-facebook"/>
						<RichText
							format="string"
							placeholder={ __( 'Enter facebook link', 'cg-blocks' ) }
							value={ facebookLink }
							onChange={ onChangeFacebookLink }
							className="facebook-link"
						/>
					</div>
					<div className="cg-email-container">
						<i className="fas fa-envelope"/>
						<RichText
							tagName="p"
							placeholder={ __( 'Enter email link', 'cg-blocks' ) }
							value={ emailAddress }
							onChange={ onChangeEmailAddress }
							className="email-address"
						/>
					</div>
				</div>
			);
		},

		save: ( props ) => {
			const {
				className,
				attributes: {
					title,
					subtitle,
					mediaURL,
					description,
					twitterLink,
					facebookLink,
					emailAddress
				},
			} = props;

			return (
				<div className={ className }>
					{
						mediaURL && (
							<img className="cg-contact-card-image" src={ mediaURL } alt={ __( 'Some Image', 'cg-blocks' ) } />
						)
					}
					<RichText.Content tagName="h2" className="cg-title" value={ title } />
					<RichText.Content tagName="p" className="cg-subtitle" value={ subtitle } />

					<RichText.Content tagName="div" className="cg-description" value={ description } />

					{ twitterLink && (
						<div className="cg-twitter-link-container">
							<i className="fab fa-twitter"/>
							<a href={twitterLink} className="twitter-link">{twitterLink}</a>
						</div>
					) }
					{ facebookLink && (
						<div className="cg-facebook-link-container">
							<i className="fab fa-facebook"/>
							<a href={facebookLink} className="facebook-link">{facebookLink}</a>
						</div>
					) }
					{ emailAddress && (
						<div className="cg-email-address-container">
							<i className="fas fa-envelope"/>
							<RichText.Content tagName="p" href={ emailAddress } className="email-address" value={ emailAddress } />
						</div>
					) }
				</div>
			);
		},
	}
);
