export const template = `   
    <div class="data-wrapper">
        <table ng-show="$ctrl.submitted" class="submitted-data-table">
                <tr ng-repeat="(key,val) in $ctrl.submitted">
                    <td>{{key}}:</td>
                    <td>{{val}}</td>
                </tr>
        </table>
    </div>
    
    <div class="async-wrapper">
        <p>Don't mind me,</p>
        <p>I'm some async data from</p>
        <span>jsonplaceholder.com: </span><span id='async'></span>
    </div>
    `