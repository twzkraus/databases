var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username u-<%- username %>"><%- username %></div>
        <div><%- text %></div>
      </div>
    `)
    /*
    Example message data:
    createdAt: "2020-07-24T04:02:14.890Z"
    objectId: "42rseYOoY4"
    roomname: "SprintRoom"
    text: "testing now"
    updatedAt: "2020-07-24T04:02:14.890Z"
    username: "test"
*/

};