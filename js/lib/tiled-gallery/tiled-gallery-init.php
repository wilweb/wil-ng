<?php include_once dirname(__FILE__) . '/tiled-gallery.php';?>

<?php $site_root_url = htmlspecialchars($_GET["site_root_url"]);?>
<?php $gallery_path = "/img/photos/";?>
<?php $gallery_width = htmlspecialchars($_GET["gallery_width"]);?>

<?php //echo 'wil: create tiledGallery and output/display the Photos in the pinterest grid style' . '<br>'; ?>
<?php $tiledGallery = new Jetpack_Tiled_Gallery($site_root_url, $gallery_path, $gallery_width); ?>
<?php //echo 'wil: all photos should have displayed above this line now' . '<br>'; ?>

