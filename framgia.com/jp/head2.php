<meta charset="UTF-8" />
<meta name="description" content="<?php echo $description ?>" />
<meta name="keywords" content="<?php echo join(",", $keywords) ?>" />
<link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' type='text/css'/>
<link media="screen" type="text/css" href="/stylesheets/style.css" rel="stylesheet"/>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.js" type="text/javascript"></script>
<script src="/javascripts/globalmenu.js" type="text/javascript"></script>
<?php if(strlen($full_title) < 1) { ?>
<title>オフショア開発 | フランジア<?php echo $title ? " | " . $title : "" ?></title>
<?php } else { ?>
<title><?php echo $full_title ?></title>
<?php } ?>

<meta property="og:title" content="<?php echo $title ?>">
<meta property="og:type" content="article">
<meta property="og:url" content="<?php echo "http://" . $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"]; ?>">
<meta property="og:image" content="<?php echo $og_image ? $og_image : "http://framgia.com/images/logo_f.png" ?>">
<meta property="og:description" content="<?php echo $description ?>">
<meta property="og:site_name" content="フランジア">