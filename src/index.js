/*eslint-disable*/
import angular from 'angular';

import 'angular-ui-router';
import routesConfig from './routes';

import {main} from './app/main';
import {software} from './app/software';
import {music} from './app/music';
import {header} from './app/header';
import {title} from './app/title';
import {footer} from './app/footer';

import './index.scss';


angular
  .module('app', ['ui.router'])
  .config(routesConfig)
  .component('app', main)
  .component('software', software)
  .component('music', music)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer)
  .controller('MainController', ($scope, $state) => {
  })
  .controller('HeadController', ['$scope', '$state', ($scope, $aside, $state) => {
    $scope.goHome = () => {
      $state.go('app')
      //console.log($scope.hrefLogo);
    }
  }]);
