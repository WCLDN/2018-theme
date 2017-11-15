<?php
/*
Plugin Name: WCLDN 2018 CSS + Style guide
Plugin URI: https://github.com/WCLDN/2018-theme
Description: CSS + Style guide for the WordCamp London 2018 theme
Version: 1.0
Author: Lorelei Aurora
Author URI: https://l5i.me/
Text Domain: wcldn-2018
Domain Path: /languages/
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

*/

add_action( 'wp_enqueue_scripts', function () {

	// remove base CSS from theme
	wp_dequeue_style( 'campsite-2017-style' );

	// add typekit fonts
	wp_enqueue_script( 'wcldn-2018-typekit', 'https://use.typekit.net/cjk7ivm.js' );
	wp_add_inline_script( 'wcldn-2018-typekit', 'try{Typekit.load({ async: true });}catch(e){}' );

	// enqueue built css
	wp_enqueue_style( 'wcldn-2018', plugins_url( '/build/stylesheets/style.css', __FILE__ ) );
}, 100 );
