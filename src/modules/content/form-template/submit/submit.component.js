import {template} from './submit.template';

class Ctrl {
    x(){}
}

function submit() {
    var app = angular.module('myApp');
    
    app.component('myCustomInputSubmit', {
        template: template,
        controller: Ctrl,
        controllerAs: '$ctrl',
        require: {
          dependencyCtrl: '^myCustomForm'
        }
    })
}

export {submit};



                          //'parentComponentName'