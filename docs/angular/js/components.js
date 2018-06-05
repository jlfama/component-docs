(function() {
  angular.module('Picatic.Components').controller('Badge3DemoController', [
    function() {
      var self;
      self = this;
      self.fruitNames = ['Apple', 'Banana', 'Orange'];
      self.newVeg = function(chip) {
        return {
          name: chip
        };
      };
    }
  ]);

}).call(this);

(function() {
  angular.module('Picatic.Components').controller('List2DemoController', [
    function() {
      var self;
      self = this;
      self.people = [
        {
          name: 'Aiden Keller',
          img: 'img/aiden.jpg',
          email: 'aiden@gmail.com',
          created: 'Apr 18, 2017'
        }, {
          name: 'Tillie Fleming',
          img: 'img/tillie.jpg',
          email: 'tillie@gmail.com',
          created: 'Apr 17, 2017'
        }, {
          name: 'Allie Reyes',
          img: 'img/allie.jpg',
          email: 'allie@gmail.com',
          created: 'Apr 16, 2017'
        }, {
          name: 'Leon Larson',
          img: 'img/leon.jpg',
          email: 'leon@gmail.com',
          created: 'Apr 15, 2017'
        }, {
          name: 'Steven Allen',
          img: 'img/steven.jpg',
          email: 'steven@gmail.com',
          created: 'Apr 14, 2017'
        }
      ];
    }
  ]);

}).call(this);

(function() {
  angular.module('Picatic.Components').controller('ListDemoController', [
    function() {
      var self;
      self = this;
      self.toppings = [
        {
          name: 'Pepperoni',
          wanted: true
        }, {
          name: 'Sausage',
          wanted: false
        }, {
          name: 'Black Olives',
          wanted: true
        }, {
          name: 'Green Peppers',
          wanted: false
        }
      ];
    }
  ]);

}).call(this);

(function() {


}).call(this);

(function() {
  angular.module('Picatic.Components').controller('MenuDemoController', [
    '$mdToast', function($mdToast) {
      var self;
      self = this;
    }
  ]);

}).call(this);

(function() {
  angular.module('Picatic.Components').controller('SnackbarDemoController', [
    '$mdToast', function($mdToast) {
      var self;
      self = this;
      self.popToast1 = function() {
        return $mdToast.show($mdToast.simple().textContent('Message sent').hideDelay(6500).position('bottom center').toastClass('pt-toast').theme('purpleHeart'));
      };
      self.popToast2 = function(highlightClass) {
        if (highlightClass == null) {
          highlightClass = null;
        }
        return $mdToast.show($mdToast.simple().textContent('Message sent').action('Undo').hideDelay(0).position('bottom center').toastClass('pt-toast').theme('purpleHeart').highlightAction(true).highlightClass(highlightClass));
      };
      self.popToast3 = function() {
        return $mdToast.show($mdToast.simple().textContent('Connection timed out. You will see limited information until you reconnect.').hideDelay(6500).position('bottom center').toastClass('pt-toast').theme('purpleHeart'));
      };
      self.popToast4 = function() {
        return $mdToast.show($mdToast.simple().textContent('Connection timed out. You will see limited information until you reconnect.').action('Reload').hideDelay(0).position('bottom center').toastClass('pt-toast').theme('purpleHeart'));
      };
    }
  ]);

}).call(this);

(function() {
  angular.module('Picatic.Components').controller('Table2DemoController', [
    function() {
      var self;
      self = this;
      self.rows = [
        {
          col: 'col1',
          name: 'Col 1'
        }, {
          col: 'col2',
          name: 'Col 2'
        }, {
          col: 'col3',
          name: 'Col 3'
        }, {
          col: 'col4',
          name: 'Col 4'
        }, {
          col: 'col5',
          name: 'Col 5'
        }, {
          col: 'col6',
          name: 'Col 6'
        }, {
          col: 'col7',
          name: 'Col 7'
        }, {
          col: 'col8',
          name: 'Col 8'
        }
      ];
      self.sortSettings = {
        field: null,
        asc: false
      };
      self.sort = function(field) {
        if (field === self.sortSettings.field) {
          self.sortSettings.asc = !self.sortSettings.asc;
        } else {
          self.sortSettings.field = field;
          self.sortSettings.asc = false;
        }
      };
      self.tableHeaderClass = function(field) {
        var cellClass;
        cellClass = [];
        if (field === self.sortSettings.field) {
          cellClass.push('th-sort-active');
          if (self.sortSettings.asc) {
            cellClass.push('th-sort-asc');
          } else {
            cellClass.push('th-sort-desc');
          }
        }
        return cellClass.join(' ');
      };
    }
  ]);

}).call(this);

