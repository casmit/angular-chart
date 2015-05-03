(function () {

  'use strict';

  /* istanbul ignore next */
  var angular = window.angular ? window.angular : 'undefined' !== typeof require ? require('angular') : undefined;
  var c3 = window.c3 ? window.c3 : 'undefined' !== typeof require ? require('c3') : undefined;

  function angularChartController($scope, $element, $timeout, angularChartWatcher, angularChartConverter) {
    console.log('init');
    var baseConfiguration = {
      data: {
        keys: {
          value: []
        },
        names: {},
        types: {},
        colors: {},
        axes: {}
      },
      axis: {
        y: {},
        y2: {}
      }

    };
    var configuration;
    var chart;

    addIdentifier();
    angularChartWatcher.init($scope);
    updateCallback();
    registerDestroyListener();

    // register callbacks after first digest cycle
    $timeout(function() {
      angularChartWatcher.registerChartCallback(updateCallback);
      angularChartWatcher.registerDataCallback(updateCallback);
    });



    function updateCallback() {
      configuration = baseConfiguration;
      angularChartConverter.convertData($scope.options, configuration);
      angularChartConverter.convertDimensions($scope.options, configuration);
      angularChartConverter.convertSchema($scope.options, configuration);
      applyChartOptions();
      generateChart();
    }

    // add unique identifier for each chart
    //
    function addIdentifier() {
      $scope.dataAttributeChartID = 'chartid' + Math.floor(Math.random() * 1000000001);
      angular.element($element).attr('id', $scope.dataAttributeChartID);
      baseConfiguration.bindto = '#' + $scope.dataAttributeChartID;
    }

    function applyChartOptions() {
      // TODO replace with angular 1.4.0 angular.merge for deep copy
      angular.extend(
        configuration,
        $scope.options.chart
      );
    }

    function generateChart() {
      console.log('draw', configuration);
      window.onresize = null;
      chart = c3.generate(configuration);
    }

    function registerDestroyListener() {
      $scope.$on('$destroy', function () {
        chart.destroy();
        $element.remove();
      });
    }

  }

  angular
    .module('angularChart')
    .controller('angularChartController', angularChartController);

})();
