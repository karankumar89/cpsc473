
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Rock Paper Scissors Lizard Spock' })
};

