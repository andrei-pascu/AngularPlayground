import {nameInput} from './name-input/name-input.component';
import {emailInput} from './email-input/email-input.component';
import {myInput} from './my-input/my-input.component';
import {lengthInput} from './length-input/length-input.component';
import {submit} from './submit/submit.component';
import {formCompletion} from './form-completion/form-completion.component';
import   './email-input/test';

console.log('form-template.component.js loaded')

function formTemplate() {
    var app = angular.module('myApp');

    nameInput();
    emailInput();
    myInput();
    lengthInput();
    submit();
    formCompletion();
// angular.module('myApp').component('componentName', {
//     template: 'sapdkapdpa'
// })
    let myCustomFormTemplate = `
        <form  class="form-play" name="aForm" ng-submit="submitMockup()">
            <my-custom-input-1></my-custom-input-1>
            <my-custom-input-2></my-custom-input-2>
            <my-custom-input-3></my-custom-input-3>
            <my-custom-input-4></my-custom-input-4>
            <my-custom-input-submit></my-custom-input-submit>
            <component-name></component-name>
        </form>
        <form-completion class="progress-bar"></form-completion>
        `
    app.component('myCustomForm', {
        template: myCustomFormTemplate
    })
}

export {formTemplate};




//Made global var
//Imported -> it's accesible in f

//Duplicate appVar crash //[$injector:nomod] //[$injector:modulerr]

//Correct import, refferencing app module err

// console.log(defaultExport)
// console.log(x)