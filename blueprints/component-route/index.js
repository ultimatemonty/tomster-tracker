/*jshint node:true*/
module.exports = {
  description: 'Generates a route with a top-level component ala routable-components',

  anonymousOptions: [
    'name',
    'include:values'
  ],

  fileMapTokens: function(options) {
    console.log('dasherizedPackageName', options.dasherizedPackageName);
    console.log('classifiedPackageName', options.classifiedPackageName);
    console.log('dasherizedModuleName', options.dasherizedModuleName);
    console.log('classifiedModuleName', options.classifiedModuleName);
    console.log('camelizedModuleName', options.camelizedModuleName);
    return {
      __componentname__: function(options) {
        return options.dasherizedModuleName + '-route';
      }
    };
  },

  locals: function(options) {
    var entityOptions = options.entity.options;
    var includes = [];
    for (var name in entityOptions) {
      includes[name] = entityOptions[name].split(',');
    }
    var componentImport = 'Component';
    includes[componentImport] = null;

    var emberKeys = Object.keys(includes).sort();
    var destructures = [];
    destructures.push('const { ' + emberKeys.join(', ') + ' } = Ember;');

    emberKeys.forEach(function(key) {
      if (includes[key]) {
        destructures.push('const { ' + includes[key].join(', ') + ' } = ' + key + ';');
      }
    });

    return {
      destructures: destructures.join('\n')
    };
  }
};
