  // Global API configuration
  var Api = new Restivus({
      useDefaultAuth: true,
      prettyJson: true
  });

  Api.addCollection(Meteor.users, {
      excludedEndpoints: ['getAll', 'put'],
      routeOptions: {
          authRequired: false
      },
      endpoints: {
          post: {
              authRequired: false
          },
          delete: {
              roleRequired: 'admin'
          }
      }
  });

  // Maps to: /api/getDat
  // Calling root/api/getDat will return the value of the data in DataColl
  Api.addRoute('getDat', {
      authRequired: false
  }, {
      get: function () {
          return parseInt(DataColl.findOne({}, {
              sort: {
                  timestamp: -1
              }
          }).value);
      }
  });



  // Maps to: /api/postDat
  // Calling root/api/postData/xxx will give the the data in DataColl a value of xxx
  Api.addRoute('postDat/:message', {
      authRequired: false
  }, {
      post: {
          action: function () {

              var response = null;
              var message = this.urlParams.message;

              if (message) {

                  var valP = message; // 
                  DataID = DataColl.findOne()._id;
                  DataColl.update(DataID, {
                      $set: {
                          value: valP
                      }
                  });



                  console.log("Message received: " + message);
                  return {
                      status: "success",
                      data: message
                  };
              } else {
                  console.log("Message empty...");
                  return {
                      status: "fail",
                      message: "Post not found"
                  };
              }

              return;
          }
      }
  });