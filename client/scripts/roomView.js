var RoomView = {
  render: _.template(`
  <option value=<%= room.split(' ').join('-') %>><%- room %></option>
  `)
};




    /*
    Example message data:
    createdAt: "2020-07-24T04:02:14.890Z"
    objectId: "42rseYOoY4"
    roomname: "SprintRoom"
    text: "testing now"
    updatedAt: "2020-07-24T04:02:14.890Z"
    username: "test"
*/