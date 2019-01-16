var MessageView = {

  render: _.template(`
      <div class="chat <%- username %>" id= <%- objectId %>>
        <div class="username">
        <%- username %>
        </div>
        <div class="message">
        <%- text %>
        </div>
      </div>
    `)

};