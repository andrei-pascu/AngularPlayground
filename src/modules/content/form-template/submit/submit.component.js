function submit() {
    var app = angular.module('myApp');
//COMPONENT LVL_2
let myCustomInputSubmitTemplate = `
<div class="form-submit-wrapper">
    <input ng-disabled="aForm.$invalid" type="submit" id="submit" value="Submit" />
</div>
`
app.component('myCustomInputSubmit', {
template: myCustomInputSubmitTemplate
})

}


export {submit};