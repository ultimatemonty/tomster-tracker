/*jshint node:true*/
module.exports = {
  description: 'Generates a route with a top-level component ala routable-components',

  // things to generate
  // * component: `${options.entity.name}-route`;
  // * route: options.entity.name
  // * template: component as only content
  fileMapTokens: function(options) {
    return {
      __componentname__: function(options) {
        return options.dasherizedModuleName + '-route';
      }
    };
  }

  // afterInstall: function(options) {
  //   // Perform extra work here.
  // }
};
