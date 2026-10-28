<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<div class="akismet-box">
	<?php Akismet::view( 'setup' ); ?>
</div>

<div class="akismet-box">
	<?php Akismet::view( 'enter' ); ?>
</div>