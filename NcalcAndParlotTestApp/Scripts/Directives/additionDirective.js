// appDirective.js
angular.module('ECOOS')
  .directive('addition', additionDirective);

function additionDirective() {
  return {
    templateUrl: '/Views/addition.html',
    controller: AdditionController,
    controllerAs: 'vm',
    scope: {} // Create an isolated scope
  };
}

function AdditionController(AdditionService) {
  var vm = this;
  vm.inputExpression = "";
  vm.testNCalc = TestNCalc;

  function TestNCalc() {
    AdditionService.testNCalc(vm.inputExpression)
      .then(function (response) {
        vm.result = response.data;
      })
      .catch(function (error) {
        console.error('Error:', error);
      });
  }

  // Call the method to calculate addition initially (optional)
  // vm.calculateAddition();
}
