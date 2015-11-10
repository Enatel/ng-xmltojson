(function () {
  "use strict";

  var module = angular.module('enatel.x2js', []);

  module.factory('ngx2js', [function () {

    var self = {};

    self.xml2json = function (xmlString, config) {
      // Check if X2JS is included in the project
      if (!window.X2JS) {
        throw new ReferenceError('X2JS is undefined, please include it in your project');
      }
      // Spawn a new Instance of X2JS, loading custom config if defined.
      if (typeof config === 'undefined') {
        // set as empty object if custom config is not defined
        config = {};
      }
      var x2js = new X2JS(config);
      var jsonObj = x2js.xml_str2json(xmlString);
      // Validate the result is a JSON object, if not, return false;
      if (!(jsonObj instanceof Object)) {
        return false;
      }
      // Return the Object if it is valid.
      return jsonObject;
    };

    self.json2xml = function (jsonObject, config) {
      if (!window.X2JS) {
        throw new ReferenceError('X2JS is undefined, please include it in your project');
      }
      // Spawn a new Instance of X2JS, loading custom config if defined.
      if (typeof config === 'undefined') {
        // set as empty object if custom config is not defined
        config = {};
      }
      var x2js = new X2JS(config);
      var xmlAsStr = x2js.json2xml_str(jsonObject);

      // Validate the result is a string, if not, return false;
      if (typeof xmlAsStr !== 'string') {
        return false;
      }

      return xmlAsStr;

    };

    return self;

  }]);

}());
