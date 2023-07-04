<?php

/**
 * Plugin Name:         Welcome Popup viewer
 * Plugin URI:          https://wordpress.org/plugins/welcome-popup-viewer
 * Description:         A simple plugin to show a popup when a user come to the website.
 * Version:             1.00
 * Author:              Habibul Islam
 * Author URI:          https://www.facebook.com/habibul.islam.1082/
 * Requires at least:   5.2
 * Requires PHP:        7.2
 * License:             GPLv2 or later
 * License URI:         http://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:         wpv
 * Update URI:          https://github.com/hihabib/Welcome-popup-viewer-WP-Plugin
 */

define('PLUGIN_URL', plugins_url('', __FILE__));


add_action('wp_enqueue_scripts', 'wpv_style_and_scripts');
function wpv_style_and_scripts():void
{
    wp_enqueue_script('wpv_script', PLUGIN_URL . '/js/script.js');
    wp_enqueue_style('wpv_style', PLUGIN_URL . '/css/style.css');
}



