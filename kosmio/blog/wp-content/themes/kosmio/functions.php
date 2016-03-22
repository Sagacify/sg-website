<?php

	// Images à la une
	add_theme_support( 'post-thumbnails' );

	// Enlever les attributs height,width sur les images
	add_filter( 'post_thumbnail_html', 'remove_width_attribute', 10 );
	add_filter( 'image_send_to_editor', 'remove_width_attribute', 10 );

	function remove_width_attribute( $html ) {
	$html = preg_replace( '/(width|height)="\d*"\s/', "", $html );
	return $html; 
	}