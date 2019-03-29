import {template} from './content.template';
import {formTemplate} from './form-template/form-template.component';

function appMainComponent() {
    var app = angular.module('myApp');

    formTemplate()
    app.component('appMainComponent', {
    template: template
    })
}

export {appMainComponent};