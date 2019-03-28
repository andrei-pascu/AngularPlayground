function formCompletion() {
    var app = angular.module('myApp');
    
    let formCompletionTemplate = `
    <div class="progress" ng-style="formCompletion"></div>
    `
    app.component('formCompletion', {
        template: formCompletionTemplate
    })
}

export {formCompletion};