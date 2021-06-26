import './newUser.css';

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>officemail</label>
          <input type="text" placeholder="Office mail" />
        </div>
        <div className="newUserItem">
          <label>Area</label>
          <input type="text" placeholder="Area" />
        </div>
        <div className="newUserItem">
          <label>Teritory</label>
          <input type="text" placeholder="teritory" />
        </div>
        <div className="newUserItem">
          <label>Remarks</label>
          <input type="text" placeholder="remarks" />
        </div>
        
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Type</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Admin</option>
            <option value="no">SEC</option>
            <option value="no">SOM</option>
            <option value="no">AM</option>
            <option value="no">TSO</option>
            <option value="no">LOGISTIC-M</option>
            <option value="no">VM</option>
            <option value="no">TRAINER</option>
            <option value="no">MIS</option>
          
          </select>
        </div>
        <div className="newUserItem">
          <label>Maneger</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Siraj hassan</option>
            <option value="no">rony halder</option>
            <option value="no">joy bormon</option>          
          </select>
        </div>
        <div className="newUserItem">
          <label>store</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">E M store</option>
            <option value="no">SM Electornic</option>
            <option value="no">Walltone</option>          
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
