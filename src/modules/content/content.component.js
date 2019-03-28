import {formTemplate} from './form-template/form-template.component';

function contentWrapper() {
    var app = angular.module('myApp');

    formTemplate()
    let appContentTemplate = `    
        <div class="content">
        <h1 class="page-title">Forms Playground V2</h1>
            <my-custom-form class="form-container"></my-custom-form>
        </div>
        </div>
        `
    app.component('appContent', {
    template: appContentTemplate
    })
}

export {contentWrapper};