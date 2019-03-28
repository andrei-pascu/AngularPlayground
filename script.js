// import './importTry.js';

var app = angular.module('myApp', []);

app.controller('myController', $scope => {
    $scope.checklength = null;
    // $scope.email = 'yyy@uu.ll';
        // $scope.formData = {
        //     "Name": 'sdad', 
        //     "Email": 'asaaa', 
        //     "At": 'asasdsdaa', 
        //     "LengthCheck": 'asasdadaaa'
           
        // };

    $scope.getFormState = () => {
            let validN = ($scope.aForm.name.$valid && $scope.aForm.name.$dirty) ? 1 : 0;
            let validE = $scope.aForm.email.$valid ? 1 : 0;
            let validM = $scope.aForm.myInput.$valid ? 1 : 0;
            let validP = $scope.aForm.checklength.$valid ? 1 : 0;
    
            console.log(`Form input states: ${validN} + ${validE} + ${validM} + ${validP}`)
            let formValidStates = -100 + (validN + validE + validM + validP) * 25;
            $scope.formCompletion = {
                "transform" : `translateY(${formValidStates}%)`
            }
    }

    $scope.catchLength = () => {
        console.log($scope.aForm.checklength.$modelValue)

        if ($scope.checklength == undefined) {
            $scope.checklengthDigitsLength = 0;
        } else if ($scope.checklength.length > 10 ) {
            $scope.aForm.checklength.$setValidity('x', false)
            $scope.checklengthDigitsLengthMax = "#881414";
        } else if ($scope.checklength.length == 10 ) {
            $scope.checklengthDigitsLengthMax = "#b58707";
            $scope.aForm.checklength.$setValidity('x', true)
        } else {
            $scope.aForm.checklength.$setValidity('x', false)
            $scope.checklengthDigitsLengthMax = "#3d4b8c";
            $scope.checklengthDigitsLength = ($scope.checklength.length) * 10;
        }
        $scope.checklengthLength = {
            "width" : $scope.checklengthDigitsLength + "%",
            "background-color" : $scope.checklengthDigitsLengthMax
        }
    }

    $scope.submitMockup = () => {
        $scope.formData = {
            "Name": $scope.aForm.name.$modelValue, 
            "Email": $scope.aForm.email.$modelValue, 
            "At": $scope.aForm.myInput.$modelValue, 
            "LengthCheck": $scope.aForm.checklength.$modelValue
        };
    }
    
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            $scope.AsyncData = json.title;
            document.getElementById('async').innerText = $scope.AsyncData.toUpperCase();
            console.log($scope.AsyncData)
        })
});


app.directive('myDirective', () => {
    return {
        require: 'ngModel',
        link: (scope, element, attr, mCtrl) => {
            function myValidation(value) {
                if (value == undefined) {
                    mCtrl.$setValidity('charA', false);
                } else if (value.indexOf("@") > -1) {
                    mCtrl.$setValidity('charA', true);
                } else {
                    mCtrl.$setValidity('charA', false);
                }
                return value;
            }
            mCtrl.$parsers.push(myValidation);
        }
    };
});




//COMPONENT LVL_2
let myCustomInputSubmitTemplate = `
    <div class="form-submit-wrapper">
        <input ng-disabled="aForm.$invalid" type="submit" id="submit" value="Submit" />
    </div>
`
app.component('myCustomInputSubmit', {
    template: myCustomInputSubmitTemplate
})

//COMPONENT LVL_2
let myCustomInput4Template = `             
    <div class="form-block form-play-checklength">
    <p class="explanation">Checks if input the input's length is 10: {{checklength.length}}</p>
    <div class="status-wrapper">
        <p ng-style="checklengthLength" class="checklength-length"></p>
    </div> 
    <input 
        ng-model="checklength" 
        required 
        type="text" 
        ng-change="catchLength($event); getFormState();" 
        name="checklength" 
    />
    </div>
`
app.component('myCustomInput4', {
    template: myCustomInput4Template,
    controller: ($scope) => {
    }
})

//COMPONENT LVL_2
let myCustomInput3Template = `                 
    <div class="form-block form-play-email">
    <p class="explanation">Check if string has "@"</p>
    <div class="status-wrapper">
        <p class="input-err custom-valid {{aForm.myInput.$valid ? 'invalid' : 'valid'}}"></p>
    </div> 
    <input
        ng-model="myInput"
        required 
        my-directive
        ng-change="getFormState();" 
        name="myInput"   
    />
    </div>
`
app.component('myCustomInput3', {
    template: myCustomInput3Template
})

//COMPONENT LVL_2
let myCustomInput2Template = `
    <div class="form-block form-play-email">
        <span class="explanation">Typical email validation: </span>  
        <span ng-show="aForm.email.$invalid && aForm.email.$dirty" class="input-err">Invalid Email</span> 
        <input 
            ng-model="email" 
            required 
            type="email" 
            ng-change="nameValidation(); getFormState();"  
            name="email"  
        />  
    </div>
`
app.component('myCustomInput2', {
    template: myCustomInput2Template
})

//COMPONENT LVL_2
let myCustomInput1Template = `
    <div class="form-block form-play-name">
    <span class="explanation">Checks if input contains only letters</span>  
    <div>
        <span ng-show="!aForm.name.$valid && aForm.name.$dirty" class="input-err">Must contain just letters</span>
        <span ng-hide="!aForm.name.$valid && aForm.name.$dirty" class="">Valid String: {{name | uppercase}}</span>
    </div>
    <input  
        ng-model="name" 
        required
        type="text"
        ng-pattern="/^[a-zA-Z]+$/"  
        ng-change="getFormState();"
        name="name" 
    />       
    </div>
`
app.component('myCustomInput1', {
    template: myCustomInput1Template

})


//COMPONENT LVL_2

let formCompletionTemplate = `
    <div class="progress" ng-style="formCompletion"></div>
`
app.component('formCompletion', {
    template: formCompletionTemplate
})

//COMPONENT LVL_1

let myCustomFormTemplate = `
    <form  class="form-play" name="aForm" ng-submit="submitMockup()">
        <my-custom-input-1></my-custom-input-1>
        <my-custom-input-2></my-custom-input-2>
        <my-custom-input-3></my-custom-input-3>
        <my-custom-input-4></my-custom-input-4>
        <my-custom-input-submit></my-custom-input-submit>
    </form>
    <form-completion class="progress-bar"></form-completion>
`
app.component('myCustomForm', {
    template: myCustomFormTemplate,
    controller: () => {
        this.ceva = 'x'
        console.log(aForm)
    }
})





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
