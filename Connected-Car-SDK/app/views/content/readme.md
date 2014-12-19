The att-content directive is intended to be used as you app s main container.
It provides an absolutely positioned content area, which includes the .att-grid class, and can take into account the area needed for the Header and the Footer.
 
Note: if you use the att-content directive as a wrapper around your ng-view, then you should use the element syntax for ng-view, instead of the attribute syntax (i.e.
 
```
<att-content>  
   <ng-view></ng-view>  
</att-content>  
```
