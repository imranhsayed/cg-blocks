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
		mediaID: {
			type: 'number'
		},
		mediaURL: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src'
		}
	},
	edit: function edit(props) {
		var className = props.className,
		    _props$attributes = props.attributes,
		    mediaID = _props$attributes.mediaID,
		    mediaURL = _props$attributes.mediaURL;


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
			)
		);
	},

	save: function save(props) {
		var className = props.className,
		    mediaURL = props.attributes.mediaURL;


		return wp.element.createElement(
			'div',
			{ className: className },
			mediaURL && wp.element.createElement('img', { className: 'cg-contact-card-image', src: mediaURL, alt: __('Some Image', 'cg-blocks') })
		);
	}
});

/***/ })
/******/ ]);