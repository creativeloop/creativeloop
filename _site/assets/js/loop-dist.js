jQuery(window).on("load",function(){$("body").fadeIn(600,function(){$(".logo-text").addClass("active")})}),jQuery(document).ready(function(t){animateLine=function(a,e,n){var o=a.path(n).attr({stroke:e}),r=o.getTotalLength();t('path[fill*="none"]').animate({to:1},{duration:3e3,step:function(t,n){var i=r*n.pos,d=o.getSubpath(0,i);a.clear(),a.path(d).attr({stroke:e,"stroke-dasharray":"","stroke-width":"10"})}})};var a=Raphael("draw",1120,420);a.setViewBox(-15,-15,1120,420,!0),a.setSize("100%","100%");var e="M1096,199 C1096,308.89775 1006.77564,398 896.727273,398 C772.181818,398 647.636364,298.5 548,199 C448.363636,99.5 323.818182,0 199.272727,0 C89.2243636,0 0,89.10225 0,199 C0,308.89775 89.2243636,398 199.272727,398 C323.818182,398 448.363636,298.5 548,199 C647.636364,99.5 772.181818,0 896.727273,0 C1006.77564,0 1096,89.10225 1096,199 L1096,199 L1096,199 Z";animateLine(a,"#FFF",e)});
