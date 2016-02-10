Template.inputData.events({
    'submit form': function (event) { //Form submission
        event.preventDefault();
        //the value submitted in the form
        var valForm = event.target.inputDataVal.value;
        //Find the ID value of the item in the collection, then overwrite 
        // its value with the new value
        DataID = DataColl.findOne()._id;
        DataColl.update(DataID, {
            $set: {
                value: valForm
            }
        });
    },
    'click .value1': function () { //Button 1
        val1 = 5; // Value given to data if Button 1 is pressed
        DataID = DataColl.findOne()._id;
        DataColl.update(DataID, {
            $set: {
                value: val1
            }
        });
    },
    'click .value2': function () { //Button 2
        val2 = 10; // Value given to data if Button 2 is pressed
        DataID = DataColl.findOne()._id;
        DataColl.update(DataID, {
            $set: {
                value: val2
            }
        });
    }

});