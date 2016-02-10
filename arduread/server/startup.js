  Meteor.startup(function () {
      // Clears the Collection on startup, then inserts initial value in
      DataColl.remove({});
      DataColl.insert({
          value: val0,
          timestamp: time0
      });

  });