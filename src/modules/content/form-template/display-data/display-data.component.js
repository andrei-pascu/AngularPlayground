import {template} from './display-data.template';

class Ctrl {
    handleData() {
    }
}

function displayData() {
    var app = angular.module('myApp');
    app.component('displayDataComponent', {
        template: template,
        bindings: {
            submitted: '='
        },
        controller: Ctrl,
        controllerAs: '$ctrl',
        require: {
          dependencyCtrl: '^myCustomForm'
        }
    })
}

export {displayData};