(function() {
  angular.module('Picatic.Components').controller('Table3DemoController', [
    function() {
      var self;
      self = this;
      self.row1 = ['Col 1', 'Col 2', 'Col 3', 'Col 4', 'Col 5', 'Col 6', 'Col 7'];
      self.row2 = angular.copy(self.row1);
      self.row2.push('Col 8');
      self.row3 = {
        avatar: 'img/aiden.jpg',
        name: 'Carl Harrison',
        caption: 'Col 1 Caption',
        columns: ['Col 2', 'Col 3', 'Col 4', 'Col 5', 'Col 6', 'Col 7']
      };
    }
  ]);

}).call(this);

(function() {
  angular.module('Picatic.Components').controller('Table4DemoController', [
    function() {
      var self;
      self = this;
      self.people = [
        {
          name: 'Aiden Keller',
          img: 'img/aiden.jpg',
          id: '1476781',
          email: 'aiden@gmail.com',
          amount: '476.50',
          method: 'card',
          status: 'paid',
          attendees: 4,
          created: '2017-04-18'
        }, {
          name: 'Tillie Fleming',
          img: 'img/tillie.jpg',
          id: '1476780',
          email: 'tillie@gmail.com',
          amount: '200',
          method: 'card',
          status: 'paid',
          attendees: 1,
          created: '2017-04-17'
        }, {
          name: 'Allie Reyes',
          img: 'img/allie.jpg',
          id: '1476779',
          email: 'allie@gmail.com',
          amount: '400',
          method: 'invoice',
          status: 'unpaid',
          attendees: 4,
          created: '2017-04-16'
        }, {
          name: 'Leon Larson',
          img: 'img/leon.jpg',
          id: '1476778',
          email: 'leon@gmail.com',
          amount: '100',
          method: 'card',
          status: 'paid',
          attendees: 3,
          created: '2017-04-15'
        }, {
          name: 'Steven Allen',
          img: 'img/steven.jpg',
          id: '1476777',
          email: 'steven@gmail.com',
          amount: '0',
          method: 'card',
          status: 'paid',
          attendees: 4,
          created: '2017-04-14'
        }
      ];
      self.sortSettings = {
        field: 'id',
        asc: false
      };
      self.searchFilter = void 0;
      self.updateSearch = function(result) {
        console.log(result);
        self.searchFilter = result;
      };
      self.formClear = function() {
        self.searchFilter = void 0;
      };
      self.sort = function(field) {
        if (field === self.sortSettings.field) {
          self.sortSettings.asc = !self.sortSettings.asc;
        } else {
          self.sortSettings.field = field;
          self.sortSettings.asc = false;
        }
      };
      self.tableHeaderClass = function(field) {
        var cellClass;
        cellClass = [];
        if (field === self.sortSettings.field) {
          cellClass.push('th-sort-active');
          if (self.sortSettings.asc) {
            cellClass.push('th-sort-asc');
          } else {
            cellClass.push('th-sort-desc');
          }
        }
        return cellClass.join(' ');
      };
    }
  ]);

}).call(this);

(function() {
  angular.module('Picatic.Components').controller('TableDemoController', [
    '$mdDialog', function($mdDialog) {
      var self;
      self = this;
      self.updateSearch = function(result) {
        $mdDialog.show($mdDialog.alert().title('Search Text').textContent("You searched for '" + result + "'.").ok('OK!').theme('purpleHeart'));
      };
      self.formClear = function() {
        return $mdDialog.show($mdDialog.alert().title('Clear Search Field').textContent("The search field has been cleared.").ok('OK!').theme('purpleHeart'));
      };
    }
  ]);

}).call(this);
