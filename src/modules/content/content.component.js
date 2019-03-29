import {template} from './content.template';
import {formTemplate} from './form-template/form-template.component';

console.log('content.component.js loaded')

function appMainComponent() {
    var app = angular.module('myApp');

    formTemplate()
    app.component('appMainComponent', {
        template: template
    })
}

export {appMainComponent};
// export const theComponent = {
//   controller: ComponentController,
//   template,
//   bindings
// }