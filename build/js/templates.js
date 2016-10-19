Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "      <li>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<section class=\"job\">\n  <h3 class=\"job__title\">"
    + alias3(((helper = (helper = helpers.jobTitle || (depth0 != null ? depth0.jobTitle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"jobTitle","hash":{},"data":data}) : helper)))
    + "</h3>\n  <time datetime=\"2015-04\">"
    + alias3(((helper = (helper = helpers.startDate || (depth0 != null ? depth0.startDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"startDate","hash":{},"data":data}) : helper)))
    + "</time>-<time>"
    + alias3(((helper = (helper = helpers.endDate || (depth0 != null ? depth0.endDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"endDate","hash":{},"data":data}) : helper)))
    + "</time>\n  <p>\n    <span class=\"job__employer\">\n      <a target=\"_blank\" href="
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + ">\n        "
    + alias3(((helper = (helper = helpers.employerName || (depth0 != null ? depth0.employerName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"employerName","hash":{},"data":data}) : helper)))
    + "</a></span>, "
    + alias3(((helper = (helper = helpers.employerLocation || (depth0 != null ? depth0.employerLocation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"employerLocation","hash":{},"data":data}) : helper)))
    + "\n  <ul>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.responsibilities : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </ul>\n</section>\n";
},"useData":true})