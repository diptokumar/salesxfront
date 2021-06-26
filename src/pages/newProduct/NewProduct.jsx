import './newProduct.css';

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Product</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Product Name</label>
          <input type="text" placeholder="Product name" />
        </div>
        <div className="newUserItem">
          <label>Product Discribe</label>
          <input type="text" placeholder="Discribe" />
        </div>
        <div className="newUserItem">
          <label>Recomended Price</label>
          <input type="text" placeholder="Recomended price" />
        </div>
        <div className="newUserItem">
          <label>Promo Price</label>
          <input type="text" placeholder="Promo price" />
        </div>
        <div className="newUserItem">
          <label>EMI</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">3month</option>
            <option value="no">6month</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Color</label>
          <input type="text" placeholder="black" />
        </div>
        <div className="newUserItem">
          <label>Size</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">xl</option>
            <option value="no">xxl</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Category</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Mobile</option>
            <option value="no">Computer</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>SubCategory</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Samsange</option>
            <option value="no">Iphone</option>
          </select>
        </div>
        
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
