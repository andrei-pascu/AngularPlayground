import {template} from './form-completion.template';

class Ctrl {
    myTest() {
    }
}

function formCompletion() {
    var app = angular.module('myApp');
    app.component('formCompletion', {
        template: template,
        bindings: {
            passing: '='
        },
        controller: Ctrl,
        controllerAs: '$ctrl',
        require: {
          dependencyCtrl: '^myCustomForm'
        }
    })
}

export {formCompletion};






            // console.log(this)
                          //'parentComponentName'