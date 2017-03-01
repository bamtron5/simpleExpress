namespace app.controllers {
  export class Home {
    public name = 'Hello from angular';
    public rabbits;
    constructor (
      private $http: ng.IHttpService
    ) {
      this.getRabbits();
    }

    public getRabbits() {
      this.$http.get('/api/rabbit')
        .then((result) => {
          this.rabbits = result.data;
        }).catch((e) => {
          console.log(e);
        });
    }
  }

  Home.$inject = ['$http'];
  angular.module('app.home', [])
    .controller('Home', Home);
}
