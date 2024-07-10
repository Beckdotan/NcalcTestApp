// appService.js
angular.module('ECOOS')
  .service('AdditionService', AdditionService);

function AdditionService($http) {
  this.testNCalc = testNCalc;

  function testNCalc(exp) {
    return $http.get("api/nCalc/NcalcTest", {
      params: {
        exp: exp
        } 
    });
  }
}
