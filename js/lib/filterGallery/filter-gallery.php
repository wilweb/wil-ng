    <?php   $GLOBALS["filtered_gallery_path"] = ""; ?>
      <?php

      class GalleryImage {
        public $id = "";
        public $name = "";
        public $title = "";
        public $link = "" ;
        public $width = "";
        public $height = "";
        public $category = "";
      }

      class Filtered_Gallery {
        public function __construct($gallery_path) {
          $GLOBALS["filtered_gallery_path"] = $gallery_path;
          $images = $this->get_images();
          $html = $this->get_gallery_html($images);
          echo $html;
        }

        public function get_images() {
          $root = $_SERVER['DOCUMENT_ROOT'];
          $host = "http://".$_SERVER['HTTP_HOST'];
          $images_path = $GLOBALS["filtered_gallery_path"];

          $images_root_path = $root.$images_path;
          $images_link = $host.$images_path;
echo $images_root_path;
echo '<br/>';
echo $images_link;

          // Open a known directory, and proceed to read its contents
          $images = array();
          $image_id = 1;
 
          if (is_dir($images_root_path)) {
              if ($dir_handle = opendir($images_root_path)) {
                  while (($file = readdir($dir_handle)) !== false) {
                      if (!is_dir($images_root_path.$file)) {
                        list($width, $height) = getimagesize($images_root_path.$file);

                        $image = new GalleryImage();    
                        $image->id = $image_id;
                        $image->name = $file;
                        $image->link = $images_link . $image->name;
                        $image->width = $width;
                        $image->height = $height;
                        //image_name = category_title.jpg
                        $image_explode = explode("_", $file);
                        $image->category = $image_explode[0];
                        $image->title = $image_explode[1];
                        $images[] = $image;
                        $image_id++; 
                      }
                  }

                  closedir($dir_handle);       
                  //print_r($attachments);
              }
          }
          
          //create random order in which images are displayed in filter gallery
          shuffle($images);
          return $images;
        }

        
        public function get_gallery_html( $images ) {
          $output = ""; 
          $output .= '<ul class="portfolio group">';
          
          foreach ( $images as $image ) {
            $output .= '<li class="item" data-id="id-'  .$image->id. '"" data-type="' .$image->category. '">';
            $output .= '<a href="' . $image->link . '"' . ' rel="prettyPhoto[portfolio]"><img src="'. $image->link .  '" width="640" height="480" alt="' . $image->title . ', ' . $image->category .'" /></a>';
            
            $output .= "</li>";
          }

          $output .= '</ul>';
          return $output;
        }
      }

      ?>