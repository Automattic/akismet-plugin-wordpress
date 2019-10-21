<h3><?php esc_html_e( 'Activate Akismet Account' , 'akismet' );?></h3>
<div class="akismet-right">
	<?php Akismet::view( 'get', array( 'text' => __( 'Set up your Akismet Account' , 'akismet' ), 'classes' => array( 'akismet-button', 'akismet-is-primary' ) ) ); ?>
</div>
<p><?php esc_html_e( 'Signup or login to your Akismet Account to get activated.', 'akismet' ); ?></p>