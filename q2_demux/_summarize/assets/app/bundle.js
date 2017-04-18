var app=webpackJsonpapp([0],[function(t,e,r){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.init=void 0;var n=r(1),i=a(n);e.init=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,r={forward:Object.keys(t).map(function(e){return[+e+1,t[e]]})};e&&(r.reverse=Object.keys(e).map(function(t){return[+t+1,e[t]]})),(0,i.default)(r)}},function(t,e,r){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}Object.defineProperty(e,"__esModule",{value:!0});var i=r(2),o=n(i),l=r(3),s=a(l),u=r(4),c=function(t,e,r){var a=o.select(r),n=a.append("svg").attr("class","col-xs-12").style("display","block").style("margin","0 auto").attr("width",e.width+e.margin.left+e.margin.right).attr("height",e.height+e.margin.top+e.margin.bottom),i=a.append("div").attr("class","col-xs-12").append("div").attr("class","panel panel-default");i.append("div").attr("class","panel-heading").html("Statistical Summary");var l=i.append("div").attr("class","stats").append("table").attr("class","table").style("margin-bottom","0");l.append("thead").append("tr").selectAll("th").data([["Hover over a boxplot to learn more...",9],["",3]]).enter().append("th").text(function(t){return t[0]}).attr("class",function(t){return"col-xs-"+t[1]}).style("font-size","10px");var c=[["Position Number","..."],["Minimum","..."],["1st Quartile","..."],["Median","..."],["3rd Quartile","..."],["Maximum","..."]],d=l.append("tbody").selectAll("tr").data(c).enter().append("tr");d.selectAll("td").data(function(t){return t}).enter().append("td").text(function(t){return t});var f=o.max(t,function(t){return t[0]}),m=[0,f],p=[0,45],h=o.scaleLinear().domain(m).range([e.margin.left,e.width]),v=o.scaleLinear().domain(p).range([e.height-e.margin.bottom,e.margin.top]),g=[12,9],x=o.axisBottom(h).ticks(g[0],o.format("d")),y=o.axisLeft(v).ticks(g[1],o.format("d"));n.attr("height",e.height+e.margin.bottom+e.margin.top),n.attr("width",h.range()[0]+h.range()[1]),(0,u.addBrush)(n,t,h,v,m,p,x,y,g),(0,s.default)(n,t,h,v),n.append("rect").attr("width",e.width+e.margin.left+e.margin.right).attr("height",4*e.margin.bottom).attr("y",e.height-e.margin.bottom).attr("fill","white"),n.append("rect").attr("width",4*e.margin.left).attr("x",3*-e.margin.left).attr("height",e.height+200).attr("fill","white"),n.append("rect").attr("width",e.margin.right+1e3).attr("height",e.height+200).attr("x",e.width).attr("fill","white"),n.append("g").attr("class","axis axis--x").attr("transform","translate(0, "+(e.height-e.margin.bottom)+")").call(x),n.append("g").attr("class","axis axis--y").attr("transform","translate("+e.margin.left+",0)").call(y),n.append("text").attr("transform","rotate(-90)").attr("x",0-e.height/2).attr("dy","0em").attr("font-size","10px").style("text-anchor","middle").text("Quality Score"),n.append("text").attr("x",e.width/2).attr("y",e.height).attr("dy","1em").attr("font-size","10px").style("text-anchor","middle").text("Sequence Base")},d=function(t){var e={top:10,right:30,bottom:30,left:30},r=o.select("#forwardContainer").node().offsetWidth,a={margin:e,width:r-e.left-e.right,height:9*r/16-e.top-e.bottom};Object.keys(t).forEach(function(e){c(t[e],a,"#"+e+"Container")})};e.default=d},,function(t,e,r){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function n(t,e,r,a){var n=(r.range()[1]-r.range()[0])/(r.domain()[1]-r.domain()[0])/2,i=n/2,l=t.transition().duration(750),s=t.selectAll(".container").data(e).attr("font","10px sans-serif");s.exit().remove();var u=s.enter().append("g").attr("class","container"),c=s.merge(u).transition(l).attr("transform",function(t){return"translate("+r(t[0])+", 0)"}).selection().on("mouseover",function(){var t=o.select(this).data(),e=t[0][1],r=[e["25%"],e["50%"],e["75%"]],a=[e.min,e.max],n=o.select(this.parentNode).node(),i=o.select(n.parentNode);i.select(".stats").select("tbody").selectAll("tr").data([["Position Number",t[0][0]],["Minimum",a[0]],["1st Quartile",r[0]],["Median",r[1]],["3rd Quartile",r[2]],["Maximum",a[1]]]).selectAll("td").data(function(t){return t}).text(function(t){return t})}),d=c.selectAll("line.center").data(function(t){return[t]});d.exit().remove();var f=d.enter().append("line");d.merge(f).transition(l).attr("class","center").attr("x1",0).attr("y1",function(t){return a(t[1].min)}).attr("x2",0).attr("y2",function(t){return a(t[1].max)}).attr("stroke-dasharray","2,2").attr("stroke-width",1).attr("stroke","black");var m=c.selectAll("rect.box").data(function(t){return[t]});m.exit().remove();var p=m.enter().append("rect");m.merge(p).transition(l).attr("class","box").attr("x",-i).attr("y",function(t){return a(t[1]["75%"])}).attr("width",n).attr("height",function(t){return a(t[1]["25%"])-a(t[1]["75%"])}).attr("fill","steelblue").attr("stroke-width",1).attr("stroke","black").selection().on("mouseover",function(){o.select(this).attr("fill","skyblue")}).on("mouseout",function(){o.select(this).attr("fill","steelblue")});var h=c.selectAll("line.median").data(function(t){return[t]});h.exit().remove();var v=h.enter().append("line");h.merge(v).transition(l).attr("class","median").attr("x1",-i).attr("y1",function(t){return a(t[1]["50%"])}).attr("x2",i).attr("y2",function(t){return a(t[1]["50%"])}).attr("stroke-width",1).attr("stroke","black");var g=c.selectAll("line.lower-whisker").data(function(t){return[t]});g.exit().remove();var x=g.enter().append("line");g.merge(x).transition(l).attr("class","lower-whisker").attr("x1",-i).attr("y1",function(t){return a(t[1].min)}).attr("x2",i).attr("y2",function(t){return a(t[1].min)}).attr("stroke-width",1).attr("stroke","black");var y=c.selectAll("line.upper-whisker").data(function(t){return[t]});y.exit().remove();var b=y.enter().append("line");y.merge(b).transition(l).attr("class","upper-whisker").attr("x1",-i).attr("y1",function(t){return a(t[1].max)}).attr("x2",i).attr("y2",function(t){return a(t[1].max)}).attr("stroke-width",1).attr("stroke","black")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;var i=r(2),o=a(i)},function(t,e,r){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t,e,r,a,n,i,l,u,d){var f=s.brush(),m=void 0,p=350,h=(t.selectAll(".axis--x .tick"),function(){m=null}),v=function(){var n=t.transition().duration(750),i=o(d,2),f=i[0],m=i[1],p=Math.floor(r.domain()[0]),h=Math.ceil(r.domain().slice(-1)[0]),v=s.range(p,h,1);v.length<=f?l.tickValues(v).tickFormat(s.format("d")):l.tickValues(null).ticks(f,s.format("d"));var g=Math.floor(a.domain()[0]),x=Math.ceil(a.domain().slice(-1)[0]),y=s.range(g,x,1);y.length<=m?u.tickValues(y).tickFormat(s.format("d")):u.tickValues(null).ticks(m,s.format("d")),t.select(".axis--x").transition(n).call(l),t.select(".axis--y").transition(n).call(u),(0,c.default)(t,e,r,a)},g=function(){var e=s.event.selection;if(e)r.domain([e[0][0],e[1][0]].map(r.invert,r)),a.domain([e[1][1],e[0][1]].map(a.invert,a)),t.select(".brush").call(f.move,null);else{if(!m)return m=setTimeout(h,p);r.domain(n),a.domain(i)}return v()};f.on("end",g),t.append("g").attr("class","brush").call(f)}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){var r=[],a=!0,n=!1,i=void 0;try{for(var o,l=t[Symbol.iterator]();!(a=(o=l.next()).done)&&(r.push(o.value),!e||r.length!==e);a=!0);}catch(t){n=!0,i=t}finally{try{!a&&l.return&&l.return()}finally{if(n)throw i}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e.addBrush=i;var l=r(2),s=n(l),u=r(3),c=a(u)}]);