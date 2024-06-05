import { useState } from "react";
function ProductForm() {
  const [nameProduct, setNameProduct] = useState("");
  const [imgProduct, setImgProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState(0);
  const [descriptionProduct, setDescriptionProduct] = useState("");

  const handledSumit = (event) => {
    event.preventDefault();
    const data = {
      Name: nameProduct,
      Img: imgProduct,
      Price: priceProduct,
      Description: descriptionProduct,
    };

    alert(JSON.stringify(data));
  };

  return (
    <form className="post-form" onSubmit={handledSumit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={nameProduct}
            onChange={(e) => {
              setNameProduct(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={imgProduct}
            onChange={(e) => {
              setImgProduct(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={priceProduct}
            onChange={(e) => {
              setPriceProduct(Number(e.target.value));
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            value={descriptionProduct}
            onChange={(e) => {
              setDescriptionProduct(e.target.value);
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
