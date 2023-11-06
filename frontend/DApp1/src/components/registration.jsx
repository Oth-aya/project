import React, { Component } from 'react';

class registration extends Component {
  render() {
    return (
      <div>
        <form>
<div class="form-group">
  <label>user name</label>
  <input type="text"  class="form-control" id="username" placeholder="Enter Name"
  
  />
</div>
<div class="form-group">
  <label>Role</label>
  <input type="text"  class="form-control" id="user" placeholder="Enter role"
  
  />
</div>
<div class="form-group">
  <label>email</label>
  <input type="email"  class="form-control" id="email" placeholder="Enter Email"
    
  />

</div>
<div class="form-group">
    <label>password</label>
    <input type="password"  class="form-control" id="password" placeholder="Enter password"
    
    
    />
  </div>
<button type="submit" class="btn btn-primary mt-4"  >Save</button>

</form>
      </div>
    );
  }
}

export default registration;