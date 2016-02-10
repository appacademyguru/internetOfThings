//If the URL is root, displays the input form
Router.route('/', function () {
    this.layout('inputData', {});

});



//if the URL is /data, only displays the data for easy retrieval 
Router.route('/data', function () {
    this.layout('dataTemp', {});


});