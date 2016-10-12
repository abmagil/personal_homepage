Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.escapeExpression;

  return "<!DOCTYPE html>\n<html>\n<head>\n  <title>"
    + alias1(this.lambda(((stack1 = (depth0 != null ? depth0.personal : depth0)) != null ? stack1.name : stack1), depth0))
    + "</title>\n</head>\n<body>\n"
    + alias1((helpers.header || (depth0 && depth0.header) || helpers.helperMissing).call(depth0,{"name":"header","hash":{"data":(depth0 != null ? depth0.personal : depth0)},"data":data}))
    + "\n</body>\n</html>\n";
},"useData":true})
Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<header>\n<h1>"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.personal : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h1>\n</header>\n";
},"useData":true})