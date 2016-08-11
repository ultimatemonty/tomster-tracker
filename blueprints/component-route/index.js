var EOL = require('os').EOL;

/*jshint node:true*/
module.exports = {
  description: 'Generates a route with a top-level component ala routable-components',

  // format key:value
  // technically don't need this but it's nice for documentation's sake
  anonymousOptions: [
    'include:value'
  ],

  availableOptions: [
    {
      name: 'model-key',
      type: String,
      default: 'model',
      key: 'modelKey'
    }
  ],

  locals: function(options) {
    // reference to our options
    var entityOptions = options.entity.options;
    var taskOptions = options.taskOptions;
    var includes = [];

    // for demo purposes
    console.log('locals:', entityOptions);

    // Loop through each key in the entityOptions hash
    // and add a key/value pair to the includes array
    //
    // { computed: 'alias,notEmpty', inject: 'service' }
    //
    // yields
    //
    // includes['computed'] = ['alias','notEmpty']
    // includes['inject'] = ['service']
    var destructuredValues;
    for (var name in entityOptions) {
      destructuredValues = entityOptions[name] === '' ? null : entityOptions[name].split(',');
      includes[name] = destructuredValues;
    }

    // Add a default Component export to the array as another top-level thing
    // to destructure
    var componentImport = 'Component';
    includes[componentImport] = null;

    // sort the keys alphabetically because everyone loves order
    var emberKeys = Object.keys(includes).sort();
    var destructures = [];

    // push the top level destructures
    // if your includes options are computed:alias, inject:service, isEmpty
    // the result of this would be
    // `const { Component, computed, inject, isEmpty } = Ember;`
    destructures.push('const { ' + emberKeys.join(', ') + ' } = Ember;');

    // loop through each of the keys, building the destructure for that key
    // in the above example this would result in
    // `const { alias } = computed`;
    // `const { service } = inject`;
    var values;
    emberKeys.forEach(function(key) {
      values = includes[key];
      if (values) {
        destructures.push('const { ' + values.join(', ') + ' } = ' + key + ';');
      }
    });

    // locals returns an object with the variable name and value as a key/value pair
    // here we're just return the array as a string joined by the operating systems
    // default EOL character
    return {
      destructures: destructures.join(EOL),
      modelKey: taskOptions.modelKey || 'model'
    };
  },

  /* jshint unused:false */
  fileMapTokens: function(options) {
    // for demo purposes
    console.log('fileMapTokens:', options);
    return {
      __componentname__: function(options) {
        return options.dasherizedModuleName + '-route';
      }
    };
  }
};
