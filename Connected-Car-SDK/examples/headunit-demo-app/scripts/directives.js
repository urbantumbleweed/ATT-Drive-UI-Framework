app.directive("animateToggle", function() {
    return function(scope, elem, attr) {
        scope.$watch(attr.animateOnChange, function(nv,ov) {
            if (nv!=ov) {
                var c = nv > ov?'change-up':'change';
                $animate.addClass(elem,c, function() {
                    setTimeout(function(){
                        $animate.removeClass(elem,c);
                    }, 2000);
                });
            }
        })
    }
})
app.directive('animateOnChange', function($animate) {
    return function(scope, elem, attr) {
        scope.$watch(attr.animateOnChange, function(nv,ov) {
            if (nv != ov) {
                var c = 'change';
                $animate.addClass(elem,c, function() {
                    setTimeout(function(){
                        $animate.removeClass(elem,c);
                    }, 1000);
                });
            }
        })
    }
});