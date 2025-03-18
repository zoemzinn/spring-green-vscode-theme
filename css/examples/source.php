<?php
namespace Origins\Blocks\Components\DefaultSidebar;

use Timber\Timber;
use WP_Query;
class Block extends \Og\Block
{
    protected function init()
    {

      $this->add('testimonial', $this->get_testimonial());

    }

    private function get_testimonial() 
    {
        $post_id = $this->get_random_post_id();
        $post = Timber::get_post($post_id);
        return $post;
    }

    private function get_random_post_id () 
    {
        $params = 
            [
                'post_type' => 'testimonial',
                'posts_per_page' => -1,
                'post_status' => 'publish',
                'fields' => 'ids',
            ]
        ;

        $all_posts = new WP_Query ($params);

        $all_post_ids = $all_posts->posts;

        shuffle($all_post_ids);
        return $all_post_ids[0];
    }
}
