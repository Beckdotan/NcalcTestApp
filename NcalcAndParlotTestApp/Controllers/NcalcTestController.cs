using NCalc;
using System.Web.Http;

namespace AngularJSWithNetStartApp.Controllers
{
  public class NCalcController : ApiController
  {

    [HttpGet]
    public int NcalcTest(string exp)
    {

      // if you want hard coded expression just add this line:
      // exp = "(1+2)*3
      var expression = new Expression(exp);
      return (int)expression.Evaluate();

    }



  }
}