var express = require('express');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var Add todo = ['laundry', 'dishes', 'bills', 'groceries'];
// Create app
var app = express();

// Set app to use bodyParser()` middleware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//'extended: false' parses strings and arrays.
//'extended: true' parses nested objects
//'expressValidator' must come after 'bodyParser', since data must be parsed first!
app.use(expressValidator());
app.set('views', './views')

app.get('/', function (req, res) {
  var html = '<form action="/" method="post">' +
               '<p>Todo list</p>' +

              '<select name="position">' +
               '<option value="complete">laundry</option>' +
               '<option value="complete">dishes</option>' +
               '<option value="complete">bills</option>' +
               '<option value="complete">groceries</option>' +
              '</select>' +

               '<button type="submit">Add todo</button>' +

               '<p>Laundry</p>' +
               '<input type="text" placeholder="" name="complete">' +

               '<p>Dishes</p>' +
              '<input type="text" placeholder="" name="complete">' +

               '<p>Bills</p>' +
               '<input type="text" placeholder="" name="complete">' +

               '<p>Groceries</p>' +
               '<input type="text" placeholder="" name="complete">' +


          '</form>';
    res.send(html);
})

app.post('/', function(req, res){
req.checkBody("complete", "you must enter a todo!").notEmpty();
// req.checkBody("email", "you must enter a valid email!").notEmpty();

      var laundry = req.body.laundry;
      var dishes = req.body.dishes;
      var bills = req.body.bills;
      var groceries = req.body.groceries;

      var html = '<p>Laundry: </p>' + laundry +
                 '<p>Dishes: </p>' + dishes +
                 '<p>Bills: </p>' + bills +
                 '<p>Groceries: </p>' + groceries +
      res.send(html);
  });

app.listen(2000, function(){
  console.log('Started express application!')
});
