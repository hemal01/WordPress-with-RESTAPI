<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array('parent-style')        
    );

    wp_enqueue_script( 'api-custom-js', get_stylesheet_directory_uri() . '/js/custom-api.js', NULL, 1.0, true );
    wp_enqueue_script( 'api-main-js', get_stylesheet_directory_uri() . '/js/api-main.js', NULL, 1.0, true );

    wp_localize_script( 'api-custom-js', 'additionalaData', array(        
        'nonce' => wp_create_nonce( 'wp_rest' ),
        // 'siteURL' => site_url(),
      ) );
}
?>