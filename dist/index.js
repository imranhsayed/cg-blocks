/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * Contact Card Block
 */

var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload;
var Button = wp.components.Button;

/**
 * Registers a new Gutenberg block Contact Card
 */

registerBlockType('cg-blocks/contact-card-block', {
	title: __('Contact Card', 'cg-blocks'),
	icon: 'index-card',
	category: 'layout',
	attributes: {
		title: {
			type: 'array',
			source: 'children',
			selector: '.cg-title'
		},
		subtitle: {
			type: 'array',
			source: 'children',
			selector: '.cg-subtitle'
		},
		mediaID: {
			type: 'number'
		},
		mediaURL: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src'
		},
		description: {
			type: 'array',
			source: 'children',
			selector: '.cg-description'
		},
		twitterLink: {
			attribute: 'href',
			source: 'attribute',
			selector: '.twitter-link'
		},
		facebookLink: {
			attribute: 'href',
			source: 'attribute',
			selector: '.facebook-link'
		},
		emailAddress: {
			type: 'array',
			source: 'children',
			selector: '.email-address'
		}
	},
	edit: function edit(props) {
		var className = props.className,
		    _props$attributes = props.attributes,
		    title = _props$attributes.title,
		    subtitle = _props$attributes.subtitle,
		    mediaID = _props$attributes.mediaID,
		    mediaURL = _props$attributes.mediaURL,
		    description = _props$attributes.description,
		    twitterLink = _props$attributes.twitterLink,
		    facebookLink = _props$attributes.facebookLink,
		    emailAddress = _props$attributes.emailAddress,
		    setAttributes = props.setAttributes;

		var onChangeTitle = function onChangeTitle(value) {
			setAttributes({ title: value });
		};

		var onChangeSubTitle = function onChangeSubTitle(value) {
			setAttributes({ subtitle: value });
		};

		var onSelectImage = function onSelectImage(media) {
			setAttributes({
				mediaURL: media.url,
				mediaID: media.id
			});
		};

		var onChangeDescription = function onChangeDescription(value) {
			setAttributes({ description: value });
		};

		var onChangeTwitterLink = function onChangeTwitterLink(value) {
			props.setAttributes({ twitterLink: value });
		};

		var onChangeFacebookLink = function onChangeFacebookLink(value) {
			props.setAttributes({ facebookLink: value });
		};

		var onChangeEmailAddress = function onChangeEmailAddress(value) {
			setAttributes({ emailAddress: value });
		};

		return wp.element.createElement(
			'div',
			{ className: className },
			wp.element.createElement(
				'div',
				{ className: 'contact-card-image-container' },
				wp.element.createElement(MediaUpload, {
					onSelect: onSelectImage,
					allowedTypes: 'image',
					value: mediaID,
					render: function render(_ref) {
						var open = _ref.open;
						return wp.element.createElement(
							Button,
							{ className: mediaID ? 'image-button' : 'button button-large', onClick: open },
							!mediaID ? __('Upload Image', 'cg-blocks') : wp.element.createElement('img', { src: mediaURL, className: 'cg-contact-card-image', alt: __('Upload Contact Person\'s Image', 'cg-blocks') })
						);
					}
				})
			),
			wp.element.createElement(RichText, {
				tagName: 'h4',
				placeholder: __('Name', 'cg-blocks'),
				value: title,
				onChange: onChangeTitle,
				className: 'cg-title'
			}),
			wp.element.createElement(RichText, {
				tagName: 'p',
				placeholder: __('Subtitle', 'cg-blocks'),
				value: subtitle,
				onChange: onChangeSubTitle,
				className: 'cg-subtitle'
			}),
			wp.element.createElement(RichText, {
				tagName: 'div',
				multiline: 'p',
				placeholder: __('Description', 'cg-blocks'),
				value: description,
				onChange: onChangeDescription,
				className: 'cg-description'
			}),
			wp.element.createElement(
				'div',
				{ className: 'cg-twitter-container' },
				wp.element.createElement('i', { className: 'fab fa-twitter' }),
				wp.element.createElement(RichText, {
					format: 'string',
					placeholder: __('Enter twitter link', 'cg-blocks'),
					value: twitterLink,
					onChange: onChangeTwitterLink,
					className: 'twitter-link'
				})
			),
			wp.element.createElement(
				'div',
				{ className: 'cg-facebook-container' },
				wp.element.createElement('i', { className: 'fab fa-facebook' }),
				wp.element.createElement(RichText, {
					format: 'string',
					placeholder: __('Enter facebook link', 'cg-blocks'),
					value: facebookLink,
					onChange: onChangeFacebookLink,
					className: 'facebook-link'
				})
			),
			wp.element.createElement(
				'div',
				{ className: 'cg-email-container' },
				wp.element.createElement('i', { className: 'fas fa-envelope' }),
				wp.element.createElement(RichText, {
					tagName: 'p',
					placeholder: __('Enter email link', 'cg-blocks'),
					value: emailAddress,
					onChange: onChangeEmailAddress,
					className: 'email-address'
				})
			)
		);
	},

	save: function save(props) {
		var className = props.className,
		    _props$attributes2 = props.attributes,
		    title = _props$attributes2.title,
		    subtitle = _props$attributes2.subtitle,
		    mediaURL = _props$attributes2.mediaURL,
		    description = _props$attributes2.description,
		    twitterLink = _props$attributes2.twitterLink,
		    facebookLink = _props$attributes2.facebookLink,
		    emailAddress = _props$attributes2.emailAddress;


		return wp.element.createElement(
			'div',
			{ className: className },
			mediaURL && wp.element.createElement('img', { className: 'cg-contact-card-image', src: mediaURL, alt: __('Some Image', 'cg-blocks') }),
			wp.element.createElement(RichText.Content, { tagName: 'h2', className: 'cg-title', value: title }),
			wp.element.createElement(RichText.Content, { tagName: 'p', className: 'cg-subtitle', value: subtitle }),
			wp.element.createElement(RichText.Content, { tagName: 'div', className: 'cg-description', value: description }),
			twitterLink && wp.element.createElement(
				'div',
				{ className: 'cg-twitter-link-container' },
				wp.element.createElement('i', { className: 'fab fa-twitter' }),
				wp.element.createElement(
					'a',
					{ href: twitterLink, className: 'twitter-link' },
					twitterLink
				)
			),
			facebookLink && wp.element.createElement(
				'div',
				{ className: 'cg-facebook-link-container' },
				wp.element.createElement('i', { className: 'fab fa-facebook' }),
				wp.element.createElement(
					'a',
					{ href: facebookLink, className: 'facebook-link' },
					facebookLink
				)
			),
			emailAddress && wp.element.createElement(
				'div',
				{ className: 'cg-email-address-container' },
				wp.element.createElement('i', { className: 'fas fa-envelope' }),
				wp.element.createElement(RichText.Content, { tagName: 'p', href: emailAddress, className: 'email-address', value: emailAddress })
			)
		);
	}
});

/***/ })
/******/ ]);