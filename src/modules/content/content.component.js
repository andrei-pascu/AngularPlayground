import {template} from './content.template';
import {formTemplate} from './form-template/form-template.component';


function appMainComponent() {
    var app = angular.module('myApp');

    formTemplate()
    app.component('appMainComponent', {
        template: template
    });
}

export {appMainComponent};









// console.log('content.component.js loaded')
// export const theComponent = {
//   controller: ComponentController,
//   template,
//   bindings
// }