function submit() {
    var app = angular.module('myApp');
    
    let myCustomInputSubmitTemplate = `
        <div class="form-submit-wrapper">
            <input ng-disabled="aForm.$invalid" type="submit" id="submit" value="Submit" />
        </div>
        `
    app.component('myCustomInputSubmit', {
        template: myCustomInputSubmitTemplate
    })

    // app.component('myCustomInputSubmit', {
    //     templateUrl: 'submit/submit.component.html'
    // })
}

export {submit};