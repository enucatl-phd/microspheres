(function(){var t=function(t,s){function a(){this.constructor=t}for(var r in s)e.call(s,r)&&(t[r]=s[r]);return a.prototype=s.prototype,t.prototype=new a,t.__super__=s.prototype,t},e={}.hasOwnProperty;d3.chart.Axes=function(e){function s(){null==this.accessors&&(this.accessors={}),this.accessors.x_axis=d3.svg.axis(),this.accessors.y_axis=d3.svg.axis(),this.accessors.x_title="x",this.accessors.y_title="y",s.__super__.constructor.apply(this,arguments)}return t(s,e),s.prototype._draw=function(t,e){var s,a,r,l,c,i,n,o,x,d;return l=this.x_scale(),x=this.y_scale(),s=this.x_axis(),i=this.y_axis(),c=this.x_title(),d=this.y_title(),s.scale(l).orient("bottom"),i.scale(x).orient("left"),n=d3.select(t).selectAll(".y.axis").data([e]),n.enter().append("g").classed("y axis",!0),n.call(i),a=d3.select(t).selectAll(".x.axis").data([e]),a.enter().append("g").classed("x axis",!0),a.attr("transform","translate(0, "+x.range()[0]+")").call(s),r=d3.select(t).select(".x.axis").selectAll("text.label").data([e]),r.enter().append("text").classed("label",!0),r.attr("x",l.range()[1]).attr("dy","2.49em").style("text-anchor","end").text(c),r.exit().remove(),o=d3.select(t).select(".y.axis").selectAll("text.label").data([e]),o.enter().append("text").classed("label",!0),o.attr("transform","rotate(-90)").style("text-anchor","end").attr("dy","1em").text(d),o.exit().remove(),a.exit().remove(),n.exit().remove()},s}(d3.chart.BaseChart)}).call(this);