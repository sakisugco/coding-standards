<?php
  $url = 'http://'.$_SERVER['SERVER_NAME'].$_SERVER['PHP_SELF'];
?>
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
<div class="l-sns-foot">
<div class="l-sns-wrap">
<div class="fb-wrap">
<div class="fb-like" data-href="<?php echo $url; ?>" data-layout="button_count" data-action="like" data-show-faces="true" data-share="false"></div>
</div>
<div class="fb-share">
<div class="fb-share-button" data-href="<?php echo $url; ?>" data-type="button"></div>
</div>
<div class="twitter-share">
<a href="https://twitter.com/share" class="twitter-share-button">Tweet</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
</div>
<div class="hatena">
<a href="http://b.hatena.ne.jp/entry/<?php echo $url; ?>" class="hatena-bookmark-button" data-hatena-bookmark-title="<?php echo $page_title; ?>" data-hatena-bookmark-layout="simple-balloon" title="このエントリーをはてなブックマークに追加"><img src="http://b.st-hatena.com/images/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加" width="20" height="20" style="border: none;"></a><script type="text/javascript" src="http://b.st-hatena.com/js/bookmark_button.js" charset="utf-8" async="async"></script>
</div>
<div class="gplus-wrap">
<div class="g-plusone" data-size="medium"></div>
<script type="text/javascript">
window.___gcfg = {lang: 'ja'};

(function() {
var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
po.src = 'https://apis.google.com/js/platform.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();
</script>
</div>
</div>
</div>