var MessageView = {

  render: _.template(`
      <div class="chat <%- username.split('%20').join("") %>" id= <%- objectId %>>
        <div class="username">
        <%- username %>
        </div>
        <div class="message">
        <%- text %>
        </div>
      </div>
    `)

};