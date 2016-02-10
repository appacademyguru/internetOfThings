//Data display template helper functions
Template.dataTemp.helpers({
    // Find the latest (and only, if code is unmodified) value in the collection and returns it
    'lastVal': function () {
        valRead = DataColl.findOne({}, {
            sort: {
                timestamp: -1
            }
        }).value;
        return valRead;
    }
});