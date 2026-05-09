import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`users_sessions\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`created_at\` text,
  	\`expires_at\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`users_sessions_order_idx\` ON \`users_sessions\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`users_sessions_parent_id_idx\` ON \`users_sessions\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`users\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`email\` text NOT NULL,
  	\`reset_password_token\` text,
  	\`reset_password_expiration\` text,
  	\`salt\` text,
  	\`hash\` text,
  	\`login_attempts\` numeric DEFAULT 0,
  	\`lock_until\` text
  );
  `)
  await db.run(sql`CREATE INDEX \`users_updated_at_idx\` ON \`users\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`users_created_at_idx\` ON \`users\` (\`created_at\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`users_email_idx\` ON \`users\` (\`email\`);`)
  await db.run(sql`CREATE TABLE \`media\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`alt\` text,
  	\`prefix\` text DEFAULT 'media',
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`url\` text,
  	\`thumbnail_u_r_l\` text,
  	\`filename\` text,
  	\`mime_type\` text,
  	\`filesize\` numeric,
  	\`width\` numeric,
  	\`height\` numeric,
  	\`focal_x\` numeric,
  	\`focal_y\` numeric,
  	\`sizes_thumb_url\` text,
  	\`sizes_thumb_width\` numeric,
  	\`sizes_thumb_height\` numeric,
  	\`sizes_thumb_mime_type\` text,
  	\`sizes_thumb_filesize\` numeric,
  	\`sizes_thumb_filename\` text,
  	\`sizes_medium_url\` text,
  	\`sizes_medium_width\` numeric,
  	\`sizes_medium_height\` numeric,
  	\`sizes_medium_mime_type\` text,
  	\`sizes_medium_filesize\` numeric,
  	\`sizes_medium_filename\` text,
  	\`sizes_large_url\` text,
  	\`sizes_large_width\` numeric,
  	\`sizes_large_height\` numeric,
  	\`sizes_large_mime_type\` text,
  	\`sizes_large_filesize\` numeric,
  	\`sizes_large_filename\` text
  );
  `)
  await db.run(sql`CREATE INDEX \`media_updated_at_idx\` ON \`media\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`media_created_at_idx\` ON \`media\` (\`created_at\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`media_filename_idx\` ON \`media\` (\`filename\`);`)
  await db.run(sql`CREATE INDEX \`media_sizes_thumb_sizes_thumb_filename_idx\` ON \`media\` (\`sizes_thumb_filename\`);`)
  await db.run(sql`CREATE INDEX \`media_sizes_medium_sizes_medium_filename_idx\` ON \`media\` (\`sizes_medium_filename\`);`)
  await db.run(sql`CREATE INDEX \`media_sizes_large_sizes_large_filename_idx\` ON \`media\` (\`sizes_large_filename\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_bento_three_col_grid\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`section_eyebrow\` text DEFAULT 'Deploy faster',
  	\`section_heading\` text DEFAULT 'Everything you need to deploy your app',
  	\`left_card_title\` text DEFAULT 'Mobile friendly' NOT NULL,
  	\`left_card_description\` text DEFAULT 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
  	\`left_card_image_id\` integer,
  	\`top_mid_card_title\` text DEFAULT 'Performance' NOT NULL,
  	\`top_mid_card_description\` text DEFAULT 'Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.',
  	\`top_mid_card_light_image_id\` integer,
  	\`top_mid_card_dark_image_id\` integer,
  	\`bottom_mid_card_title\` text DEFAULT 'Security' NOT NULL,
  	\`bottom_mid_card_description\` text DEFAULT 'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.',
  	\`bottom_mid_card_light_image_id\` integer,
  	\`bottom_mid_card_dark_image_id\` integer,
  	\`right_card_title\` text DEFAULT 'Powerful APIs' NOT NULL,
  	\`right_card_description\` text DEFAULT 'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.',
  	\`right_card_code_tab1\` text DEFAULT 'NotificationSetting.jsx',
  	\`right_card_code_tab2\` text DEFAULT 'App.jsx',
  	\`block_name\` text,
  	FOREIGN KEY (\`left_card_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`top_mid_card_light_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`top_mid_card_dark_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`bottom_mid_card_light_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`bottom_mid_card_dark_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_bento_three_col_grid_order_idx\` ON \`pages_blocks_bento_three_col_grid\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_bento_three_col_grid_parent_id_idx\` ON \`pages_blocks_bento_three_col_grid\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_bento_three_col_grid_path_idx\` ON \`pages_blocks_bento_three_col_grid\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_bento_three_col_grid_left_card_left_card_im_idx\` ON \`pages_blocks_bento_three_col_grid\` (\`left_card_image_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_bento_three_col_grid_top_mid_card_top_mid_c_idx\` ON \`pages_blocks_bento_three_col_grid\` (\`top_mid_card_light_image_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_bento_three_col_grid_top_mid_card_top_mid_1_idx\` ON \`pages_blocks_bento_three_col_grid\` (\`top_mid_card_dark_image_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_bento_three_col_grid_bottom_mid_card_bottom_idx\` ON \`pages_blocks_bento_three_col_grid\` (\`bottom_mid_card_light_image_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_bento_three_col_grid_bottom_mid_card_bott_1_idx\` ON \`pages_blocks_bento_three_col_grid\` (\`bottom_mid_card_dark_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_bento_two_row_grid_cards\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`eyebrow\` text NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`light_image_id\` integer NOT NULL,
  	\`dark_image_id\` integer,
  	FOREIGN KEY (\`light_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`dark_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_bento_two_row_grid\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_bento_two_row_grid_cards_order_idx\` ON \`pages_blocks_bento_two_row_grid_cards\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_bento_two_row_grid_cards_parent_id_idx\` ON \`pages_blocks_bento_two_row_grid_cards\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_bento_two_row_grid_cards_light_image_idx\` ON \`pages_blocks_bento_two_row_grid_cards\` (\`light_image_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_bento_two_row_grid_cards_dark_image_idx\` ON \`pages_blocks_bento_two_row_grid_cards\` (\`dark_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_bento_two_row_grid\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`section_eyebrow\` text DEFAULT 'Deploy faster',
  	\`section_heading\` text DEFAULT 'Everything you need to deploy your app',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_bento_two_row_grid_order_idx\` ON \`pages_blocks_bento_two_row_grid\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_bento_two_row_grid_parent_id_idx\` ON \`pages_blocks_bento_two_row_grid\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_bento_two_row_grid_path_idx\` ON \`pages_blocks_bento_two_row_grid\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_bento_two_row_three_col_grid_top_cards\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`eyebrow\` text NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`light_image_id\` integer NOT NULL,
  	\`dark_image_id\` integer,
  	FOREIGN KEY (\`light_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`dark_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_bento_two_row_three_col_grid\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_bento_two_row_three_col_grid_top_cards_order_idx\` ON \`pages_blocks_bento_two_row_three_col_grid_top_cards\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_bento_two_row_three_col_grid_top_cards_parent_id_idx\` ON \`pages_blocks_bento_two_row_three_col_grid_top_cards\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_bento_two_row_three_col_grid_top_cards_ligh_idx\` ON \`pages_blocks_bento_two_row_three_col_grid_top_cards\` (\`light_image_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_bento_two_row_three_col_grid_top_cards_dark_idx\` ON \`pages_blocks_bento_two_row_three_col_grid_top_cards\` (\`dark_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_bento_two_row_three_col_grid_bottom_cards\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`eyebrow\` text NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`light_image_id\` integer NOT NULL,
  	\`dark_image_id\` integer,
  	FOREIGN KEY (\`light_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`dark_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_bento_two_row_three_col_grid\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_bento_two_row_three_col_grid_bottom_cards_order_idx\` ON \`pages_blocks_bento_two_row_three_col_grid_bottom_cards\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_bento_two_row_three_col_grid_bottom_cards_parent_id_idx\` ON \`pages_blocks_bento_two_row_three_col_grid_bottom_cards\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_bento_two_row_three_col_grid_bottom_cards_l_idx\` ON \`pages_blocks_bento_two_row_three_col_grid_bottom_cards\` (\`light_image_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_bento_two_row_three_col_grid_bottom_cards_d_idx\` ON \`pages_blocks_bento_two_row_three_col_grid_bottom_cards\` (\`dark_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_bento_two_row_three_col_grid\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`section_eyebrow\` text DEFAULT 'Deploy faster',
  	\`section_heading\` text DEFAULT 'Everything you need to deploy your app',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_bento_two_row_three_col_grid_order_idx\` ON \`pages_blocks_bento_two_row_three_col_grid\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_bento_two_row_three_col_grid_parent_id_idx\` ON \`pages_blocks_bento_two_row_three_col_grid\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_bento_two_row_three_col_grid_path_idx\` ON \`pages_blocks_bento_two_row_three_col_grid\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_blog_featured_post_posts\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`date\` text NOT NULL,
  	\`date_time\` text NOT NULL,
  	\`title\` text NOT NULL,
  	\`title_href\` text NOT NULL,
  	\`excerpt\` text NOT NULL,
  	\`author_name\` text NOT NULL,
  	\`author_href\` text NOT NULL,
  	\`author_image_id\` integer,
  	FOREIGN KEY (\`author_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_blog_featured_post\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_featured_post_posts_order_idx\` ON \`pages_blocks_blog_featured_post_posts\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_featured_post_posts_parent_id_idx\` ON \`pages_blocks_blog_featured_post_posts\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_featured_post_posts_author_image_idx\` ON \`pages_blocks_blog_featured_post_posts\` (\`author_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_blog_featured_post\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`featured_post_date\` text DEFAULT 'Mar 16, 2020',
  	\`featured_post_date_time\` text DEFAULT '2020-03-16',
  	\`featured_post_title\` text DEFAULT 'We''re incredibly proud to announce we have secured $75m in Series B',
  	\`featured_post_excerpt\` text DEFAULT 'Libero neque aenean tincidunt nec consequat tempor. Viverra odio id velit adipiscing id. Nisi vestibulum orci eget bibendum dictum. Velit viverra posuere vulputate volutpat nunc. Nunc netus sit faucibus.',
  	\`featured_post_read_more_href\` text DEFAULT '#',
  	\`featured_post_author_name\` text DEFAULT 'Michael Foster',
  	\`featured_post_author_href\` text DEFAULT '#',
  	\`featured_post_author_image_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`featured_post_author_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_featured_post_order_idx\` ON \`pages_blocks_blog_featured_post\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_featured_post_parent_id_idx\` ON \`pages_blocks_blog_featured_post\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_featured_post_path_idx\` ON \`pages_blocks_blog_featured_post\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_featured_post_featured_post_featured_p_idx\` ON \`pages_blocks_blog_featured_post\` (\`featured_post_author_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_blog_photo_list_openings\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`title_href\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`salary\` text NOT NULL,
  	\`location\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_blog_photo_list\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_photo_list_openings_order_idx\` ON \`pages_blocks_blog_photo_list_openings\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_photo_list_openings_parent_id_idx\` ON \`pages_blocks_blog_photo_list_openings\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_blog_photo_list\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'We''re always looking for awesome people to join us',
  	\`description\` text DEFAULT 'Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non placerat nam arcu. Cras purus nibh cursus sit eu in id.',
  	\`image_id\` integer,
  	\`view_all_href\` text DEFAULT '#',
  	\`view_all_label\` text DEFAULT 'View all openings',
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_photo_list_order_idx\` ON \`pages_blocks_blog_photo_list\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_photo_list_parent_id_idx\` ON \`pages_blocks_blog_photo_list\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_photo_list_path_idx\` ON \`pages_blocks_blog_photo_list\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_photo_list_image_idx\` ON \`pages_blocks_blog_photo_list\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_blog_single_col_posts\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`date\` text NOT NULL,
  	\`date_time\` text NOT NULL,
  	\`category_label\` text NOT NULL,
  	\`category_href\` text NOT NULL,
  	\`title\` text NOT NULL,
  	\`title_href\` text NOT NULL,
  	\`excerpt\` text NOT NULL,
  	\`author_name\` text NOT NULL,
  	\`author_href\` text NOT NULL,
  	\`author_image_id\` integer,
  	\`author_role\` text NOT NULL,
  	FOREIGN KEY (\`author_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_blog_single_col\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_single_col_posts_order_idx\` ON \`pages_blocks_blog_single_col_posts\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_single_col_posts_parent_id_idx\` ON \`pages_blocks_blog_single_col_posts\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_single_col_posts_author_author_image_idx\` ON \`pages_blocks_blog_single_col_posts\` (\`author_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_blog_single_col\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'From the blog',
  	\`description\` text DEFAULT 'Learn how to grow your business with our expert advice.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_single_col_order_idx\` ON \`pages_blocks_blog_single_col\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_single_col_parent_id_idx\` ON \`pages_blocks_blog_single_col\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_single_col_path_idx\` ON \`pages_blocks_blog_single_col\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_blog_single_col_imgs_posts\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`cover_image_id\` integer,
  	\`date\` text NOT NULL,
  	\`date_time\` text NOT NULL,
  	\`category_label\` text NOT NULL,
  	\`category_href\` text NOT NULL,
  	\`title\` text NOT NULL,
  	\`title_href\` text NOT NULL,
  	\`excerpt\` text NOT NULL,
  	\`author_name\` text NOT NULL,
  	\`author_href\` text NOT NULL,
  	\`author_image_id\` integer,
  	\`author_role\` text NOT NULL,
  	FOREIGN KEY (\`cover_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`author_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_blog_single_col_imgs\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_single_col_imgs_posts_order_idx\` ON \`pages_blocks_blog_single_col_imgs_posts\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_single_col_imgs_posts_parent_id_idx\` ON \`pages_blocks_blog_single_col_imgs_posts\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_single_col_imgs_posts_cover_image_idx\` ON \`pages_blocks_blog_single_col_imgs_posts\` (\`cover_image_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_single_col_imgs_posts_author_author_im_idx\` ON \`pages_blocks_blog_single_col_imgs_posts\` (\`author_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_blog_single_col_imgs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'From the blog',
  	\`description\` text DEFAULT 'Learn how to grow your business with our expert advice.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_single_col_imgs_order_idx\` ON \`pages_blocks_blog_single_col_imgs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_single_col_imgs_parent_id_idx\` ON \`pages_blocks_blog_single_col_imgs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_single_col_imgs_path_idx\` ON \`pages_blocks_blog_single_col_imgs\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_blog_three_col_posts\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`date\` text NOT NULL,
  	\`date_time\` text NOT NULL,
  	\`category_label\` text NOT NULL,
  	\`category_href\` text NOT NULL,
  	\`title\` text NOT NULL,
  	\`title_href\` text NOT NULL,
  	\`excerpt\` text NOT NULL,
  	\`author_name\` text NOT NULL,
  	\`author_href\` text NOT NULL,
  	\`author_image_id\` integer,
  	\`author_role\` text NOT NULL,
  	FOREIGN KEY (\`author_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_blog_three_col\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_three_col_posts_order_idx\` ON \`pages_blocks_blog_three_col_posts\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_three_col_posts_parent_id_idx\` ON \`pages_blocks_blog_three_col_posts\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_three_col_posts_author_author_image_idx\` ON \`pages_blocks_blog_three_col_posts\` (\`author_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_blog_three_col\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'From the blog',
  	\`description\` text DEFAULT 'Learn how to grow your business with our expert advice.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_three_col_order_idx\` ON \`pages_blocks_blog_three_col\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_three_col_parent_id_idx\` ON \`pages_blocks_blog_three_col\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_three_col_path_idx\` ON \`pages_blocks_blog_three_col\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_blog_three_col_bg_imgs_posts\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`background_image_id\` integer,
  	\`date\` text NOT NULL,
  	\`date_time\` text NOT NULL,
  	\`title\` text NOT NULL,
  	\`title_href\` text NOT NULL,
  	\`author_name\` text NOT NULL,
  	\`author_image_id\` integer,
  	FOREIGN KEY (\`background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`author_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_blog_three_col_bg_imgs\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_three_col_bg_imgs_posts_order_idx\` ON \`pages_blocks_blog_three_col_bg_imgs_posts\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_three_col_bg_imgs_posts_parent_id_idx\` ON \`pages_blocks_blog_three_col_bg_imgs_posts\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_three_col_bg_imgs_posts_background_ima_idx\` ON \`pages_blocks_blog_three_col_bg_imgs_posts\` (\`background_image_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_three_col_bg_imgs_posts_author_author__idx\` ON \`pages_blocks_blog_three_col_bg_imgs_posts\` (\`author_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_blog_three_col_bg_imgs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'From the blog',
  	\`description\` text DEFAULT 'Learn how to grow your business with our expert advice.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_three_col_bg_imgs_order_idx\` ON \`pages_blocks_blog_three_col_bg_imgs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_three_col_bg_imgs_parent_id_idx\` ON \`pages_blocks_blog_three_col_bg_imgs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_three_col_bg_imgs_path_idx\` ON \`pages_blocks_blog_three_col_bg_imgs\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_blog_three_col_imgs_posts\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`cover_image_id\` integer,
  	\`date\` text NOT NULL,
  	\`date_time\` text NOT NULL,
  	\`category_label\` text NOT NULL,
  	\`category_href\` text NOT NULL,
  	\`title\` text NOT NULL,
  	\`title_href\` text NOT NULL,
  	\`excerpt\` text NOT NULL,
  	\`author_name\` text NOT NULL,
  	\`author_href\` text NOT NULL,
  	\`author_image_id\` integer,
  	\`author_role\` text NOT NULL,
  	FOREIGN KEY (\`cover_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`author_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_blog_three_col_imgs\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_three_col_imgs_posts_order_idx\` ON \`pages_blocks_blog_three_col_imgs_posts\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_three_col_imgs_posts_parent_id_idx\` ON \`pages_blocks_blog_three_col_imgs_posts\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_three_col_imgs_posts_cover_image_idx\` ON \`pages_blocks_blog_three_col_imgs_posts\` (\`cover_image_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_three_col_imgs_posts_author_author_ima_idx\` ON \`pages_blocks_blog_three_col_imgs_posts\` (\`author_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_blog_three_col_imgs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'From the blog',
  	\`description\` text DEFAULT 'Learn how to grow your business with our expert advice.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_three_col_imgs_order_idx\` ON \`pages_blocks_blog_three_col_imgs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_three_col_imgs_parent_id_idx\` ON \`pages_blocks_blog_three_col_imgs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_three_col_imgs_path_idx\` ON \`pages_blocks_blog_three_col_imgs\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_contact_centered\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Contact sales',
  	\`description\` text DEFAULT 'Aute magna irure deserunt veniam aliqua magna enim voluptate.',
  	\`privacy_policy_href\` text DEFAULT '#',
  	\`submit_label\` text DEFAULT 'Let''s talk',
  	\`form_action\` text DEFAULT '#',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_centered_order_idx\` ON \`pages_blocks_contact_centered\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_centered_parent_id_idx\` ON \`pages_blocks_contact_centered\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_centered_path_idx\` ON \`pages_blocks_contact_centered\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_contact_side_by_side_grid_contact_cards\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`email\` text NOT NULL,
  	\`phone\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_contact_side_by_side_grid\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_side_by_side_grid_contact_cards_order_idx\` ON \`pages_blocks_contact_side_by_side_grid_contact_cards\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_side_by_side_grid_contact_cards_parent_id_idx\` ON \`pages_blocks_contact_side_by_side_grid_contact_cards\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_contact_side_by_side_grid_location_cards\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`city\` text NOT NULL,
  	\`address_line1\` text NOT NULL,
  	\`address_line2\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_contact_side_by_side_grid\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_side_by_side_grid_location_cards_order_idx\` ON \`pages_blocks_contact_side_by_side_grid_location_cards\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_side_by_side_grid_location_cards_parent_id_idx\` ON \`pages_blocks_contact_side_by_side_grid_location_cards\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_contact_side_by_side_grid\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`contact_heading\` text DEFAULT 'Get in touch',
  	\`contact_description\` text DEFAULT 'Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac pellentesque.',
  	\`locations_heading\` text DEFAULT 'Locations',
  	\`locations_description\` text DEFAULT 'Consequat sunt cillum cillum elit sint. Qui occaecat nisi in ipsum commodo.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_side_by_side_grid_order_idx\` ON \`pages_blocks_contact_side_by_side_grid\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_side_by_side_grid_parent_id_idx\` ON \`pages_blocks_contact_side_by_side_grid\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_side_by_side_grid_path_idx\` ON \`pages_blocks_contact_side_by_side_grid\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_contact_sm_centered_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`icon_svg\` text NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`link_label\` text NOT NULL,
  	\`link_href\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_contact_sm_centered\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_sm_centered_items_order_idx\` ON \`pages_blocks_contact_sm_centered_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_sm_centered_items_parent_id_idx\` ON \`pages_blocks_contact_sm_centered_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_contact_sm_centered\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Contact sales',
  	\`description\` text DEFAULT 'Aute magna irure deserunt veniam aliqua magna enim voluptate.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_sm_centered_order_idx\` ON \`pages_blocks_contact_sm_centered\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_sm_centered_parent_id_idx\` ON \`pages_blocks_contact_sm_centered\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_sm_centered_path_idx\` ON \`pages_blocks_contact_sm_centered\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_contact_sm_four_col_offices\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`city\` text NOT NULL,
  	\`address_line1\` text NOT NULL,
  	\`address_line2\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_contact_sm_four_col\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_sm_four_col_offices_order_idx\` ON \`pages_blocks_contact_sm_four_col_offices\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_sm_four_col_offices_parent_id_idx\` ON \`pages_blocks_contact_sm_four_col_offices\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_contact_sm_four_col\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Our offices',
  	\`description\` text DEFAULT 'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_sm_four_col_order_idx\` ON \`pages_blocks_contact_sm_four_col\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_sm_four_col_parent_id_idx\` ON \`pages_blocks_contact_sm_four_col\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_sm_four_col_path_idx\` ON \`pages_blocks_contact_sm_four_col\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_contact_split_img\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`heading\` text DEFAULT 'Let''s work together',
  	\`description\` text DEFAULT 'Proin volutpat consequat porttitor cras nullam gravida at orci molestie a eu arcu sed ut tincidunt magna.',
  	\`submit_label\` text DEFAULT 'Send message',
  	\`form_action\` text DEFAULT '#',
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_split_img_order_idx\` ON \`pages_blocks_contact_split_img\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_split_img_parent_id_idx\` ON \`pages_blocks_contact_split_img\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_split_img_path_idx\` ON \`pages_blocks_contact_split_img\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_split_img_image_idx\` ON \`pages_blocks_contact_split_img\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_contact_split_pattern\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Get in touch',
  	\`description\` text DEFAULT 'Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.',
  	\`address\` text DEFAULT '545 Mavis Island, Chicago, IL 99191',
  	\`phone\` text DEFAULT '+1 (555) 234-5678',
  	\`email\` text DEFAULT 'hello@example.com',
  	\`submit_label\` text DEFAULT 'Send message',
  	\`form_action\` text DEFAULT '#',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_split_pattern_order_idx\` ON \`pages_blocks_contact_split_pattern\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_split_pattern_parent_id_idx\` ON \`pages_blocks_contact_split_pattern\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_split_pattern_path_idx\` ON \`pages_blocks_contact_split_pattern\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_contact_with_testimonial\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Let''s talk about your project',
  	\`description\` text DEFAULT 'We help companies and individuals build out their brand guidelines.',
  	\`submit_label\` text DEFAULT 'Let''s talk',
  	\`privacy_policy_href\` text DEFAULT '#',
  	\`form_action\` text DEFAULT '#',
  	\`logo_light_id\` integer,
  	\`logo_dark_id\` integer,
  	\`testimonial_quote\` text DEFAULT 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.',
  	\`testimonial_author_name\` text DEFAULT 'Brenna Goyette',
  	\`testimonial_author_role\` text DEFAULT 'CEO of Workcation',
  	\`testimonial_author_image_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`logo_light_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`logo_dark_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`testimonial_author_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_with_testimonial_order_idx\` ON \`pages_blocks_contact_with_testimonial\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_with_testimonial_parent_id_idx\` ON \`pages_blocks_contact_with_testimonial\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_with_testimonial_path_idx\` ON \`pages_blocks_contact_with_testimonial\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_with_testimonial_logo_light_idx\` ON \`pages_blocks_contact_with_testimonial\` (\`logo_light_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_with_testimonial_logo_dark_idx\` ON \`pages_blocks_contact_with_testimonial\` (\`logo_dark_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_with_testimonial_testimonial_author_idx\` ON \`pages_blocks_contact_with_testimonial\` (\`testimonial_author_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_content_centered_checklist_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_content_centered\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_centered_checklist_items_order_idx\` ON \`pages_blocks_content_centered_checklist_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_centered_checklist_items_parent_id_idx\` ON \`pages_blocks_content_centered_checklist_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_content_centered\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`eyebrow\` text DEFAULT 'Introducing',
  	\`heading\` text DEFAULT 'JavaScript for beginners',
  	\`intro\` text DEFAULT 'Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.',
  	\`body_paragraph1\` text DEFAULT 'Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.',
  	\`body_paragraph2\` text DEFAULT 'Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.',
  	\`subheading1\` text DEFAULT 'From beginner to expert in 3 hours',
  	\`subheading1_body\` text DEFAULT 'Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.',
  	\`quote_text\` text DEFAULT 'Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper ac dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim tristique.',
  	\`quote_author_name\` text DEFAULT 'Maria Hill',
  	\`quote_author_role\` text DEFAULT 'Marketing Manager',
  	\`quote_author_image_id\` integer,
  	\`body_paragraph3\` text DEFAULT 'Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.',
  	\`main_image_id\` integer,
  	\`main_image_alt\` text DEFAULT '',
  	\`main_image_caption\` text DEFAULT 'Faucibus commodo massa rhoncus, volutpat.',
  	\`subheading2\` text DEFAULT 'Everything you need to get up and running',
  	\`subheading2_body\` text DEFAULT 'Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat ac. Cras fermentum convallis quam.',
  	\`body_paragraph4\` text DEFAULT 'Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.',
  	\`block_name\` text,
  	FOREIGN KEY (\`quote_author_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`main_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_centered_order_idx\` ON \`pages_blocks_content_centered\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_centered_parent_id_idx\` ON \`pages_blocks_content_centered\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_centered_path_idx\` ON \`pages_blocks_content_centered\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_centered_quote_author_image_idx\` ON \`pages_blocks_content_centered\` (\`quote_author_image_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_centered_main_image_idx\` ON \`pages_blocks_content_centered\` (\`main_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_content_img_titles_stats\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`value\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_content_img_titles\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_img_titles_stats_order_idx\` ON \`pages_blocks_content_img_titles_stats\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_img_titles_stats_parent_id_idx\` ON \`pages_blocks_content_img_titles_stats\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_content_img_titles\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`eyebrow\` text DEFAULT 'About us',
  	\`heading\` text DEFAULT 'On a mission to empower remote teams',
  	\`intro\` text DEFAULT 'Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas.',
  	\`mission_heading\` text DEFAULT 'Our mission',
  	\`mission_paragraph1\` text DEFAULT 'Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.',
  	\`mission_paragraph2\` text DEFAULT 'Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.',
  	\`image1_id\` integer,
  	\`image2_id\` integer,
  	\`image3_id\` integer,
  	\`image4_id\` integer,
  	\`stats_eyebrow\` text DEFAULT 'The numbers',
  	\`block_name\` text,
  	FOREIGN KEY (\`image1_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`image2_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`image3_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`image4_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_img_titles_order_idx\` ON \`pages_blocks_content_img_titles\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_img_titles_parent_id_idx\` ON \`pages_blocks_content_img_titles\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_img_titles_path_idx\` ON \`pages_blocks_content_img_titles\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_img_titles_image1_idx\` ON \`pages_blocks_content_img_titles\` (\`image1_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_img_titles_image2_idx\` ON \`pages_blocks_content_img_titles\` (\`image2_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_img_titles_image3_idx\` ON \`pages_blocks_content_img_titles\` (\`image3_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_img_titles_image4_idx\` ON \`pages_blocks_content_img_titles\` (\`image4_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_content_split_img_feature_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`icon_svg\` text NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_content_split_img\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_split_img_feature_items_order_idx\` ON \`pages_blocks_content_split_img_feature_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_split_img_feature_items_parent_id_idx\` ON \`pages_blocks_content_split_img_feature_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_content_split_img\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`eyebrow\` text DEFAULT 'Deploy faster',
  	\`heading\` text DEFAULT 'A better workflow',
  	\`intro\` text DEFAULT 'Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.',
  	\`body_paragraph1\` text DEFAULT 'Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.',
  	\`body_paragraph2\` text DEFAULT 'Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.',
  	\`subheading\` text DEFAULT 'No server? No problem.',
  	\`subheading_body\` text DEFAULT 'Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.',
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_split_img_order_idx\` ON \`pages_blocks_content_split_img\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_split_img_parent_id_idx\` ON \`pages_blocks_content_split_img\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_split_img_path_idx\` ON \`pages_blocks_content_split_img\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_split_img_image_idx\` ON \`pages_blocks_content_split_img\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_content_sticky_screenshot_feature_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`icon_svg\` text NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_content_sticky_screenshot\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_sticky_screenshot_feature_items_order_idx\` ON \`pages_blocks_content_sticky_screenshot_feature_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_sticky_screenshot_feature_items_parent_id_idx\` ON \`pages_blocks_content_sticky_screenshot_feature_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_content_sticky_screenshot\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`eyebrow\` text DEFAULT 'Deploy faster',
  	\`heading\` text DEFAULT 'A better workflow',
  	\`intro\` text DEFAULT 'Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas.',
  	\`screenshot_id\` integer,
  	\`body_paragraph1\` text DEFAULT 'Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.',
  	\`body_paragraph2\` text DEFAULT 'Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.',
  	\`subheading\` text DEFAULT 'No server? No problem.',
  	\`subheading_body\` text DEFAULT 'Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.',
  	\`block_name\` text,
  	FOREIGN KEY (\`screenshot_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_sticky_screenshot_order_idx\` ON \`pages_blocks_content_sticky_screenshot\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_sticky_screenshot_parent_id_idx\` ON \`pages_blocks_content_sticky_screenshot\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_sticky_screenshot_path_idx\` ON \`pages_blocks_content_sticky_screenshot\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_sticky_screenshot_screenshot_idx\` ON \`pages_blocks_content_sticky_screenshot\` (\`screenshot_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_content_testimonial_feature_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`icon_svg\` text NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_content_testimonial\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_testimonial_feature_items_order_idx\` ON \`pages_blocks_content_testimonial_feature_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_testimonial_feature_items_parent_id_idx\` ON \`pages_blocks_content_testimonial_feature_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_content_testimonial\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`eyebrow\` text DEFAULT 'Deploy faster',
  	\`heading\` text DEFAULT 'A better workflow',
  	\`intro\` text DEFAULT 'Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.',
  	\`quote_text\` text DEFAULT 'Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper ac dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim tristique.',
  	\`quote_author_image_id\` integer,
  	\`quote_author_name\` text DEFAULT 'Brenna Goyette',
  	\`quote_author_handle\` text DEFAULT '@brenna',
  	\`body_paragraph1\` text DEFAULT 'Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.',
  	\`body_paragraph2\` text DEFAULT 'Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.',
  	\`subheading\` text DEFAULT 'No server? No problem.',
  	\`subheading_body\` text DEFAULT 'Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.',
  	\`block_name\` text,
  	FOREIGN KEY (\`quote_author_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_testimonial_order_idx\` ON \`pages_blocks_content_testimonial\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_testimonial_parent_id_idx\` ON \`pages_blocks_content_testimonial\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_testimonial_path_idx\` ON \`pages_blocks_content_testimonial\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_testimonial_quote_author_image_idx\` ON \`pages_blocks_content_testimonial\` (\`quote_author_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_content_testimonial_stats_stats\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`value\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_content_testimonial_stats\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_testimonial_stats_stats_order_idx\` ON \`pages_blocks_content_testimonial_stats_stats\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_testimonial_stats_stats_parent_id_idx\` ON \`pages_blocks_content_testimonial_stats_stats\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_content_testimonial_stats\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`testimonial_image_id\` integer,
  	\`testimonial_logo_id\` integer,
  	\`testimonial_quote\` text DEFAULT 'Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus tortor.',
  	\`testimonial_author_name\` text DEFAULT 'Judith Rogers',
  	\`testimonial_author_role\` text DEFAULT 'CEO at Workcation',
  	\`eyebrow\` text DEFAULT 'Company values',
  	\`heading\` text DEFAULT 'On a mission to empower remote teams',
  	\`body_paragraph1\` text DEFAULT 'Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.',
  	\`body_paragraph2\` text DEFAULT 'Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.',
  	\`body_paragraph3\` text DEFAULT 'Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.',
  	\`cta_label\` text DEFAULT 'Learn more about our company' NOT NULL,
  	\`cta_href\` text DEFAULT '#' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`testimonial_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`testimonial_logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_testimonial_stats_order_idx\` ON \`pages_blocks_content_testimonial_stats\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_testimonial_stats_parent_id_idx\` ON \`pages_blocks_content_testimonial_stats\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_testimonial_stats_path_idx\` ON \`pages_blocks_content_testimonial_stats\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_testimonial_stats_testimonial_image_idx\` ON \`pages_blocks_content_testimonial_stats\` (\`testimonial_image_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_testimonial_stats_testimonial_logo_idx\` ON \`pages_blocks_content_testimonial_stats\` (\`testimonial_logo_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_content_two_col_screenshot\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`eyebrow\` text DEFAULT 'Deploy faster',
  	\`heading\` text DEFAULT 'A better workflow',
  	\`col1_paragraph1\` text DEFAULT 'Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.',
  	\`col1_paragraph2\` text DEFAULT 'Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas.',
  	\`col2_paragraph1\` text DEFAULT 'Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id dignissim eget. Est augue maecenas risus nulla ultrices congue nunc tortor.',
  	\`col2_paragraph2\` text DEFAULT 'Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.',
  	\`cta_label\` text DEFAULT 'Get started' NOT NULL,
  	\`cta_href\` text DEFAULT '#' NOT NULL,
  	\`screenshot_id\` integer,
  	\`screenshot_dark_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`screenshot_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`screenshot_dark_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_two_col_screenshot_order_idx\` ON \`pages_blocks_content_two_col_screenshot\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_two_col_screenshot_parent_id_idx\` ON \`pages_blocks_content_two_col_screenshot\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_two_col_screenshot_path_idx\` ON \`pages_blocks_content_two_col_screenshot\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_two_col_screenshot_screenshot_idx\` ON \`pages_blocks_content_two_col_screenshot\` (\`screenshot_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_two_col_screenshot_screenshot_dark_idx\` ON \`pages_blocks_content_two_col_screenshot\` (\`screenshot_dark_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_cta_centered_on_dark_panel\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Boost your productivity today',
  	\`description\` text DEFAULT 'Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.',
  	\`primary_cta_label\` text DEFAULT 'Get started' NOT NULL,
  	\`primary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`secondary_cta_label\` text DEFAULT 'Learn more' NOT NULL,
  	\`secondary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_centered_on_dark_panel_order_idx\` ON \`pages_blocks_cta_centered_on_dark_panel\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_centered_on_dark_panel_parent_id_idx\` ON \`pages_blocks_cta_centered_on_dark_panel\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_centered_on_dark_panel_path_idx\` ON \`pages_blocks_cta_centered_on_dark_panel\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_cta_dark_panel_with_app_screenshot\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Boost your productivity. Start using our app today.',
  	\`description\` text DEFAULT 'Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.',
  	\`primary_cta_label\` text DEFAULT 'Get started' NOT NULL,
  	\`primary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`secondary_cta_label\` text DEFAULT 'Learn more' NOT NULL,
  	\`secondary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`screenshot_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`screenshot_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_dark_panel_with_app_screenshot_order_idx\` ON \`pages_blocks_cta_dark_panel_with_app_screenshot\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_dark_panel_with_app_screenshot_parent_id_idx\` ON \`pages_blocks_cta_dark_panel_with_app_screenshot\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_dark_panel_with_app_screenshot_path_idx\` ON \`pages_blocks_cta_dark_panel_with_app_screenshot\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_dark_panel_with_app_screenshot_screensh_idx\` ON \`pages_blocks_cta_dark_panel_with_app_screenshot\` (\`screenshot_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_cta_simple_centered\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Boost your productivity. Start using our app today.',
  	\`description\` text DEFAULT 'Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.',
  	\`primary_cta_label\` text DEFAULT 'Get started' NOT NULL,
  	\`primary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`secondary_cta_label\` text DEFAULT 'Learn more' NOT NULL,
  	\`secondary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_simple_centered_order_idx\` ON \`pages_blocks_cta_simple_centered\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_simple_centered_parent_id_idx\` ON \`pages_blocks_cta_simple_centered\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_simple_centered_path_idx\` ON \`pages_blocks_cta_simple_centered\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_cta_simple_centered_on_brand\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Boost your productivity. Start using our app today.',
  	\`description\` text DEFAULT 'Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.',
  	\`primary_cta_label\` text DEFAULT 'Get started' NOT NULL,
  	\`primary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`secondary_cta_label\` text DEFAULT 'Learn more' NOT NULL,
  	\`secondary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_simple_centered_on_brand_order_idx\` ON \`pages_blocks_cta_simple_centered_on_brand\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_simple_centered_on_brand_parent_id_idx\` ON \`pages_blocks_cta_simple_centered_on_brand\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_simple_centered_on_brand_path_idx\` ON \`pages_blocks_cta_simple_centered_on_brand\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_cta_simple_centered_with_gradient\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Boost your productivity. Start using our app today.',
  	\`description\` text DEFAULT 'Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.',
  	\`primary_cta_label\` text DEFAULT 'Get started' NOT NULL,
  	\`primary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`secondary_cta_label\` text DEFAULT 'Learn more' NOT NULL,
  	\`secondary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_simple_centered_with_gradient_order_idx\` ON \`pages_blocks_cta_simple_centered_with_gradient\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_simple_centered_with_gradient_parent_id_idx\` ON \`pages_blocks_cta_simple_centered_with_gradient\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_simple_centered_with_gradient_path_idx\` ON \`pages_blocks_cta_simple_centered_with_gradient\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_cta_simple_justified\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading_line1\` text DEFAULT 'Ready to dive in?',
  	\`heading_line2\` text DEFAULT 'Start your free trial today.',
  	\`primary_cta_label\` text DEFAULT 'Get started' NOT NULL,
  	\`primary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`secondary_cta_label\` text DEFAULT 'Learn more' NOT NULL,
  	\`secondary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_simple_justified_order_idx\` ON \`pages_blocks_cta_simple_justified\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_simple_justified_parent_id_idx\` ON \`pages_blocks_cta_simple_justified\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_simple_justified_path_idx\` ON \`pages_blocks_cta_simple_justified\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_cta_simple_justified_on_subtle_brand\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading_line1\` text DEFAULT 'Ready to dive in?',
  	\`heading_line2\` text DEFAULT 'Start your free trial today.',
  	\`primary_cta_label\` text DEFAULT 'Get started' NOT NULL,
  	\`primary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`secondary_cta_label\` text DEFAULT 'Learn more' NOT NULL,
  	\`secondary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_simple_justified_on_subtle_brand_order_idx\` ON \`pages_blocks_cta_simple_justified_on_subtle_brand\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_simple_justified_on_subtle_brand_parent_id_idx\` ON \`pages_blocks_cta_simple_justified_on_subtle_brand\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_simple_justified_on_subtle_brand_path_idx\` ON \`pages_blocks_cta_simple_justified_on_subtle_brand\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_cta_simple_stacked\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Boost your productivity. Start using our app today.',
  	\`primary_cta_label\` text DEFAULT 'Get started' NOT NULL,
  	\`primary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`secondary_cta_label\` text DEFAULT 'Learn more' NOT NULL,
  	\`secondary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_simple_stacked_order_idx\` ON \`pages_blocks_cta_simple_stacked\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_simple_stacked_parent_id_idx\` ON \`pages_blocks_cta_simple_stacked\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_simple_stacked_path_idx\` ON \`pages_blocks_cta_simple_stacked\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_cta_split_with_image\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`eyebrow\` text DEFAULT 'Award winning support',
  	\`heading\` text DEFAULT 'We''re here to help',
  	\`description\` text DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.',
  	\`cta_label\` text DEFAULT 'Visit the help center',
  	\`cta_href\` text DEFAULT '#',
  	\`image_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_split_with_image_order_idx\` ON \`pages_blocks_cta_split_with_image\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_split_with_image_parent_id_idx\` ON \`pages_blocks_cta_split_with_image\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_split_with_image_path_idx\` ON \`pages_blocks_cta_split_with_image\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_split_with_image_image_idx\` ON \`pages_blocks_cta_split_with_image\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_cta_two_columns_with_photo_benefits\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`icon_svg\` text NOT NULL,
  	\`label\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_cta_two_columns_with_photo\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_two_columns_with_photo_benefits_order_idx\` ON \`pages_blocks_cta_two_columns_with_photo_benefits\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_two_columns_with_photo_benefits_parent_id_idx\` ON \`pages_blocks_cta_two_columns_with_photo_benefits\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_cta_two_columns_with_photo\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Join our team',
  	\`description\` text DEFAULT 'Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.',
  	\`cta_label\` text DEFAULT 'See our job postings',
  	\`cta_href\` text DEFAULT '#',
  	\`image_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_two_columns_with_photo_order_idx\` ON \`pages_blocks_cta_two_columns_with_photo\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_two_columns_with_photo_parent_id_idx\` ON \`pages_blocks_cta_two_columns_with_photo\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_two_columns_with_photo_path_idx\` ON \`pages_blocks_cta_two_columns_with_photo\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_two_columns_with_photo_image_idx\` ON \`pages_blocks_cta_two_columns_with_photo\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_cta_with_image_tiles\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Our people',
  	\`description_primary\` text DEFAULT 'Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut molestiae velit error quod. Excepturi quidem expedita molestias quas.',
  	\`description_secondary\` text DEFAULT 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat. Quasi aperiam sit non sit neque reprehenderit.',
  	\`cta_label\` text DEFAULT 'Join our team',
  	\`cta_href\` text DEFAULT '#',
  	\`image_large_id\` integer,
  	\`image_top_left_id\` integer,
  	\`image_middle_id\` integer,
  	\`image_bottom_right_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_large_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`image_top_left_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`image_middle_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`image_bottom_right_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_with_image_tiles_order_idx\` ON \`pages_blocks_cta_with_image_tiles\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_with_image_tiles_parent_id_idx\` ON \`pages_blocks_cta_with_image_tiles\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_with_image_tiles_path_idx\` ON \`pages_blocks_cta_with_image_tiles\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_with_image_tiles_image_large_idx\` ON \`pages_blocks_cta_with_image_tiles\` (\`image_large_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_with_image_tiles_image_top_left_idx\` ON \`pages_blocks_cta_with_image_tiles\` (\`image_top_left_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_with_image_tiles_image_middle_idx\` ON \`pages_blocks_cta_with_image_tiles\` (\`image_middle_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_with_image_tiles_image_bottom_right_idx\` ON \`pages_blocks_cta_with_image_tiles\` (\`image_bottom_right_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_faq_centered_accordion_faqs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`question\` text NOT NULL,
  	\`answer\` text NOT NULL,
  	\`default_open\` integer,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_faq_centered_accordion\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_centered_accordion_faqs_order_idx\` ON \`pages_blocks_faq_centered_accordion_faqs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_centered_accordion_faqs_parent_id_idx\` ON \`pages_blocks_faq_centered_accordion_faqs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_faq_centered_accordion\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Frequently asked questions',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_centered_accordion_order_idx\` ON \`pages_blocks_faq_centered_accordion\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_centered_accordion_parent_id_idx\` ON \`pages_blocks_faq_centered_accordion\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_centered_accordion_path_idx\` ON \`pages_blocks_faq_centered_accordion\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_faq_offset_with_supporting_text_faqs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`question\` text NOT NULL,
  	\`answer\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_faq_offset_with_supporting_text\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_offset_with_supporting_text_faqs_order_idx\` ON \`pages_blocks_faq_offset_with_supporting_text_faqs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_offset_with_supporting_text_faqs_parent_id_idx\` ON \`pages_blocks_faq_offset_with_supporting_text_faqs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_faq_offset_with_supporting_text\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Frequently asked questions',
  	\`support_text\` text DEFAULT 'Can''t find the answer you''re looking for? Reach out to our',
  	\`support_link_label\` text DEFAULT 'customer support',
  	\`support_link_href\` text DEFAULT '#',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_offset_with_supporting_text_order_idx\` ON \`pages_blocks_faq_offset_with_supporting_text\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_offset_with_supporting_text_parent_id_idx\` ON \`pages_blocks_faq_offset_with_supporting_text\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_offset_with_supporting_text_path_idx\` ON \`pages_blocks_faq_offset_with_supporting_text\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_faq_side_by_side_faqs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`question\` text NOT NULL,
  	\`answer\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_faq_side_by_side\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_side_by_side_faqs_order_idx\` ON \`pages_blocks_faq_side_by_side_faqs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_side_by_side_faqs_parent_id_idx\` ON \`pages_blocks_faq_side_by_side_faqs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_faq_side_by_side\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Frequently asked questions',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_side_by_side_order_idx\` ON \`pages_blocks_faq_side_by_side\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_side_by_side_parent_id_idx\` ON \`pages_blocks_faq_side_by_side\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_side_by_side_path_idx\` ON \`pages_blocks_faq_side_by_side\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_faq_three_columns_faqs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`question\` text NOT NULL,
  	\`answer\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_faq_three_columns\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_three_columns_faqs_order_idx\` ON \`pages_blocks_faq_three_columns_faqs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_three_columns_faqs_parent_id_idx\` ON \`pages_blocks_faq_three_columns_faqs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_faq_three_columns\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Frequently asked questions',
  	\`support_text\` text DEFAULT 'Have a different question and can''t find the answer you''re looking for? Reach out to our support team by',
  	\`support_link_label\` text DEFAULT 'sending us an email',
  	\`support_link_href\` text DEFAULT '#',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_three_columns_order_idx\` ON \`pages_blocks_faq_three_columns\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_three_columns_parent_id_idx\` ON \`pages_blocks_faq_three_columns\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_three_columns_path_idx\` ON \`pages_blocks_faq_three_columns\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_faq_three_col_ctr_intro_faqs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`question\` text NOT NULL,
  	\`answer\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_faq_three_col_ctr_intro\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_three_col_ctr_intro_faqs_order_idx\` ON \`pages_blocks_faq_three_col_ctr_intro_faqs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_three_col_ctr_intro_faqs_parent_id_idx\` ON \`pages_blocks_faq_three_col_ctr_intro_faqs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_faq_three_col_ctr_intro\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Frequently asked questions',
  	\`support_text\` text DEFAULT 'Have a different question and can''t find the answer you''re looking for? Reach out to our support team by',
  	\`support_link_label\` text DEFAULT 'sending us an email',
  	\`support_link_href\` text DEFAULT '#',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_three_col_ctr_intro_order_idx\` ON \`pages_blocks_faq_three_col_ctr_intro\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_three_col_ctr_intro_parent_id_idx\` ON \`pages_blocks_faq_three_col_ctr_intro\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_three_col_ctr_intro_path_idx\` ON \`pages_blocks_faq_three_col_ctr_intro\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_faq_two_columns_faqs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`question\` text NOT NULL,
  	\`answer\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_faq_two_columns\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_two_columns_faqs_order_idx\` ON \`pages_blocks_faq_two_columns_faqs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_two_columns_faqs_parent_id_idx\` ON \`pages_blocks_faq_two_columns_faqs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_faq_two_columns\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Frequently asked questions',
  	\`support_text\` text DEFAULT 'Have a different question and can''t find the answer you''re looking for? Reach out to our support team by',
  	\`support_link_label\` text DEFAULT 'sending us an email',
  	\`support_link_href\` text DEFAULT '#',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_two_columns_order_idx\` ON \`pages_blocks_faq_two_columns\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_two_columns_parent_id_idx\` ON \`pages_blocks_faq_two_columns\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_two_columns_path_idx\` ON \`pages_blocks_faq_two_columns\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_faq_two_col_ctr_intro_faqs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`question\` text NOT NULL,
  	\`answer\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_faq_two_col_ctr_intro\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_two_col_ctr_intro_faqs_order_idx\` ON \`pages_blocks_faq_two_col_ctr_intro_faqs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_two_col_ctr_intro_faqs_parent_id_idx\` ON \`pages_blocks_faq_two_col_ctr_intro_faqs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_faq_two_col_ctr_intro\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Frequently asked questions',
  	\`support_text\` text DEFAULT 'Have a different question and can''t find the answer you''re looking for? Reach out to our support team by',
  	\`support_link_label\` text DEFAULT 'sending us an email',
  	\`support_link_href\` text DEFAULT '#',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_two_col_ctr_intro_order_idx\` ON \`pages_blocks_faq_two_col_ctr_intro\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_two_col_ctr_intro_parent_id_idx\` ON \`pages_blocks_faq_two_col_ctr_intro\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_two_col_ctr_intro_path_idx\` ON \`pages_blocks_faq_two_col_ctr_intro\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feat_simple_features\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_feat_simple\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_simple_features_order_idx\` ON \`pages_blocks_feat_simple_features\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_simple_features_parent_id_idx\` ON \`pages_blocks_feat_simple_features\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feat_simple\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'All-in-one platform',
  	\`description\` text DEFAULT 'Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_simple_order_idx\` ON \`pages_blocks_feat_simple\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_simple_parent_id_idx\` ON \`pages_blocks_feat_simple\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_simple_path_idx\` ON \`pages_blocks_feat_simple\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feat_simple3x2_grid_features\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`icon_svg\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_feat_simple3x2_grid\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_simple3x2_grid_features_order_idx\` ON \`pages_blocks_feat_simple3x2_grid_features\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_simple3x2_grid_features_parent_id_idx\` ON \`pages_blocks_feat_simple3x2_grid_features\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feat_simple3x2_grid\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`eyebrow\` text DEFAULT 'Everything you need',
  	\`heading\` text DEFAULT 'No server? No problem.',
  	\`description\` text DEFAULT 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_simple3x2_grid_order_idx\` ON \`pages_blocks_feat_simple3x2_grid\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_simple3x2_grid_parent_id_idx\` ON \`pages_blocks_feat_simple3x2_grid\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_simple3x2_grid_path_idx\` ON \`pages_blocks_feat_simple3x2_grid\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feat_centered2x2_grid_features\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`icon_svg\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_feat_centered2x2_grid\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_centered2x2_grid_features_order_idx\` ON \`pages_blocks_feat_centered2x2_grid_features\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_centered2x2_grid_features_parent_id_idx\` ON \`pages_blocks_feat_centered2x2_grid_features\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feat_centered2x2_grid\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`eyebrow\` text DEFAULT 'Deploy faster',
  	\`heading\` text DEFAULT 'Everything you need to deploy your app',
  	\`description\` text DEFAULT 'Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_centered2x2_grid_order_idx\` ON \`pages_blocks_feat_centered2x2_grid\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_centered2x2_grid_parent_id_idx\` ON \`pages_blocks_feat_centered2x2_grid\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_centered2x2_grid_path_idx\` ON \`pages_blocks_feat_centered2x2_grid\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feat_offset2x2_grid_features\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`icon_svg\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_feat_offset2x2_grid\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_offset2x2_grid_features_order_idx\` ON \`pages_blocks_feat_offset2x2_grid_features\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_offset2x2_grid_features_parent_id_idx\` ON \`pages_blocks_feat_offset2x2_grid_features\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feat_offset2x2_grid\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Stay on top of customer support',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_offset2x2_grid_order_idx\` ON \`pages_blocks_feat_offset2x2_grid\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_offset2x2_grid_parent_id_idx\` ON \`pages_blocks_feat_offset2x2_grid\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_offset2x2_grid_path_idx\` ON \`pages_blocks_feat_offset2x2_grid\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feat_offset_with_feature_list_features\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`icon_svg\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_feat_offset_with_feature_list\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_offset_with_feature_list_features_order_idx\` ON \`pages_blocks_feat_offset_with_feature_list_features\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_offset_with_feature_list_features_parent_id_idx\` ON \`pages_blocks_feat_offset_with_feature_list_features\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feat_offset_with_feature_list\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`eyebrow\` text DEFAULT 'Everything you need',
  	\`heading\` text DEFAULT 'All-in-one platform',
  	\`description\` text DEFAULT 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_offset_with_feature_list_order_idx\` ON \`pages_blocks_feat_offset_with_feature_list\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_offset_with_feature_list_parent_id_idx\` ON \`pages_blocks_feat_offset_with_feature_list\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_offset_with_feature_list_path_idx\` ON \`pages_blocks_feat_offset_with_feature_list\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feat_simple_three_col_sm_icons_features\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`icon_svg\` text NOT NULL,
  	\`link_label\` text,
  	\`link_href\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_feat_simple_three_col_sm_icons\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_simple_three_col_sm_icons_features_order_idx\` ON \`pages_blocks_feat_simple_three_col_sm_icons_features\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_simple_three_col_sm_icons_features_parent_id_idx\` ON \`pages_blocks_feat_simple_three_col_sm_icons_features\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feat_simple_three_col_sm_icons\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`eyebrow\` text DEFAULT 'Deploy faster',
  	\`heading\` text DEFAULT 'Everything you need to deploy your app',
  	\`description\` text DEFAULT 'Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_simple_three_col_sm_icons_order_idx\` ON \`pages_blocks_feat_simple_three_col_sm_icons\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_simple_three_col_sm_icons_parent_id_idx\` ON \`pages_blocks_feat_simple_three_col_sm_icons\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_simple_three_col_sm_icons_path_idx\` ON \`pages_blocks_feat_simple_three_col_sm_icons\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feat_simple_three_col_lg_icons_features\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`icon_svg\` text NOT NULL,
  	\`link_label\` text,
  	\`link_href\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_feat_simple_three_col_lg_icons\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_simple_three_col_lg_icons_features_order_idx\` ON \`pages_blocks_feat_simple_three_col_lg_icons_features\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_simple_three_col_lg_icons_features_parent_id_idx\` ON \`pages_blocks_feat_simple_three_col_lg_icons_features\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feat_simple_three_col_lg_icons\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Stay on top of customer support',
  	\`description\` text DEFAULT 'Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_simple_three_col_lg_icons_order_idx\` ON \`pages_blocks_feat_simple_three_col_lg_icons\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_simple_three_col_lg_icons_parent_id_idx\` ON \`pages_blocks_feat_simple_three_col_lg_icons\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_simple_three_col_lg_icons_path_idx\` ON \`pages_blocks_feat_simple_three_col_lg_icons\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feat_contained_in_panel_features\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`icon_svg\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_feat_contained_in_panel\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_contained_in_panel_features_order_idx\` ON \`pages_blocks_feat_contained_in_panel_features\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_contained_in_panel_features_parent_id_idx\` ON \`pages_blocks_feat_contained_in_panel_features\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feat_contained_in_panel\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Boost your productivity. Start using our app today.',
  	\`description\` text DEFAULT 'Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla. Ac euismod vel sit maecenas.',
  	\`screenshot_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`screenshot_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_contained_in_panel_order_idx\` ON \`pages_blocks_feat_contained_in_panel\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_contained_in_panel_parent_id_idx\` ON \`pages_blocks_feat_contained_in_panel\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_contained_in_panel_path_idx\` ON \`pages_blocks_feat_contained_in_panel\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_contained_in_panel_screenshot_idx\` ON \`pages_blocks_feat_contained_in_panel\` (\`screenshot_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feat_with_code_example_panel_features\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`icon_svg\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_feat_with_code_example_panel\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_code_example_panel_features_order_idx\` ON \`pages_blocks_feat_with_code_example_panel_features\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_code_example_panel_features_parent_id_idx\` ON \`pages_blocks_feat_with_code_example_panel_features\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feat_with_code_example_panel\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`eyebrow\` text DEFAULT 'Deploy faster',
  	\`heading\` text DEFAULT 'A better workflow',
  	\`description\` text DEFAULT 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_code_example_panel_order_idx\` ON \`pages_blocks_feat_with_code_example_panel\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_code_example_panel_parent_id_idx\` ON \`pages_blocks_feat_with_code_example_panel\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_code_example_panel_path_idx\` ON \`pages_blocks_feat_with_code_example_panel\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feat_with_product_screenshot_features\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`icon_svg\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_feat_with_product_screenshot\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_product_screenshot_features_order_idx\` ON \`pages_blocks_feat_with_product_screenshot_features\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_product_screenshot_features_parent_id_idx\` ON \`pages_blocks_feat_with_product_screenshot_features\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feat_with_product_screenshot\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`eyebrow\` text DEFAULT 'Deploy faster',
  	\`heading\` text DEFAULT 'A better workflow',
  	\`description\` text DEFAULT 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  	\`screenshot_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`screenshot_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_product_screenshot_order_idx\` ON \`pages_blocks_feat_with_product_screenshot\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_product_screenshot_parent_id_idx\` ON \`pages_blocks_feat_with_product_screenshot\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_product_screenshot_path_idx\` ON \`pages_blocks_feat_with_product_screenshot\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_product_screenshot_screenshot_idx\` ON \`pages_blocks_feat_with_product_screenshot\` (\`screenshot_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feat_with_product_screenshot_on_left_features\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`icon_svg\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_feat_with_product_screenshot_on_left\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_product_screenshot_on_left_features_order_idx\` ON \`pages_blocks_feat_with_product_screenshot_on_left_features\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_product_screenshot_on_left_features_parent_id_idx\` ON \`pages_blocks_feat_with_product_screenshot_on_left_features\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feat_with_product_screenshot_on_left\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`eyebrow\` text DEFAULT 'Deploy faster',
  	\`heading\` text DEFAULT 'A better workflow',
  	\`description\` text DEFAULT 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  	\`screenshot_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`screenshot_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_product_screenshot_on_left_order_idx\` ON \`pages_blocks_feat_with_product_screenshot_on_left\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_product_screenshot_on_left_parent_id_idx\` ON \`pages_blocks_feat_with_product_screenshot_on_left\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_product_screenshot_on_left_path_idx\` ON \`pages_blocks_feat_with_product_screenshot_on_left\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_product_screenshot_on_left_screen_idx\` ON \`pages_blocks_feat_with_product_screenshot_on_left\` (\`screenshot_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feat_with_product_screenshot_panel_features\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`icon_svg\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_feat_with_product_screenshot_panel\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_product_screenshot_panel_features_order_idx\` ON \`pages_blocks_feat_with_product_screenshot_panel_features\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_product_screenshot_panel_features_parent_id_idx\` ON \`pages_blocks_feat_with_product_screenshot_panel_features\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feat_with_product_screenshot_panel\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`eyebrow\` text DEFAULT 'Deploy faster',
  	\`heading\` text DEFAULT 'A better workflow',
  	\`description\` text DEFAULT 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  	\`screenshot_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`screenshot_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_product_screenshot_panel_order_idx\` ON \`pages_blocks_feat_with_product_screenshot_panel\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_product_screenshot_panel_parent_id_idx\` ON \`pages_blocks_feat_with_product_screenshot_panel\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_product_screenshot_panel_path_idx\` ON \`pages_blocks_feat_with_product_screenshot_panel\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_product_screenshot_panel_screensh_idx\` ON \`pages_blocks_feat_with_product_screenshot_panel\` (\`screenshot_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feat_with_large_screenshot_features\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`icon_svg\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_feat_with_large_screenshot\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_large_screenshot_features_order_idx\` ON \`pages_blocks_feat_with_large_screenshot_features\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_large_screenshot_features_parent_id_idx\` ON \`pages_blocks_feat_with_large_screenshot_features\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feat_with_large_screenshot\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`eyebrow\` text DEFAULT 'Everything you need',
  	\`heading\` text DEFAULT 'No server? No problem.',
  	\`description\` text DEFAULT 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis.',
  	\`screenshot_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`screenshot_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_large_screenshot_order_idx\` ON \`pages_blocks_feat_with_large_screenshot\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_large_screenshot_parent_id_idx\` ON \`pages_blocks_feat_with_large_screenshot\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_large_screenshot_path_idx\` ON \`pages_blocks_feat_with_large_screenshot\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_large_screenshot_screenshot_idx\` ON \`pages_blocks_feat_with_large_screenshot\` (\`screenshot_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feat_with_large_bordered_screenshot\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Everything you need to deploy your app',
  	\`screenshot_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`screenshot_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_large_bordered_screenshot_order_idx\` ON \`pages_blocks_feat_with_large_bordered_screenshot\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_large_bordered_screenshot_parent_id_idx\` ON \`pages_blocks_feat_with_large_bordered_screenshot\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_large_bordered_screenshot_path_idx\` ON \`pages_blocks_feat_with_large_bordered_screenshot\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_large_bordered_screenshot_screens_idx\` ON \`pages_blocks_feat_with_large_bordered_screenshot\` (\`screenshot_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feat_with_testimonial\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`eyebrow\` text DEFAULT 'Deploy faster',
  	\`heading\` text DEFAULT 'A better workflow',
  	\`description\` text DEFAULT 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  	\`cta_label\` text DEFAULT 'Get started',
  	\`cta_href\` text DEFAULT '#',
  	\`testimonial_quote\` text DEFAULT 'Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper ac dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim tristique.',
  	\`testimonial_author_name\` text DEFAULT 'Maria Hill',
  	\`testimonial_author_title\` text DEFAULT 'Marketing Manager',
  	\`testimonial_author_avatar_id\` integer,
  	\`screenshot_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`testimonial_author_avatar_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`screenshot_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_testimonial_order_idx\` ON \`pages_blocks_feat_with_testimonial\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_testimonial_parent_id_idx\` ON \`pages_blocks_feat_with_testimonial\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_testimonial_path_idx\` ON \`pages_blocks_feat_with_testimonial\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_testimonial_testimonial_testimoni_idx\` ON \`pages_blocks_feat_with_testimonial\` (\`testimonial_author_avatar_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feat_with_testimonial_screenshot_idx\` ON \`pages_blocks_feat_with_testimonial\` (\`screenshot_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_hero_angled_img_right_nav_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text DEFAULT 'Link' NOT NULL,
  	\`href\` text DEFAULT '#' NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_hero_angled_img_right\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_angled_img_right_nav_links_order_idx\` ON \`pages_blocks_hero_angled_img_right_nav_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_angled_img_right_nav_links_parent_id_idx\` ON \`pages_blocks_hero_angled_img_right_nav_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_hero_angled_img_right\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`logo_id\` integer,
  	\`announcement_text\` text DEFAULT 'Anim aute id magna aliqua ad ad non deserunt sunt.',
  	\`announcement_href\` text DEFAULT '#',
  	\`heading\` text DEFAULT 'Data to enrich your business',
  	\`description\` text DEFAULT 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
  	\`image_id\` integer,
  	\`primary_cta_label\` text DEFAULT 'Get started' NOT NULL,
  	\`primary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`secondary_cta_label\` text DEFAULT 'Learn more' NOT NULL,
  	\`secondary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_angled_img_right_order_idx\` ON \`pages_blocks_hero_angled_img_right\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_angled_img_right_parent_id_idx\` ON \`pages_blocks_hero_angled_img_right\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_angled_img_right_path_idx\` ON \`pages_blocks_hero_angled_img_right\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_angled_img_right_logo_idx\` ON \`pages_blocks_hero_angled_img_right\` (\`logo_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_angled_img_right_image_idx\` ON \`pages_blocks_hero_angled_img_right\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_hero_app_screenshot_nav_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text DEFAULT 'Link' NOT NULL,
  	\`href\` text DEFAULT '#' NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_hero_app_screenshot\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_app_screenshot_nav_links_order_idx\` ON \`pages_blocks_hero_app_screenshot_nav_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_app_screenshot_nav_links_parent_id_idx\` ON \`pages_blocks_hero_app_screenshot_nav_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_hero_app_screenshot\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`logo_id\` integer,
  	\`login_label\` text DEFAULT 'Log in',
  	\`login_href\` text DEFAULT '#',
  	\`heading\` text DEFAULT 'Data to enrich your online business',
  	\`description\` text DEFAULT 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.',
  	\`screenshot_id\` integer,
  	\`primary_cta_label\` text DEFAULT 'Get started' NOT NULL,
  	\`primary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`secondary_cta_label\` text DEFAULT 'Learn more' NOT NULL,
  	\`secondary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`screenshot_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_app_screenshot_order_idx\` ON \`pages_blocks_hero_app_screenshot\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_app_screenshot_parent_id_idx\` ON \`pages_blocks_hero_app_screenshot\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_app_screenshot_path_idx\` ON \`pages_blocks_hero_app_screenshot\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_app_screenshot_logo_idx\` ON \`pages_blocks_hero_app_screenshot\` (\`logo_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_app_screenshot_screenshot_idx\` ON \`pages_blocks_hero_app_screenshot\` (\`screenshot_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_hero_bordered_app_shot_nav_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text DEFAULT 'Link' NOT NULL,
  	\`href\` text DEFAULT '#' NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_hero_bordered_app_shot\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_bordered_app_shot_nav_links_order_idx\` ON \`pages_blocks_hero_bordered_app_shot_nav_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_bordered_app_shot_nav_links_parent_id_idx\` ON \`pages_blocks_hero_bordered_app_shot_nav_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_hero_bordered_app_shot\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`logo_id\` integer,
  	\`login_label\` text DEFAULT 'Log in',
  	\`login_href\` text DEFAULT '#',
  	\`heading\` text DEFAULT 'Data to enrich your online business',
  	\`description\` text DEFAULT 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.',
  	\`screenshot_id\` integer,
  	\`primary_cta_label\` text DEFAULT 'Get started' NOT NULL,
  	\`primary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`secondary_cta_label\` text DEFAULT 'Learn more' NOT NULL,
  	\`secondary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`screenshot_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_bordered_app_shot_order_idx\` ON \`pages_blocks_hero_bordered_app_shot\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_bordered_app_shot_parent_id_idx\` ON \`pages_blocks_hero_bordered_app_shot\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_bordered_app_shot_path_idx\` ON \`pages_blocks_hero_bordered_app_shot\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_bordered_app_shot_logo_idx\` ON \`pages_blocks_hero_bordered_app_shot\` (\`logo_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_bordered_app_shot_screenshot_idx\` ON \`pages_blocks_hero_bordered_app_shot\` (\`screenshot_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_hero_img_tiles_nav_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text DEFAULT 'Link' NOT NULL,
  	\`href\` text DEFAULT '#' NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_hero_img_tiles\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_img_tiles_nav_links_order_idx\` ON \`pages_blocks_hero_img_tiles_nav_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_img_tiles_nav_links_parent_id_idx\` ON \`pages_blocks_hero_img_tiles_nav_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_hero_img_tiles_tile_images\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer NOT NULL,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_hero_img_tiles\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_img_tiles_tile_images_order_idx\` ON \`pages_blocks_hero_img_tiles_tile_images\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_img_tiles_tile_images_parent_id_idx\` ON \`pages_blocks_hero_img_tiles_tile_images\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_img_tiles_tile_images_image_idx\` ON \`pages_blocks_hero_img_tiles_tile_images\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_hero_img_tiles\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`logo_id\` integer,
  	\`login_label\` text DEFAULT 'Log in',
  	\`login_href\` text DEFAULT '#',
  	\`heading\` text DEFAULT 'We''re changing the way people connect',
  	\`description\` text DEFAULT 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt.',
  	\`primary_cta_label\` text DEFAULT 'Get started' NOT NULL,
  	\`primary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`secondary_cta_label\` text DEFAULT 'Live demo' NOT NULL,
  	\`secondary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_img_tiles_order_idx\` ON \`pages_blocks_hero_img_tiles\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_img_tiles_parent_id_idx\` ON \`pages_blocks_hero_img_tiles\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_img_tiles_path_idx\` ON \`pages_blocks_hero_img_tiles\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_img_tiles_logo_idx\` ON \`pages_blocks_hero_img_tiles\` (\`logo_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_hero_offset_img_nav_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text DEFAULT 'Link' NOT NULL,
  	\`href\` text DEFAULT '#' NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_hero_offset_img\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_offset_img_nav_links_order_idx\` ON \`pages_blocks_hero_offset_img_nav_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_offset_img_nav_links_parent_id_idx\` ON \`pages_blocks_hero_offset_img_nav_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_hero_offset_img\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`logo_id\` integer,
  	\`login_label\` text DEFAULT 'Log in',
  	\`login_href\` text DEFAULT '#',
  	\`heading\` text DEFAULT 'We''re changing the way people connect',
  	\`description\` text DEFAULT 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
  	\`image_id\` integer,
  	\`primary_cta_label\` text DEFAULT 'Get started' NOT NULL,
  	\`primary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`secondary_cta_label\` text DEFAULT 'Learn more' NOT NULL,
  	\`secondary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_offset_img_order_idx\` ON \`pages_blocks_hero_offset_img\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_offset_img_parent_id_idx\` ON \`pages_blocks_hero_offset_img\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_offset_img_path_idx\` ON \`pages_blocks_hero_offset_img\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_offset_img_logo_idx\` ON \`pages_blocks_hero_offset_img\` (\`logo_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_offset_img_image_idx\` ON \`pages_blocks_hero_offset_img\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_hero_phone_mockup_nav_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text DEFAULT 'Link' NOT NULL,
  	\`href\` text DEFAULT '#' NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_hero_phone_mockup\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_phone_mockup_nav_links_order_idx\` ON \`pages_blocks_hero_phone_mockup_nav_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_phone_mockup_nav_links_parent_id_idx\` ON \`pages_blocks_hero_phone_mockup_nav_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_hero_phone_mockup\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`logo_id\` integer,
  	\`login_label\` text DEFAULT 'Log in',
  	\`login_href\` text DEFAULT '#',
  	\`badge_highlight\` text DEFAULT 'We''re hiring',
  	\`badge_text\` text DEFAULT 'See open positions',
  	\`badge_href\` text DEFAULT '#',
  	\`heading\` text DEFAULT 'A better way to ship your projects',
  	\`description\` text DEFAULT 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt.',
  	\`mobile_screenshot_id\` integer,
  	\`primary_cta_label\` text DEFAULT 'Get started' NOT NULL,
  	\`primary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`secondary_cta_label\` text DEFAULT 'Learn more' NOT NULL,
  	\`secondary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`mobile_screenshot_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_phone_mockup_order_idx\` ON \`pages_blocks_hero_phone_mockup\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_phone_mockup_parent_id_idx\` ON \`pages_blocks_hero_phone_mockup\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_phone_mockup_path_idx\` ON \`pages_blocks_hero_phone_mockup\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_phone_mockup_logo_idx\` ON \`pages_blocks_hero_phone_mockup\` (\`logo_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_phone_mockup_mobile_screenshot_idx\` ON \`pages_blocks_hero_phone_mockup\` (\`mobile_screenshot_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_hero_simple_centered_nav_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text DEFAULT 'Link' NOT NULL,
  	\`href\` text DEFAULT '#' NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_hero_simple_centered\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_simple_centered_nav_links_order_idx\` ON \`pages_blocks_hero_simple_centered_nav_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_simple_centered_nav_links_parent_id_idx\` ON \`pages_blocks_hero_simple_centered_nav_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_hero_simple_centered\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`logo_id\` integer,
  	\`login_label\` text DEFAULT 'Log in',
  	\`login_href\` text DEFAULT '#',
  	\`announcement_text\` text DEFAULT 'Announcing our next round of funding.',
  	\`announcement_href\` text DEFAULT '#',
  	\`heading\` text DEFAULT 'Data to enrich your online business',
  	\`description\` text DEFAULT 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.',
  	\`primary_cta_label\` text DEFAULT 'Get started' NOT NULL,
  	\`primary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`secondary_cta_label\` text DEFAULT 'Learn more' NOT NULL,
  	\`secondary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_simple_centered_order_idx\` ON \`pages_blocks_hero_simple_centered\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_simple_centered_parent_id_idx\` ON \`pages_blocks_hero_simple_centered\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_simple_centered_path_idx\` ON \`pages_blocks_hero_simple_centered\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_simple_centered_logo_idx\` ON \`pages_blocks_hero_simple_centered\` (\`logo_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_hero_sm_ctr_bg_img_nav_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text DEFAULT 'Link' NOT NULL,
  	\`href\` text DEFAULT '#' NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_hero_sm_ctr_bg_img\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_sm_ctr_bg_img_nav_links_order_idx\` ON \`pages_blocks_hero_sm_ctr_bg_img_nav_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_sm_ctr_bg_img_nav_links_parent_id_idx\` ON \`pages_blocks_hero_sm_ctr_bg_img_nav_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_hero_sm_ctr_bg_img\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`logo_id\` integer,
  	\`login_label\` text DEFAULT 'Log in',
  	\`login_href\` text DEFAULT '#',
  	\`background_image_id\` integer,
  	\`announcement_text\` text DEFAULT 'Announcing our next round of funding.',
  	\`announcement_href\` text DEFAULT '#',
  	\`heading\` text DEFAULT 'Data to enrich your online business',
  	\`description\` text DEFAULT 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.',
  	\`primary_cta_label\` text DEFAULT 'Get started' NOT NULL,
  	\`primary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`secondary_cta_label\` text DEFAULT 'Learn more' NOT NULL,
  	\`secondary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_sm_ctr_bg_img_order_idx\` ON \`pages_blocks_hero_sm_ctr_bg_img\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_sm_ctr_bg_img_parent_id_idx\` ON \`pages_blocks_hero_sm_ctr_bg_img\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_sm_ctr_bg_img_path_idx\` ON \`pages_blocks_hero_sm_ctr_bg_img\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_sm_ctr_bg_img_logo_idx\` ON \`pages_blocks_hero_sm_ctr_bg_img\` (\`logo_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_sm_ctr_bg_img_background_image_idx\` ON \`pages_blocks_hero_sm_ctr_bg_img\` (\`background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_hero_split_bordered_shot\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`logo_id\` integer,
  	\`badge_label\` text DEFAULT 'What''s new',
  	\`badge_text\` text DEFAULT 'Just shipped v1.0',
  	\`badge_href\` text DEFAULT '#',
  	\`heading\` text DEFAULT 'Deploy to the cloud with confidence',
  	\`description\` text DEFAULT 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.',
  	\`screenshot_id\` integer,
  	\`primary_cta_label\` text DEFAULT 'Get started' NOT NULL,
  	\`primary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`secondary_cta_label\` text DEFAULT 'Learn more' NOT NULL,
  	\`secondary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`screenshot_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_split_bordered_shot_order_idx\` ON \`pages_blocks_hero_split_bordered_shot\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_split_bordered_shot_parent_id_idx\` ON \`pages_blocks_hero_split_bordered_shot\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_split_bordered_shot_path_idx\` ON \`pages_blocks_hero_split_bordered_shot\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_split_bordered_shot_logo_idx\` ON \`pages_blocks_hero_split_bordered_shot\` (\`logo_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_split_bordered_shot_screenshot_idx\` ON \`pages_blocks_hero_split_bordered_shot\` (\`screenshot_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_hero_split_code_example\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`logo_id\` integer,
  	\`badge_label\` text DEFAULT 'What''s new',
  	\`badge_text\` text DEFAULT 'Just shipped v1.0',
  	\`badge_href\` text DEFAULT '#',
  	\`heading\` text DEFAULT 'Supercharge your web app',
  	\`description\` text DEFAULT 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
  	\`primary_cta_label\` text DEFAULT 'Documentation' NOT NULL,
  	\`primary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`secondary_cta_label\` text DEFAULT 'View on GitHub' NOT NULL,
  	\`secondary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`code_tab1\` text DEFAULT 'NotificationSetting.jsx',
  	\`code_tab2\` text DEFAULT 'App.jsx',
  	\`block_name\` text,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_split_code_example_order_idx\` ON \`pages_blocks_hero_split_code_example\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_split_code_example_parent_id_idx\` ON \`pages_blocks_hero_split_code_example\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_split_code_example_path_idx\` ON \`pages_blocks_hero_split_code_example\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_split_code_example_logo_idx\` ON \`pages_blocks_hero_split_code_example\` (\`logo_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_hero_split_img\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`logo_id\` integer,
  	\`announcement_text\` text DEFAULT 'Anim aute id magna aliqua ad ad non deserunt sunt.',
  	\`announcement_href\` text DEFAULT '#',
  	\`heading\` text DEFAULT 'Data to enrich your business',
  	\`description\` text DEFAULT 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.',
  	\`image_id\` integer,
  	\`primary_cta_label\` text DEFAULT 'Get started' NOT NULL,
  	\`primary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`secondary_cta_label\` text DEFAULT 'Learn more' NOT NULL,
  	\`secondary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_split_img_order_idx\` ON \`pages_blocks_hero_split_img\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_split_img_parent_id_idx\` ON \`pages_blocks_hero_split_img\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_split_img_path_idx\` ON \`pages_blocks_hero_split_img\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_split_img_logo_idx\` ON \`pages_blocks_hero_split_img\` (\`logo_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_split_img_image_idx\` ON \`pages_blocks_hero_split_img\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_hero_split_screenshot\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`logo_id\` integer,
  	\`badge_label\` text DEFAULT 'What''s new',
  	\`badge_text\` text DEFAULT 'Just shipped v1.0',
  	\`badge_href\` text DEFAULT '#',
  	\`heading\` text DEFAULT 'Deploy to the cloud with confidence',
  	\`description\` text DEFAULT 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.',
  	\`screenshot_id\` integer,
  	\`primary_cta_label\` text DEFAULT 'Get started' NOT NULL,
  	\`primary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`secondary_cta_label\` text DEFAULT 'Learn more' NOT NULL,
  	\`secondary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`screenshot_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_split_screenshot_order_idx\` ON \`pages_blocks_hero_split_screenshot\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_split_screenshot_parent_id_idx\` ON \`pages_blocks_hero_split_screenshot\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_split_screenshot_path_idx\` ON \`pages_blocks_hero_split_screenshot\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_split_screenshot_logo_idx\` ON \`pages_blocks_hero_split_screenshot\` (\`logo_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_split_screenshot_screenshot_idx\` ON \`pages_blocks_hero_split_screenshot\` (\`screenshot_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_footer4_col_cta_columns_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`href\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_footer4_col_cta_columns\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_cta_columns_links_order_idx\` ON \`pages_blocks_footer4_col_cta_columns_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_cta_columns_links_parent_id_idx\` ON \`pages_blocks_footer4_col_cta_columns_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_footer4_col_cta_columns\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_footer4_col_cta\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_cta_columns_order_idx\` ON \`pages_blocks_footer4_col_cta_columns\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_cta_columns_parent_id_idx\` ON \`pages_blocks_footer4_col_cta_columns\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_footer4_col_cta_social_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`href\` text NOT NULL,
  	\`icon_svg\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_footer4_col_cta\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_cta_social_links_order_idx\` ON \`pages_blocks_footer4_col_cta_social_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_cta_social_links_parent_id_idx\` ON \`pages_blocks_footer4_col_cta_social_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_footer4_col_cta\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`cta_eyebrow\` text DEFAULT 'Get started',
  	\`cta_heading\` text DEFAULT 'Boost your productivity. Start using our app today.',
  	\`cta_description\` text DEFAULT 'Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.',
  	\`cta_button_label\` text DEFAULT 'Get started',
  	\`cta_button_href\` text DEFAULT '#',
  	\`logo_src_id\` integer,
  	\`logo_dark_src_id\` integer,
  	\`logo_alt\` text DEFAULT 'Company name',
  	\`copyright_text\` text DEFAULT '© 2024 Your Company, Inc. All rights reserved.',
  	\`block_name\` text,
  	FOREIGN KEY (\`logo_src_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`logo_dark_src_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_cta_order_idx\` ON \`pages_blocks_footer4_col_cta\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_cta_parent_id_idx\` ON \`pages_blocks_footer4_col_cta\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_cta_path_idx\` ON \`pages_blocks_footer4_col_cta\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_cta_logo_src_idx\` ON \`pages_blocks_footer4_col_cta\` (\`logo_src_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_cta_logo_dark_src_idx\` ON \`pages_blocks_footer4_col_cta\` (\`logo_dark_src_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_footer4_col_mission_social_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`href\` text NOT NULL,
  	\`icon_svg\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_footer4_col_mission\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_mission_social_links_order_idx\` ON \`pages_blocks_footer4_col_mission_social_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_mission_social_links_parent_id_idx\` ON \`pages_blocks_footer4_col_mission_social_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_footer4_col_mission_columns_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`href\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_footer4_col_mission_columns\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_mission_columns_links_order_idx\` ON \`pages_blocks_footer4_col_mission_columns_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_mission_columns_links_parent_id_idx\` ON \`pages_blocks_footer4_col_mission_columns_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_footer4_col_mission_columns\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_footer4_col_mission\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_mission_columns_order_idx\` ON \`pages_blocks_footer4_col_mission_columns\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_mission_columns_parent_id_idx\` ON \`pages_blocks_footer4_col_mission_columns\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_footer4_col_mission\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`logo_src_id\` integer,
  	\`logo_dark_src_id\` integer,
  	\`logo_alt\` text DEFAULT 'Company name',
  	\`mission_text\` text DEFAULT 'Making the world a better place through constructing elegant hierarchies.',
  	\`copyright_text\` text DEFAULT '© 2024 Your Company, Inc. All rights reserved.',
  	\`block_name\` text,
  	FOREIGN KEY (\`logo_src_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`logo_dark_src_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_mission_order_idx\` ON \`pages_blocks_footer4_col_mission\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_mission_parent_id_idx\` ON \`pages_blocks_footer4_col_mission\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_mission_path_idx\` ON \`pages_blocks_footer4_col_mission\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_mission_logo_src_idx\` ON \`pages_blocks_footer4_col_mission\` (\`logo_src_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_mission_logo_dark_src_idx\` ON \`pages_blocks_footer4_col_mission\` (\`logo_dark_src_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_footer4_col_newsletter_columns_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`href\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_footer4_col_newsletter_columns\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_newsletter_columns_links_order_idx\` ON \`pages_blocks_footer4_col_newsletter_columns_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_newsletter_columns_links_parent_id_idx\` ON \`pages_blocks_footer4_col_newsletter_columns_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_footer4_col_newsletter_columns\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_footer4_col_newsletter\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_newsletter_columns_order_idx\` ON \`pages_blocks_footer4_col_newsletter_columns\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_newsletter_columns_parent_id_idx\` ON \`pages_blocks_footer4_col_newsletter_columns\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_footer4_col_newsletter_social_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`href\` text NOT NULL,
  	\`icon_svg\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_footer4_col_newsletter\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_newsletter_social_links_order_idx\` ON \`pages_blocks_footer4_col_newsletter_social_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_newsletter_social_links_parent_id_idx\` ON \`pages_blocks_footer4_col_newsletter_social_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_footer4_col_newsletter\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`newsletter_heading\` text DEFAULT 'Subscribe to our newsletter',
  	\`newsletter_description\` text DEFAULT 'The latest news, articles, and resources, sent to your inbox weekly.',
  	\`newsletter_button_label\` text DEFAULT 'Subscribe',
  	\`copyright_text\` text DEFAULT '© 2024 Your Company, Inc. All rights reserved.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_newsletter_order_idx\` ON \`pages_blocks_footer4_col_newsletter\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_newsletter_parent_id_idx\` ON \`pages_blocks_footer4_col_newsletter\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_newsletter_path_idx\` ON \`pages_blocks_footer4_col_newsletter\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_footer4_col_newsletter_below_columns_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`href\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_footer4_col_newsletter_below_columns\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_newsletter_below_columns_links_order_idx\` ON \`pages_blocks_footer4_col_newsletter_below_columns_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_newsletter_below_columns_links_parent_id_idx\` ON \`pages_blocks_footer4_col_newsletter_below_columns_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_footer4_col_newsletter_below_columns\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_footer4_col_newsletter_below\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_newsletter_below_columns_order_idx\` ON \`pages_blocks_footer4_col_newsletter_below_columns\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_newsletter_below_columns_parent_id_idx\` ON \`pages_blocks_footer4_col_newsletter_below_columns\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_footer4_col_newsletter_below_social_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`href\` text NOT NULL,
  	\`icon_svg\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_footer4_col_newsletter_below\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_newsletter_below_social_links_order_idx\` ON \`pages_blocks_footer4_col_newsletter_below_social_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_newsletter_below_social_links_parent_id_idx\` ON \`pages_blocks_footer4_col_newsletter_below_social_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_footer4_col_newsletter_below\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`logo_src_id\` integer,
  	\`logo_dark_src_id\` integer,
  	\`logo_alt\` text DEFAULT 'Company name',
  	\`newsletter_heading\` text DEFAULT 'Subscribe to our newsletter',
  	\`newsletter_description\` text DEFAULT 'The latest news, articles, and resources, sent to your inbox weekly.',
  	\`newsletter_button_label\` text DEFAULT 'Subscribe',
  	\`copyright_text\` text DEFAULT '© 2024 Your Company, Inc. All rights reserved.',
  	\`block_name\` text,
  	FOREIGN KEY (\`logo_src_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`logo_dark_src_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_newsletter_below_order_idx\` ON \`pages_blocks_footer4_col_newsletter_below\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_newsletter_below_parent_id_idx\` ON \`pages_blocks_footer4_col_newsletter_below\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_newsletter_below_path_idx\` ON \`pages_blocks_footer4_col_newsletter_below\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_newsletter_below_logo_src_idx\` ON \`pages_blocks_footer4_col_newsletter_below\` (\`logo_src_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_newsletter_below_logo_dark_src_idx\` ON \`pages_blocks_footer4_col_newsletter_below\` (\`logo_dark_src_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_footer4_col_simple_columns_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`href\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_footer4_col_simple_columns\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_simple_columns_links_order_idx\` ON \`pages_blocks_footer4_col_simple_columns_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_simple_columns_links_parent_id_idx\` ON \`pages_blocks_footer4_col_simple_columns_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_footer4_col_simple_columns\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_footer4_col_simple\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_simple_columns_order_idx\` ON \`pages_blocks_footer4_col_simple_columns\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_simple_columns_parent_id_idx\` ON \`pages_blocks_footer4_col_simple_columns\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_footer4_col_simple\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`logo_src_id\` integer,
  	\`logo_dark_src_id\` integer,
  	\`logo_alt\` text DEFAULT 'Company name',
  	\`block_name\` text,
  	FOREIGN KEY (\`logo_src_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`logo_dark_src_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_simple_order_idx\` ON \`pages_blocks_footer4_col_simple\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_simple_parent_id_idx\` ON \`pages_blocks_footer4_col_simple\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_simple_path_idx\` ON \`pages_blocks_footer4_col_simple\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_simple_logo_src_idx\` ON \`pages_blocks_footer4_col_simple\` (\`logo_src_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer4_col_simple_logo_dark_src_idx\` ON \`pages_blocks_footer4_col_simple\` (\`logo_dark_src_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_footer_sm_centered_nav_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`href\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_footer_sm_centered\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer_sm_centered_nav_links_order_idx\` ON \`pages_blocks_footer_sm_centered_nav_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer_sm_centered_nav_links_parent_id_idx\` ON \`pages_blocks_footer_sm_centered_nav_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_footer_sm_centered_social_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`href\` text NOT NULL,
  	\`icon_svg\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_footer_sm_centered\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer_sm_centered_social_links_order_idx\` ON \`pages_blocks_footer_sm_centered_social_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer_sm_centered_social_links_parent_id_idx\` ON \`pages_blocks_footer_sm_centered_social_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_footer_sm_centered\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`copyright_text\` text DEFAULT '© 2024 Your Company, Inc. All rights reserved.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer_sm_centered_order_idx\` ON \`pages_blocks_footer_sm_centered\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer_sm_centered_parent_id_idx\` ON \`pages_blocks_footer_sm_centered\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer_sm_centered_path_idx\` ON \`pages_blocks_footer_sm_centered\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_footer_sm_social_social_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`href\` text NOT NULL,
  	\`icon_svg\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_footer_sm_social\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer_sm_social_social_links_order_idx\` ON \`pages_blocks_footer_sm_social_social_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer_sm_social_social_links_parent_id_idx\` ON \`pages_blocks_footer_sm_social_social_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_footer_sm_social\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`copyright_text\` text DEFAULT '© 2024 Your Company, Inc. All rights reserved.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer_sm_social_order_idx\` ON \`pages_blocks_footer_sm_social\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer_sm_social_parent_id_idx\` ON \`pages_blocks_footer_sm_social\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_footer_sm_social_path_idx\` ON \`pages_blocks_footer_sm_social\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_header_centered\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Support center',
  	\`description\` text DEFAULT 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_header_centered_order_idx\` ON \`pages_blocks_header_centered\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_header_centered_parent_id_idx\` ON \`pages_blocks_header_centered\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_header_centered_path_idx\` ON \`pages_blocks_header_centered\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_header_ctr_bg_img\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Support center',
  	\`description\` text DEFAULT 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.',
  	\`background_image_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_header_ctr_bg_img_order_idx\` ON \`pages_blocks_header_ctr_bg_img\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_header_ctr_bg_img_parent_id_idx\` ON \`pages_blocks_header_ctr_bg_img\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_header_ctr_bg_img_path_idx\` ON \`pages_blocks_header_ctr_bg_img\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_header_ctr_bg_img_background_image_idx\` ON \`pages_blocks_header_ctr_bg_img\` (\`background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_header_ctr_eyebrow\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`eyebrow\` text DEFAULT 'Get the help you need',
  	\`heading\` text DEFAULT 'Support center',
  	\`description\` text DEFAULT 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_header_ctr_eyebrow_order_idx\` ON \`pages_blocks_header_ctr_eyebrow\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_header_ctr_eyebrow_parent_id_idx\` ON \`pages_blocks_header_ctr_eyebrow\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_header_ctr_eyebrow_path_idx\` ON \`pages_blocks_header_ctr_eyebrow\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_header_simple\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Support center',
  	\`description\` text DEFAULT 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_header_simple_order_idx\` ON \`pages_blocks_header_simple\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_header_simple_parent_id_idx\` ON \`pages_blocks_header_simple\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_header_simple_path_idx\` ON \`pages_blocks_header_simple\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_header_sm_bg_img\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Support center',
  	\`description\` text DEFAULT 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.',
  	\`background_image_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_header_sm_bg_img_order_idx\` ON \`pages_blocks_header_sm_bg_img\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_header_sm_bg_img_parent_id_idx\` ON \`pages_blocks_header_sm_bg_img\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_header_sm_bg_img_path_idx\` ON \`pages_blocks_header_sm_bg_img\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_header_sm_bg_img_background_image_idx\` ON \`pages_blocks_header_sm_bg_img\` (\`background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_header_sm_eyebrow\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`eyebrow\` text DEFAULT 'Get the help you need',
  	\`heading\` text DEFAULT 'Support center',
  	\`description\` text DEFAULT 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_header_sm_eyebrow_order_idx\` ON \`pages_blocks_header_sm_eyebrow\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_header_sm_eyebrow_parent_id_idx\` ON \`pages_blocks_header_sm_eyebrow\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_header_sm_eyebrow_path_idx\` ON \`pages_blocks_header_sm_eyebrow\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_header_with_cards_cards\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`icon_svg\` text,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_header_with_cards\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_header_with_cards_cards_order_idx\` ON \`pages_blocks_header_with_cards_cards\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_header_with_cards_cards_parent_id_idx\` ON \`pages_blocks_header_with_cards_cards\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_header_with_cards\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Support center',
  	\`description\` text DEFAULT 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.',
  	\`background_image_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_header_with_cards_order_idx\` ON \`pages_blocks_header_with_cards\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_header_with_cards_parent_id_idx\` ON \`pages_blocks_header_with_cards\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_header_with_cards_path_idx\` ON \`pages_blocks_header_with_cards\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_header_with_cards_background_image_idx\` ON \`pages_blocks_header_with_cards\` (\`background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_header_with_stats_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`href\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_header_with_stats\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_header_with_stats_links_order_idx\` ON \`pages_blocks_header_with_stats_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_header_with_stats_links_parent_id_idx\` ON \`pages_blocks_header_with_stats_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_header_with_stats_stats\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`value\` text NOT NULL,
  	\`label\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_header_with_stats\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_header_with_stats_stats_order_idx\` ON \`pages_blocks_header_with_stats_stats\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_header_with_stats_stats_parent_id_idx\` ON \`pages_blocks_header_with_stats_stats\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_header_with_stats\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Work with us',
  	\`description\` text DEFAULT 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.',
  	\`background_image_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_header_with_stats_order_idx\` ON \`pages_blocks_header_with_stats\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_header_with_stats_parent_id_idx\` ON \`pages_blocks_header_with_stats\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_header_with_stats_path_idx\` ON \`pages_blocks_header_with_stats\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_header_with_stats_background_image_idx\` ON \`pages_blocks_header_with_stats\` (\`background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_logocloud_grid_logos\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`light_src_id\` integer,
  	\`dark_src_id\` integer,
  	\`alt\` text NOT NULL,
  	FOREIGN KEY (\`light_src_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`dark_src_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_logocloud_grid\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_grid_logos_order_idx\` ON \`pages_blocks_logocloud_grid_logos\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_grid_logos_parent_id_idx\` ON \`pages_blocks_logocloud_grid_logos\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_grid_logos_light_src_idx\` ON \`pages_blocks_logocloud_grid_logos\` (\`light_src_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_grid_logos_dark_src_idx\` ON \`pages_blocks_logocloud_grid_logos\` (\`dark_src_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_logocloud_grid\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_grid_order_idx\` ON \`pages_blocks_logocloud_grid\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_grid_parent_id_idx\` ON \`pages_blocks_logocloud_grid\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_grid_path_idx\` ON \`pages_blocks_logocloud_grid\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_logocloud_simple_logos\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`light_src_id\` integer,
  	\`dark_src_id\` integer,
  	\`alt\` text NOT NULL,
  	FOREIGN KEY (\`light_src_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`dark_src_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_logocloud_simple\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_simple_logos_order_idx\` ON \`pages_blocks_logocloud_simple_logos\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_simple_logos_parent_id_idx\` ON \`pages_blocks_logocloud_simple_logos\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_simple_logos_light_src_idx\` ON \`pages_blocks_logocloud_simple_logos\` (\`light_src_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_simple_logos_dark_src_idx\` ON \`pages_blocks_logocloud_simple_logos\` (\`dark_src_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_logocloud_simple\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_simple_order_idx\` ON \`pages_blocks_logocloud_simple\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_simple_parent_id_idx\` ON \`pages_blocks_logocloud_simple\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_simple_path_idx\` ON \`pages_blocks_logocloud_simple\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_logocloud_sm_cta_logos\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`light_src_id\` integer,
  	\`dark_src_id\` integer,
  	\`alt\` text NOT NULL,
  	FOREIGN KEY (\`light_src_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`dark_src_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_logocloud_sm_cta\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_sm_cta_logos_order_idx\` ON \`pages_blocks_logocloud_sm_cta_logos\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_sm_cta_logos_parent_id_idx\` ON \`pages_blocks_logocloud_sm_cta_logos\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_sm_cta_logos_light_src_idx\` ON \`pages_blocks_logocloud_sm_cta_logos\` (\`light_src_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_sm_cta_logos_dark_src_idx\` ON \`pages_blocks_logocloud_sm_cta_logos\` (\`dark_src_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_logocloud_sm_cta\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`cta_text\` text DEFAULT 'Over 2500 companies use our tools to better their business.',
  	\`cta_link_label\` text DEFAULT 'Read our customer stories',
  	\`cta_link_href\` text DEFAULT '#',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_sm_cta_order_idx\` ON \`pages_blocks_logocloud_sm_cta\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_sm_cta_parent_id_idx\` ON \`pages_blocks_logocloud_sm_cta\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_sm_cta_path_idx\` ON \`pages_blocks_logocloud_sm_cta\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_logocloud_sm_heading_logos\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`light_src_id\` integer,
  	\`dark_src_id\` integer,
  	\`alt\` text NOT NULL,
  	FOREIGN KEY (\`light_src_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`dark_src_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_logocloud_sm_heading\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_sm_heading_logos_order_idx\` ON \`pages_blocks_logocloud_sm_heading_logos\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_sm_heading_logos_parent_id_idx\` ON \`pages_blocks_logocloud_sm_heading_logos\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_sm_heading_logos_light_src_idx\` ON \`pages_blocks_logocloud_sm_heading_logos\` (\`light_src_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_sm_heading_logos_dark_src_idx\` ON \`pages_blocks_logocloud_sm_heading_logos\` (\`dark_src_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_logocloud_sm_heading\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Trusted by the world''s most innovative teams',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_sm_heading_order_idx\` ON \`pages_blocks_logocloud_sm_heading\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_sm_heading_parent_id_idx\` ON \`pages_blocks_logocloud_sm_heading\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_sm_heading_path_idx\` ON \`pages_blocks_logocloud_sm_heading\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_logocloud_sm_left_aligned_logos\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`light_src_id\` integer,
  	\`dark_src_id\` integer,
  	\`alt\` text NOT NULL,
  	FOREIGN KEY (\`light_src_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`dark_src_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_logocloud_sm_left_aligned\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_sm_left_aligned_logos_order_idx\` ON \`pages_blocks_logocloud_sm_left_aligned_logos\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_sm_left_aligned_logos_parent_id_idx\` ON \`pages_blocks_logocloud_sm_left_aligned_logos\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_sm_left_aligned_logos_light_src_idx\` ON \`pages_blocks_logocloud_sm_left_aligned_logos\` (\`light_src_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_sm_left_aligned_logos_dark_src_idx\` ON \`pages_blocks_logocloud_sm_left_aligned_logos\` (\`dark_src_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_logocloud_sm_left_aligned\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Trusted by the world''s most innovative teams',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_sm_left_aligned_order_idx\` ON \`pages_blocks_logocloud_sm_left_aligned\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_sm_left_aligned_parent_id_idx\` ON \`pages_blocks_logocloud_sm_left_aligned\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_sm_left_aligned_path_idx\` ON \`pages_blocks_logocloud_sm_left_aligned\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_logocloud_split_logos_right_logos\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`light_src_id\` integer,
  	\`dark_src_id\` integer,
  	\`alt\` text NOT NULL,
  	FOREIGN KEY (\`light_src_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`dark_src_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_logocloud_split_logos_right\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_split_logos_right_logos_order_idx\` ON \`pages_blocks_logocloud_split_logos_right_logos\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_split_logos_right_logos_parent_id_idx\` ON \`pages_blocks_logocloud_split_logos_right_logos\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_split_logos_right_logos_light_src_idx\` ON \`pages_blocks_logocloud_split_logos_right_logos\` (\`light_src_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_split_logos_right_logos_dark_src_idx\` ON \`pages_blocks_logocloud_split_logos_right_logos\` (\`dark_src_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_logocloud_split_logos_right\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Trusted by the most innovative teams',
  	\`description\` text DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.',
  	\`primary_cta_label\` text DEFAULT 'Create account' NOT NULL,
  	\`primary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`secondary_cta_label\` text DEFAULT 'Contact us' NOT NULL,
  	\`secondary_cta_href\` text DEFAULT '#' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_split_logos_right_order_idx\` ON \`pages_blocks_logocloud_split_logos_right\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_split_logos_right_parent_id_idx\` ON \`pages_blocks_logocloud_split_logos_right\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logocloud_split_logos_right_path_idx\` ON \`pages_blocks_logocloud_split_logos_right\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_newsletter_centered_card\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Get notified when we''re launching',
  	\`description\` text DEFAULT 'Reprehenderit ad esse et non officia in nulla. Id proident tempor incididunt nostrud nulla et culpa.',
  	\`email_placeholder\` text DEFAULT 'Enter your email',
  	\`submit_label\` text DEFAULT 'Notify me',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_newsletter_centered_card_order_idx\` ON \`pages_blocks_newsletter_centered_card\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_newsletter_centered_card_parent_id_idx\` ON \`pages_blocks_newsletter_centered_card\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_newsletter_centered_card_path_idx\` ON \`pages_blocks_newsletter_centered_card\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_newsletter_sbs_details_details\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`icon_svg\` text NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_newsletter_sbs_details\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_newsletter_sbs_details_details_order_idx\` ON \`pages_blocks_newsletter_sbs_details_details\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_newsletter_sbs_details_details_parent_id_idx\` ON \`pages_blocks_newsletter_sbs_details_details\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_newsletter_sbs_details\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Subscribe to our newsletter',
  	\`description\` text DEFAULT 'Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.',
  	\`email_placeholder\` text DEFAULT 'Enter your email',
  	\`subscribe_label\` text DEFAULT 'Subscribe',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_newsletter_sbs_details_order_idx\` ON \`pages_blocks_newsletter_sbs_details\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_newsletter_sbs_details_parent_id_idx\` ON \`pages_blocks_newsletter_sbs_details\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_newsletter_sbs_details_path_idx\` ON \`pages_blocks_newsletter_sbs_details\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_newsletter_sbs_on_card\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Want our product updates? Sign up for our newsletter.',
  	\`email_placeholder\` text DEFAULT 'Enter your email',
  	\`submit_label\` text DEFAULT 'Notify me',
  	\`privacy_text\` text DEFAULT 'We care about your data. Read our',
  	\`privacy_label\` text DEFAULT 'privacy policy',
  	\`privacy_href\` text DEFAULT '#',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_newsletter_sbs_on_card_order_idx\` ON \`pages_blocks_newsletter_sbs_on_card\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_newsletter_sbs_on_card_parent_id_idx\` ON \`pages_blocks_newsletter_sbs_on_card\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_newsletter_sbs_on_card_path_idx\` ON \`pages_blocks_newsletter_sbs_on_card\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_newsletter_sm_sbs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Want product news and updates? Sign up for our newsletter.',
  	\`email_placeholder\` text DEFAULT 'Enter your email',
  	\`subscribe_label\` text DEFAULT 'Subscribe',
  	\`privacy_text\` text DEFAULT 'We care about your data. Read our',
  	\`privacy_label\` text DEFAULT 'privacy policy',
  	\`privacy_href\` text DEFAULT '#',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_newsletter_sm_sbs_order_idx\` ON \`pages_blocks_newsletter_sm_sbs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_newsletter_sm_sbs_parent_id_idx\` ON \`pages_blocks_newsletter_sm_sbs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_newsletter_sm_sbs_path_idx\` ON \`pages_blocks_newsletter_sm_sbs\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_newsletter_sm_sbs_on_brand\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Want product news and updates? Sign up for our newsletter.',
  	\`email_placeholder\` text DEFAULT 'Enter your email',
  	\`subscribe_label\` text DEFAULT 'Subscribe',
  	\`privacy_text\` text DEFAULT 'We care about your data. Read our',
  	\`privacy_label\` text DEFAULT 'privacy policy',
  	\`privacy_href\` text DEFAULT '#',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_newsletter_sm_sbs_on_brand_order_idx\` ON \`pages_blocks_newsletter_sm_sbs_on_brand\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_newsletter_sm_sbs_on_brand_parent_id_idx\` ON \`pages_blocks_newsletter_sm_sbs_on_brand\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_newsletter_sm_sbs_on_brand_path_idx\` ON \`pages_blocks_newsletter_sm_sbs_on_brand\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_newsletter_sm_stacked\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Want product news and updates? Sign up for our newsletter.',
  	\`email_placeholder\` text DEFAULT 'Enter your email',
  	\`subscribe_label\` text DEFAULT 'Subscribe',
  	\`privacy_text\` text DEFAULT 'We care about your data. Read our',
  	\`privacy_label\` text DEFAULT 'privacy policy',
  	\`privacy_href\` text DEFAULT '#',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_newsletter_sm_stacked_order_idx\` ON \`pages_blocks_newsletter_sm_stacked\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_newsletter_sm_stacked_parent_id_idx\` ON \`pages_blocks_newsletter_sm_stacked\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_newsletter_sm_stacked_path_idx\` ON \`pages_blocks_newsletter_sm_stacked\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_stats_simple_stats\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`value\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_stats_simple\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_simple_stats_order_idx\` ON \`pages_blocks_stats_simple_stats\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_simple_stats_parent_id_idx\` ON \`pages_blocks_stats_simple_stats\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_stats_simple\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_simple_order_idx\` ON \`pages_blocks_stats_simple\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_simple_parent_id_idx\` ON \`pages_blocks_stats_simple\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_simple_path_idx\` ON \`pages_blocks_stats_simple\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_stats_simple_grid_stats\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`value\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_stats_simple_grid\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_simple_grid_stats_order_idx\` ON \`pages_blocks_stats_simple_grid_stats\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_simple_grid_stats_parent_id_idx\` ON \`pages_blocks_stats_simple_grid_stats\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_stats_simple_grid\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Trusted by creators worldwide',
  	\`description\` text DEFAULT 'Lorem ipsum dolor sit amet consect adipisicing possimus.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_simple_grid_order_idx\` ON \`pages_blocks_stats_simple_grid\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_simple_grid_parent_id_idx\` ON \`pages_blocks_stats_simple_grid\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_simple_grid_path_idx\` ON \`pages_blocks_stats_simple_grid\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_stats_split_with_image_stats\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`value\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_stats_split_with_image\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_split_with_image_stats_order_idx\` ON \`pages_blocks_stats_split_with_image_stats\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_split_with_image_stats_parent_id_idx\` ON \`pages_blocks_stats_split_with_image_stats\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_stats_split_with_image\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`eyebrow\` text DEFAULT 'Our track record',
  	\`heading\` text DEFAULT 'Trusted by thousands of creators worldwide',
  	\`description\` text DEFAULT 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_split_with_image_order_idx\` ON \`pages_blocks_stats_split_with_image\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_split_with_image_parent_id_idx\` ON \`pages_blocks_stats_split_with_image\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_split_with_image_path_idx\` ON \`pages_blocks_stats_split_with_image\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_split_with_image_image_idx\` ON \`pages_blocks_stats_split_with_image\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_stats_stepped_stats\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`value\` text NOT NULL,
  	\`label\` text NOT NULL,
  	\`description\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_stats_stepped\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_stepped_stats_order_idx\` ON \`pages_blocks_stats_stepped_stats\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_stepped_stats_parent_id_idx\` ON \`pages_blocks_stats_stepped_stats\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_stats_stepped\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'We approach work as a place to make the world better',
  	\`description\` text DEFAULT 'Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non placerat nam arcu. Cras purus nibh cursus sit eu in id. Integer vel nibh.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_stepped_order_idx\` ON \`pages_blocks_stats_stepped\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_stepped_parent_id_idx\` ON \`pages_blocks_stats_stepped\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_stepped_path_idx\` ON \`pages_blocks_stats_stepped\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_stats_timeline_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`datetime\` text NOT NULL,
  	\`date_label\` text NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_stats_timeline\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_timeline_items_order_idx\` ON \`pages_blocks_stats_timeline_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_timeline_items_parent_id_idx\` ON \`pages_blocks_stats_timeline_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_stats_timeline\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_timeline_order_idx\` ON \`pages_blocks_stats_timeline\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_timeline_parent_id_idx\` ON \`pages_blocks_stats_timeline\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_timeline_path_idx\` ON \`pages_blocks_stats_timeline\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_stats_with_bg_image_stats\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`value\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_stats_with_bg_image\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_with_bg_image_stats_order_idx\` ON \`pages_blocks_stats_with_bg_image_stats\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_with_bg_image_stats_parent_id_idx\` ON \`pages_blocks_stats_with_bg_image_stats\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_stats_with_bg_image\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`light_image_id\` integer,
  	\`dark_image_id\` integer,
  	\`eyebrow\` text DEFAULT 'Our track record',
  	\`heading\` text DEFAULT 'Trusted by thousands of creators worldwide',
  	\`description\` text DEFAULT 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis.',
  	\`block_name\` text,
  	FOREIGN KEY (\`light_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`dark_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_with_bg_image_order_idx\` ON \`pages_blocks_stats_with_bg_image\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_with_bg_image_parent_id_idx\` ON \`pages_blocks_stats_with_bg_image\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_with_bg_image_path_idx\` ON \`pages_blocks_stats_with_bg_image\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_with_bg_image_light_image_idx\` ON \`pages_blocks_stats_with_bg_image\` (\`light_image_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_with_bg_image_dark_image_idx\` ON \`pages_blocks_stats_with_bg_image\` (\`dark_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_stats_with_desc_stats\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`value\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_stats_with_desc\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_with_desc_stats_order_idx\` ON \`pages_blocks_stats_with_desc_stats\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_with_desc_stats_parent_id_idx\` ON \`pages_blocks_stats_with_desc_stats\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_stats_with_desc\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Our mission',
  	\`body_primary\` text DEFAULT 'Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.',
  	\`body_secondary\` text DEFAULT 'Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_with_desc_order_idx\` ON \`pages_blocks_stats_with_desc\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_with_desc_parent_id_idx\` ON \`pages_blocks_stats_with_desc\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_with_desc_path_idx\` ON \`pages_blocks_stats_with_desc\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_stats_with_two_col_desc_stats\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`value\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_stats_with_two_col_desc\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_with_two_col_desc_stats_order_idx\` ON \`pages_blocks_stats_with_two_col_desc_stats\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_with_two_col_desc_stats_parent_id_idx\` ON \`pages_blocks_stats_with_two_col_desc_stats\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_stats_with_two_col_desc\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`eyebrow\` text DEFAULT 'Deploy faster',
  	\`heading\` text DEFAULT 'A better workflow',
  	\`col_one_para_one\` text DEFAULT 'Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.',
  	\`col_one_para_two\` text DEFAULT 'Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas.',
  	\`col_two_para_one\` text DEFAULT 'Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id dignissim eget. Est augue maecenas risus nulla ultrices congue nunc tortor. Enim et nesciunt doloremque nesciunt voluptate.',
  	\`col_two_para_two\` text DEFAULT 'Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_with_two_col_desc_order_idx\` ON \`pages_blocks_stats_with_two_col_desc\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_with_two_col_desc_parent_id_idx\` ON \`pages_blocks_stats_with_two_col_desc\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_with_two_col_desc_path_idx\` ON \`pages_blocks_stats_with_two_col_desc\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_team_full_width_vert_imgs_members_social_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`href\` text NOT NULL,
  	\`icon_svg\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_team_full_width_vert_imgs_members\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_full_width_vert_imgs_members_social_links_order_idx\` ON \`pages_blocks_team_full_width_vert_imgs_members_social_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_full_width_vert_imgs_members_social_links_parent_id_idx\` ON \`pages_blocks_team_full_width_vert_imgs_members_social_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_team_full_width_vert_imgs_members\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`role\` text NOT NULL,
  	\`bio\` text,
  	\`image_id\` integer,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_team_full_width_vert_imgs\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_full_width_vert_imgs_members_order_idx\` ON \`pages_blocks_team_full_width_vert_imgs_members\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_full_width_vert_imgs_members_parent_id_idx\` ON \`pages_blocks_team_full_width_vert_imgs_members\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_full_width_vert_imgs_members_image_idx\` ON \`pages_blocks_team_full_width_vert_imgs_members\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_team_full_width_vert_imgs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Meet our leadership',
  	\`description\` text DEFAULT 'We''re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_full_width_vert_imgs_order_idx\` ON \`pages_blocks_team_full_width_vert_imgs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_full_width_vert_imgs_parent_id_idx\` ON \`pages_blocks_team_full_width_vert_imgs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_full_width_vert_imgs_path_idx\` ON \`pages_blocks_team_full_width_vert_imgs\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_team_grid_large_round_members_social_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`href\` text NOT NULL,
  	\`icon_svg\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_team_grid_large_round_members\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_grid_large_round_members_social_links_order_idx\` ON \`pages_blocks_team_grid_large_round_members_social_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_grid_large_round_members_social_links_parent_id_idx\` ON \`pages_blocks_team_grid_large_round_members_social_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_team_grid_large_round_members\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`role\` text NOT NULL,
  	\`image_id\` integer,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_team_grid_large_round\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_grid_large_round_members_order_idx\` ON \`pages_blocks_team_grid_large_round_members\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_grid_large_round_members_parent_id_idx\` ON \`pages_blocks_team_grid_large_round_members\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_grid_large_round_members_image_idx\` ON \`pages_blocks_team_grid_large_round_members\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_team_grid_large_round\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Meet our leadership',
  	\`description\` text DEFAULT 'We''re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_grid_large_round_order_idx\` ON \`pages_blocks_team_grid_large_round\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_grid_large_round_parent_id_idx\` ON \`pages_blocks_team_grid_large_round\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_grid_large_round_path_idx\` ON \`pages_blocks_team_grid_large_round\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_team_grid_round_imgs_members\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`role\` text NOT NULL,
  	\`image_id\` integer,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_team_grid_round_imgs\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_grid_round_imgs_members_order_idx\` ON \`pages_blocks_team_grid_round_imgs_members\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_grid_round_imgs_members_parent_id_idx\` ON \`pages_blocks_team_grid_round_imgs_members\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_grid_round_imgs_members_image_idx\` ON \`pages_blocks_team_grid_round_imgs_members\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_team_grid_round_imgs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Our team',
  	\`description\` text DEFAULT 'We''re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_grid_round_imgs_order_idx\` ON \`pages_blocks_team_grid_round_imgs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_grid_round_imgs_parent_id_idx\` ON \`pages_blocks_team_grid_round_imgs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_grid_round_imgs_path_idx\` ON \`pages_blocks_team_grid_round_imgs\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_team_img_short_para_members_social_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`href\` text NOT NULL,
  	\`icon_svg\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_team_img_short_para_members\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_img_short_para_members_social_links_order_idx\` ON \`pages_blocks_team_img_short_para_members_social_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_img_short_para_members_social_links_parent_id_idx\` ON \`pages_blocks_team_img_short_para_members_social_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_team_img_short_para_members\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`role\` text NOT NULL,
  	\`bio\` text,
  	\`image_id\` integer,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_team_img_short_para\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_img_short_para_members_order_idx\` ON \`pages_blocks_team_img_short_para_members\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_img_short_para_members_parent_id_idx\` ON \`pages_blocks_team_img_short_para_members\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_img_short_para_members_image_idx\` ON \`pages_blocks_team_img_short_para_members\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_team_img_short_para\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Our team',
  	\`description\` text DEFAULT 'We''re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_img_short_para_order_idx\` ON \`pages_blocks_team_img_short_para\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_img_short_para_parent_id_idx\` ON \`pages_blocks_team_img_short_para\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_img_short_para_path_idx\` ON \`pages_blocks_team_img_short_para\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_team_large_grid_cards_members_social_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`href\` text NOT NULL,
  	\`icon_svg\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_team_large_grid_cards_members\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_large_grid_cards_members_social_links_order_idx\` ON \`pages_blocks_team_large_grid_cards_members_social_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_large_grid_cards_members_social_links_parent_id_idx\` ON \`pages_blocks_team_large_grid_cards_members_social_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_team_large_grid_cards_members\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`role\` text NOT NULL,
  	\`image_id\` integer,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_team_large_grid_cards\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_large_grid_cards_members_order_idx\` ON \`pages_blocks_team_large_grid_cards_members\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_large_grid_cards_members_parent_id_idx\` ON \`pages_blocks_team_large_grid_cards_members\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_large_grid_cards_members_image_idx\` ON \`pages_blocks_team_large_grid_cards_members\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_team_large_grid_cards\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Meet our team',
  	\`description\` text DEFAULT 'We''re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_large_grid_cards_order_idx\` ON \`pages_blocks_team_large_grid_cards\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_large_grid_cards_parent_id_idx\` ON \`pages_blocks_team_large_grid_cards\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_large_grid_cards_path_idx\` ON \`pages_blocks_team_large_grid_cards\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_team_large_imgs_members_social_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`href\` text NOT NULL,
  	\`icon_svg\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_team_large_imgs_members\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_large_imgs_members_social_links_order_idx\` ON \`pages_blocks_team_large_imgs_members_social_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_large_imgs_members_social_links_parent_id_idx\` ON \`pages_blocks_team_large_imgs_members_social_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_team_large_imgs_members\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`role\` text NOT NULL,
  	\`image_id\` integer,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_team_large_imgs\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_large_imgs_members_order_idx\` ON \`pages_blocks_team_large_imgs_members\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_large_imgs_members_parent_id_idx\` ON \`pages_blocks_team_large_imgs_members\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_large_imgs_members_image_idx\` ON \`pages_blocks_team_large_imgs_members\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_team_large_imgs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Our team',
  	\`description\` text DEFAULT 'We''re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_large_imgs_order_idx\` ON \`pages_blocks_team_large_imgs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_large_imgs_parent_id_idx\` ON \`pages_blocks_team_large_imgs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_large_imgs_path_idx\` ON \`pages_blocks_team_large_imgs\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_team_medium_imgs_members\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`role\` text NOT NULL,
  	\`location\` text,
  	\`image_id\` integer,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_team_medium_imgs\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_medium_imgs_members_order_idx\` ON \`pages_blocks_team_medium_imgs_members\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_medium_imgs_members_parent_id_idx\` ON \`pages_blocks_team_medium_imgs_members\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_medium_imgs_members_image_idx\` ON \`pages_blocks_team_medium_imgs_members\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_team_medium_imgs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Our team',
  	\`description\` text DEFAULT 'We''re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_medium_imgs_order_idx\` ON \`pages_blocks_team_medium_imgs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_medium_imgs_parent_id_idx\` ON \`pages_blocks_team_medium_imgs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_medium_imgs_path_idx\` ON \`pages_blocks_team_medium_imgs\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_team_small_imgs_members\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`role\` text NOT NULL,
  	\`image_id\` integer,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_team_small_imgs\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_small_imgs_members_order_idx\` ON \`pages_blocks_team_small_imgs_members\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_small_imgs_members_parent_id_idx\` ON \`pages_blocks_team_small_imgs_members\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_small_imgs_members_image_idx\` ON \`pages_blocks_team_small_imgs_members\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_team_small_imgs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Meet our leadership',
  	\`description\` text DEFAULT 'We''re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_small_imgs_order_idx\` ON \`pages_blocks_team_small_imgs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_small_imgs_parent_id_idx\` ON \`pages_blocks_team_small_imgs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_small_imgs_path_idx\` ON \`pages_blocks_team_small_imgs\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_team_vert_imgs_members_social_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`href\` text NOT NULL,
  	\`icon_svg\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_team_vert_imgs_members\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_vert_imgs_members_social_links_order_idx\` ON \`pages_blocks_team_vert_imgs_members_social_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_vert_imgs_members_social_links_parent_id_idx\` ON \`pages_blocks_team_vert_imgs_members_social_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_team_vert_imgs_members\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`role\` text NOT NULL,
  	\`bio\` text,
  	\`image_id\` integer,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_team_vert_imgs\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_vert_imgs_members_order_idx\` ON \`pages_blocks_team_vert_imgs_members\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_vert_imgs_members_parent_id_idx\` ON \`pages_blocks_team_vert_imgs_members\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_vert_imgs_members_image_idx\` ON \`pages_blocks_team_vert_imgs_members\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_team_vert_imgs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'About the team',
  	\`description\` text DEFAULT 'We''re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_vert_imgs_order_idx\` ON \`pages_blocks_team_vert_imgs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_vert_imgs_parent_id_idx\` ON \`pages_blocks_team_vert_imgs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_vert_imgs_path_idx\` ON \`pages_blocks_team_vert_imgs\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_testimonials_bg_image\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`background_image_id\` integer,
  	\`logo_id\` integer,
  	\`quote\` text DEFAULT 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.',
  	\`author_name\` text DEFAULT 'Judith Black',
  	\`author_title\` text DEFAULT 'CEO of Workcation',
  	\`block_name\` text,
  	FOREIGN KEY (\`background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_bg_image_order_idx\` ON \`pages_blocks_testimonials_bg_image\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_bg_image_parent_id_idx\` ON \`pages_blocks_testimonials_bg_image\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_bg_image_path_idx\` ON \`pages_blocks_testimonials_bg_image\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_bg_image_background_image_idx\` ON \`pages_blocks_testimonials_bg_image\` (\`background_image_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_bg_image_logo_idx\` ON \`pages_blocks_testimonials_bg_image\` (\`logo_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_testimonials_grid_testimonials\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`quote\` text NOT NULL,
  	\`author_image_id\` integer,
  	\`author_name\` text NOT NULL,
  	\`author_handle\` text NOT NULL,
  	FOREIGN KEY (\`author_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_testimonials_grid\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_grid_testimonials_order_idx\` ON \`pages_blocks_testimonials_grid_testimonials\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_grid_testimonials_parent_id_idx\` ON \`pages_blocks_testimonials_grid_testimonials\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_grid_testimonials_author_image_idx\` ON \`pages_blocks_testimonials_grid_testimonials\` (\`author_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_testimonials_grid\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`eyebrow\` text DEFAULT 'Testimonials',
  	\`heading\` text DEFAULT 'We have worked with thousands of amazing people',
  	\`featured_testimonial_quote\` text NOT NULL,
  	\`featured_testimonial_author_image_id\` integer,
  	\`featured_testimonial_author_name\` text NOT NULL,
  	\`featured_testimonial_author_handle\` text NOT NULL,
  	\`featured_testimonial_logo_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`featured_testimonial_author_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`featured_testimonial_logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_grid_order_idx\` ON \`pages_blocks_testimonials_grid\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_grid_parent_id_idx\` ON \`pages_blocks_testimonials_grid\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_grid_path_idx\` ON \`pages_blocks_testimonials_grid\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_grid_featured_testimonial_feat_idx\` ON \`pages_blocks_testimonials_grid\` (\`featured_testimonial_author_image_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_grid_featured_testimonial_fe_1_idx\` ON \`pages_blocks_testimonials_grid\` (\`featured_testimonial_logo_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_testimonials_large_avatar\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`quote\` text DEFAULT 'Commodo amet fugiat excepteur sunt qui ea elit cupidatat ullamco consectetur ipsum elit consequat. Elit sunt proident ea nulla ad nulla dolore ad pariatur tempor non. Sint veniam minim et ea.',
  	\`author_image_id\` integer,
  	\`author_name\` text DEFAULT 'Judith Black',
  	\`author_title\` text DEFAULT 'CEO of Workcation',
  	\`block_name\` text,
  	FOREIGN KEY (\`author_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_large_avatar_order_idx\` ON \`pages_blocks_testimonials_large_avatar\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_large_avatar_parent_id_idx\` ON \`pages_blocks_testimonials_large_avatar\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_large_avatar_path_idx\` ON \`pages_blocks_testimonials_large_avatar\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_large_avatar_author_image_idx\` ON \`pages_blocks_testimonials_large_avatar\` (\`author_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_testimonials_overlap_img\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`person_image_id\` integer,
  	\`quote\` text DEFAULT 'Gravida quam mi erat tortor neque molestie. Auctor aliquet at porttitor a enim nunc suscipit tincidunt nunc. Et non lorem tortor posuere. Nunc eu scelerisque interdum eget tellus non nibh scelerisque bibendum.',
  	\`author_name\` text DEFAULT 'Judith Black',
  	\`author_title\` text DEFAULT 'CEO of Workcation',
  	\`block_name\` text,
  	FOREIGN KEY (\`person_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_overlap_img_order_idx\` ON \`pages_blocks_testimonials_overlap_img\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_overlap_img_parent_id_idx\` ON \`pages_blocks_testimonials_overlap_img\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_overlap_img_path_idx\` ON \`pages_blocks_testimonials_overlap_img\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_overlap_img_person_image_idx\` ON \`pages_blocks_testimonials_overlap_img\` (\`person_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_testimonials_side_by_side_testimonials\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`logo_id\` integer,
  	\`quote\` text NOT NULL,
  	\`author_image_id\` integer,
  	\`author_name\` text NOT NULL,
  	\`author_title\` text NOT NULL,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`author_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_testimonials_side_by_side\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_side_by_side_testimonials_order_idx\` ON \`pages_blocks_testimonials_side_by_side_testimonials\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_side_by_side_testimonials_parent_id_idx\` ON \`pages_blocks_testimonials_side_by_side_testimonials\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_side_by_side_testimonials_logo_idx\` ON \`pages_blocks_testimonials_side_by_side_testimonials\` (\`logo_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_side_by_side_testimonials_auth_idx\` ON \`pages_blocks_testimonials_side_by_side_testimonials\` (\`author_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_testimonials_side_by_side\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_side_by_side_order_idx\` ON \`pages_blocks_testimonials_side_by_side\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_side_by_side_parent_id_idx\` ON \`pages_blocks_testimonials_side_by_side\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_side_by_side_path_idx\` ON \`pages_blocks_testimonials_side_by_side\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_testimonials_simple_centered\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`logo_id\` integer,
  	\`quote\` text DEFAULT 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.',
  	\`author_image_id\` integer,
  	\`author_name\` text DEFAULT 'Judith Black',
  	\`author_title\` text DEFAULT 'CEO of Workcation',
  	\`block_name\` text,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`author_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_simple_centered_order_idx\` ON \`pages_blocks_testimonials_simple_centered\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_simple_centered_parent_id_idx\` ON \`pages_blocks_testimonials_simple_centered\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_simple_centered_path_idx\` ON \`pages_blocks_testimonials_simple_centered\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_simple_centered_logo_idx\` ON \`pages_blocks_testimonials_simple_centered\` (\`logo_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_simple_centered_author_image_idx\` ON \`pages_blocks_testimonials_simple_centered\` (\`author_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_testimonials_star_rating\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`star_count\` numeric DEFAULT 5,
  	\`quote\` text DEFAULT 'Qui dolor enim consectetur do et non ex amet culpa sint in ea non dolore. Enim minim magna anim id minim eu cillum sunt dolore aliquip. Amet elit laborum culpa irure incididunt adipisicing culpa amet officia exercitation. Eu non aute velit id velit Lorem elit anim pariatur.',
  	\`author_image_id\` integer,
  	\`author_name\` text DEFAULT 'Judith Black',
  	\`author_title\` text DEFAULT 'CEO of Workcation',
  	\`block_name\` text,
  	FOREIGN KEY (\`author_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_star_rating_order_idx\` ON \`pages_blocks_testimonials_star_rating\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_star_rating_parent_id_idx\` ON \`pages_blocks_testimonials_star_rating\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_star_rating_path_idx\` ON \`pages_blocks_testimonials_star_rating\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_star_rating_author_image_idx\` ON \`pages_blocks_testimonials_star_rating\` (\`author_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_testimonials_subtle_grid_testimonials\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`quote\` text NOT NULL,
  	\`author_image_id\` integer,
  	\`author_name\` text NOT NULL,
  	\`author_handle\` text NOT NULL,
  	FOREIGN KEY (\`author_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_testimonials_subtle_grid\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_subtle_grid_testimonials_order_idx\` ON \`pages_blocks_testimonials_subtle_grid_testimonials\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_subtle_grid_testimonials_parent_id_idx\` ON \`pages_blocks_testimonials_subtle_grid_testimonials\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_subtle_grid_testimonials_autho_idx\` ON \`pages_blocks_testimonials_subtle_grid_testimonials\` (\`author_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_testimonials_subtle_grid\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`eyebrow\` text DEFAULT 'Testimonials',
  	\`heading\` text DEFAULT 'We have worked with thousands of amazing people',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_subtle_grid_order_idx\` ON \`pages_blocks_testimonials_subtle_grid\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_subtle_grid_parent_id_idx\` ON \`pages_blocks_testimonials_subtle_grid\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonials_subtle_grid_path_idx\` ON \`pages_blocks_testimonials_subtle_grid\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`slug\` text NOT NULL,
  	\`published\` integer DEFAULT true,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_slug_idx\` ON \`pages\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`pages_updated_at_idx\` ON \`pages\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`pages_created_at_idx\` ON \`pages\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_kv\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`key\` text NOT NULL,
  	\`data\` text NOT NULL
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`payload_kv_key_idx\` ON \`payload_kv\` (\`key\`);`)
  await db.run(sql`CREATE TABLE \`payload_locked_documents\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`global_slug\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_global_slug_idx\` ON \`payload_locked_documents\` (\`global_slug\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_updated_at_idx\` ON \`payload_locked_documents\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_created_at_idx\` ON \`payload_locked_documents\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_locked_documents_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	\`media_id\` integer,
  	\`pages_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_locked_documents\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`media_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`pages_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_order_idx\` ON \`payload_locked_documents_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_parent_idx\` ON \`payload_locked_documents_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_path_idx\` ON \`payload_locked_documents_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_users_id_idx\` ON \`payload_locked_documents_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_media_id_idx\` ON \`payload_locked_documents_rels\` (\`media_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_pages_id_idx\` ON \`payload_locked_documents_rels\` (\`pages_id\`);`)
  await db.run(sql`CREATE TABLE \`payload_preferences\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`key\` text,
  	\`value\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_preferences_key_idx\` ON \`payload_preferences\` (\`key\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_updated_at_idx\` ON \`payload_preferences\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_created_at_idx\` ON \`payload_preferences\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_preferences_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_preferences\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_order_idx\` ON \`payload_preferences_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_parent_idx\` ON \`payload_preferences_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_path_idx\` ON \`payload_preferences_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_users_id_idx\` ON \`payload_preferences_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`payload_migrations\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`batch\` numeric,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_migrations_updated_at_idx\` ON \`payload_migrations\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_migrations_created_at_idx\` ON \`payload_migrations\` (\`created_at\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`users_sessions\`;`)
  await db.run(sql`DROP TABLE \`users\`;`)
  await db.run(sql`DROP TABLE \`media\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_bento_three_col_grid\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_bento_two_row_grid_cards\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_bento_two_row_grid\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_bento_two_row_three_col_grid_top_cards\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_bento_two_row_three_col_grid_bottom_cards\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_bento_two_row_three_col_grid\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_blog_featured_post_posts\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_blog_featured_post\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_blog_photo_list_openings\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_blog_photo_list\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_blog_single_col_posts\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_blog_single_col\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_blog_single_col_imgs_posts\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_blog_single_col_imgs\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_blog_three_col_posts\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_blog_three_col\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_blog_three_col_bg_imgs_posts\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_blog_three_col_bg_imgs\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_blog_three_col_imgs_posts\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_blog_three_col_imgs\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_contact_centered\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_contact_side_by_side_grid_contact_cards\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_contact_side_by_side_grid_location_cards\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_contact_side_by_side_grid\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_contact_sm_centered_items\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_contact_sm_centered\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_contact_sm_four_col_offices\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_contact_sm_four_col\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_contact_split_img\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_contact_split_pattern\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_contact_with_testimonial\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_content_centered_checklist_items\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_content_centered\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_content_img_titles_stats\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_content_img_titles\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_content_split_img_feature_items\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_content_split_img\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_content_sticky_screenshot_feature_items\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_content_sticky_screenshot\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_content_testimonial_feature_items\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_content_testimonial\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_content_testimonial_stats_stats\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_content_testimonial_stats\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_content_two_col_screenshot\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_cta_centered_on_dark_panel\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_cta_dark_panel_with_app_screenshot\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_cta_simple_centered\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_cta_simple_centered_on_brand\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_cta_simple_centered_with_gradient\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_cta_simple_justified\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_cta_simple_justified_on_subtle_brand\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_cta_simple_stacked\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_cta_split_with_image\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_cta_two_columns_with_photo_benefits\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_cta_two_columns_with_photo\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_cta_with_image_tiles\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_faq_centered_accordion_faqs\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_faq_centered_accordion\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_faq_offset_with_supporting_text_faqs\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_faq_offset_with_supporting_text\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_faq_side_by_side_faqs\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_faq_side_by_side\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_faq_three_columns_faqs\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_faq_three_columns\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_faq_three_col_ctr_intro_faqs\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_faq_three_col_ctr_intro\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_faq_two_columns_faqs\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_faq_two_columns\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_faq_two_col_ctr_intro_faqs\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_faq_two_col_ctr_intro\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feat_simple_features\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feat_simple\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feat_simple3x2_grid_features\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feat_simple3x2_grid\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feat_centered2x2_grid_features\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feat_centered2x2_grid\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feat_offset2x2_grid_features\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feat_offset2x2_grid\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feat_offset_with_feature_list_features\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feat_offset_with_feature_list\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feat_simple_three_col_sm_icons_features\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feat_simple_three_col_sm_icons\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feat_simple_three_col_lg_icons_features\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feat_simple_three_col_lg_icons\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feat_contained_in_panel_features\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feat_contained_in_panel\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feat_with_code_example_panel_features\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feat_with_code_example_panel\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feat_with_product_screenshot_features\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feat_with_product_screenshot\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feat_with_product_screenshot_on_left_features\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feat_with_product_screenshot_on_left\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feat_with_product_screenshot_panel_features\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feat_with_product_screenshot_panel\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feat_with_large_screenshot_features\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feat_with_large_screenshot\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feat_with_large_bordered_screenshot\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feat_with_testimonial\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_hero_angled_img_right_nav_links\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_hero_angled_img_right\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_hero_app_screenshot_nav_links\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_hero_app_screenshot\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_hero_bordered_app_shot_nav_links\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_hero_bordered_app_shot\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_hero_img_tiles_nav_links\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_hero_img_tiles_tile_images\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_hero_img_tiles\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_hero_offset_img_nav_links\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_hero_offset_img\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_hero_phone_mockup_nav_links\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_hero_phone_mockup\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_hero_simple_centered_nav_links\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_hero_simple_centered\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_hero_sm_ctr_bg_img_nav_links\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_hero_sm_ctr_bg_img\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_hero_split_bordered_shot\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_hero_split_code_example\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_hero_split_img\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_hero_split_screenshot\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_footer4_col_cta_columns_links\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_footer4_col_cta_columns\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_footer4_col_cta_social_links\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_footer4_col_cta\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_footer4_col_mission_social_links\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_footer4_col_mission_columns_links\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_footer4_col_mission_columns\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_footer4_col_mission\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_footer4_col_newsletter_columns_links\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_footer4_col_newsletter_columns\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_footer4_col_newsletter_social_links\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_footer4_col_newsletter\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_footer4_col_newsletter_below_columns_links\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_footer4_col_newsletter_below_columns\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_footer4_col_newsletter_below_social_links\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_footer4_col_newsletter_below\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_footer4_col_simple_columns_links\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_footer4_col_simple_columns\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_footer4_col_simple\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_footer_sm_centered_nav_links\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_footer_sm_centered_social_links\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_footer_sm_centered\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_footer_sm_social_social_links\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_footer_sm_social\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_header_centered\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_header_ctr_bg_img\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_header_ctr_eyebrow\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_header_simple\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_header_sm_bg_img\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_header_sm_eyebrow\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_header_with_cards_cards\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_header_with_cards\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_header_with_stats_links\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_header_with_stats_stats\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_header_with_stats\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_logocloud_grid_logos\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_logocloud_grid\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_logocloud_simple_logos\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_logocloud_simple\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_logocloud_sm_cta_logos\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_logocloud_sm_cta\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_logocloud_sm_heading_logos\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_logocloud_sm_heading\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_logocloud_sm_left_aligned_logos\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_logocloud_sm_left_aligned\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_logocloud_split_logos_right_logos\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_logocloud_split_logos_right\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_newsletter_centered_card\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_newsletter_sbs_details_details\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_newsletter_sbs_details\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_newsletter_sbs_on_card\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_newsletter_sm_sbs\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_newsletter_sm_sbs_on_brand\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_newsletter_sm_stacked\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_stats_simple_stats\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_stats_simple\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_stats_simple_grid_stats\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_stats_simple_grid\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_stats_split_with_image_stats\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_stats_split_with_image\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_stats_stepped_stats\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_stats_stepped\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_stats_timeline_items\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_stats_timeline\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_stats_with_bg_image_stats\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_stats_with_bg_image\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_stats_with_desc_stats\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_stats_with_desc\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_stats_with_two_col_desc_stats\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_stats_with_two_col_desc\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_team_full_width_vert_imgs_members_social_links\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_team_full_width_vert_imgs_members\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_team_full_width_vert_imgs\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_team_grid_large_round_members_social_links\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_team_grid_large_round_members\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_team_grid_large_round\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_team_grid_round_imgs_members\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_team_grid_round_imgs\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_team_img_short_para_members_social_links\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_team_img_short_para_members\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_team_img_short_para\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_team_large_grid_cards_members_social_links\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_team_large_grid_cards_members\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_team_large_grid_cards\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_team_large_imgs_members_social_links\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_team_large_imgs_members\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_team_large_imgs\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_team_medium_imgs_members\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_team_medium_imgs\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_team_small_imgs_members\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_team_small_imgs\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_team_vert_imgs_members_social_links\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_team_vert_imgs_members\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_team_vert_imgs\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_testimonials_bg_image\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_testimonials_grid_testimonials\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_testimonials_grid\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_testimonials_large_avatar\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_testimonials_overlap_img\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_testimonials_side_by_side_testimonials\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_testimonials_side_by_side\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_testimonials_simple_centered\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_testimonials_star_rating\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_testimonials_subtle_grid_testimonials\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_testimonials_subtle_grid\`;`)
  await db.run(sql`DROP TABLE \`pages\`;`)
  await db.run(sql`DROP TABLE \`payload_kv\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_preferences\`;`)
  await db.run(sql`DROP TABLE \`payload_preferences_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_migrations\`;`)
}
