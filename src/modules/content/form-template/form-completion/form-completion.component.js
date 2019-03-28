function formCompletion() {
    var app = angular.module('myApp');
    //COMPONENT LVL_2

    let formCompletionTemplate = `
    <div class="progress" ng-style="formCompletion"></div>
    `
    app.component('formCompletion', {
    template: formCompletionTemplate
    })

}


export {formCompletion};