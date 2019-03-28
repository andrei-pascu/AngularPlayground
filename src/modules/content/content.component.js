import {formTemplate} from './form-template/form-template.component';

function contentWrapper() {
    var app = angular.module('myApp');






    formTemplate()
    //COMPONENT LVL_0
    let appContentTemplate = `    
    <div class="content">
    <h1 class="page-title">Forms Playground V2</h1>
        <my-custom-form class="form-container"></my-custom-form>
    </div>
    </div>
    `
    app.component('appContent', {
    template: appContentTemplate
    // templateURL: 'component-my-form.html'
    })
}


export {contentWrapper};