<script type="text/javascript" src="http://coinurl.com/script/jquery-latest.min.js"></script>

<script type="text/javascript">
$(function() {
    var include = Array();
    //Leave empty to convert all links on the page or specify keywords
    //which URL must contain to be processed
    
    var exclude = Array();
    //Specify keywords which URL must not contain to be processed
    
    var id = "059afb5dcf85ec7352b3ece287a0a0d4";
    var redirect = "http://coinurl.com/redirect.php?id=" + id + "&url=";
    var links = $("a[href^='http']");
    
    for(var i = 0; i < links.length; i++) {
        var url = $(links[i]).attr("href");
        
        var deny = false;
        for(var j = 0; j < exclude.length; j++) {
            if(url.indexOf(exclude[j]) != -1) {
                deny = true;
                break;
            }
        }
        if(deny) {
            continue;
        }
        
        if(include.length > 0) {
            var allow = false;
            for(var j = 0; j < include.length; j++) {
                if(url.indexOf(include[j]) != -1) {
                    allow = true;
                    break;
                }
            }
            if(!allow) {
                continue;
            }
        }
        
        $(links[i]).attr("href",  redirect + encodeURIComponent(url));
    }
});
</script>
