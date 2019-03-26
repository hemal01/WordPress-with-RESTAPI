<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'meta_demo');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'I&#Rw,kx3aF#+3fF/*Bc[S(|(8^.}H{~ySi`wiB9oZ9]bC~$NBPw|FQ FeEHEW@V');
define('SECURE_AUTH_KEY',  'Er[X7];&Up<(}XoGk knh6O&<h8H Bd5%5l|Z,FliVBn}Fd%9;&~oTTuMa`@~{YE');
define('LOGGED_IN_KEY',    'w]I2|w$dxmpT8+1dqi_D*0c)P$LBN|Da$|q;l=S .f]pWH^Z9tD?TO^KLji%!-ua');
define('NONCE_KEY',        'bYHEnrV=4E{PgCX:wv%A=AI+s{z6R`P)0c@.<t=p:M/TRcIzW<?dRDe[nX5?IZn&');
define('AUTH_SALT',        'hzS&Jhd_ND>WhD>)]a4EmgueyeCT/hVC,p s.tI8,x)p]7v*Y6?LqHk#<.dRgCGb');
define('SECURE_AUTH_SALT', '=SGy~;+~wD8~gAlRE@-:*4A2AKQfp+YB9JF3*([5KP^)U:m&q:Tl=6l+UB~j`)S7');
define('LOGGED_IN_SALT',   'LD2.s0<(GQ8SMudUmx#Q&@o4+))?wRJU>>Mb@xTwg6}W+avo:9|nb1*]$.}+KyJr');
define('NONCE_SALT',       '@J7d#{eHb`pIgtxHW3-XnWRNvTByYYS)9Gk`D4d+xyuS43>V D=RRE._O?XJp7M_');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
