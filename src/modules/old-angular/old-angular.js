function oldAngular() {
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
    





}
export {oldAngular};