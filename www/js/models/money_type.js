(function(window, app) {

  var _ = window._;
  app.service('Currency', function() {

    var Currency = Class.create({

      name: '',
      sign: '',

      initialize: function($super) {
      },

      getName: function() {
        return this.name;
      },

      getSign: function() {
        return this.sign;
      },

    });

    Currency.parseCurrency = function(jsonMoney) {
      return _.extendOwn(new Currency(), jsonMoney);
    };


    return Currency;
  });
})(window, app);