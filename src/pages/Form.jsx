import { useRef, useState } from "react";
import "../styles/form.css";

export const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    category: "",
    details: "",
    file: null,
  });
  const [showMessage, setShowMessage] = useState(false);

  const fileRef = useRef();

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // alert("Order Submitted successfully");
    setShowMessage(true);

    // auto hide after 3sec
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);

    // reset
    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      category: "",
      details: "",
      file: null,
    });

    fileRef.current.value = "";
  };

  return (
    <section className="order">
      <div className="order-container" data-aos="fade-up">
        <h1>◆ S P E K T R U M ◆</h1>
        <h2>
          Place Your
          <span> Order</span>
        </h2>
        <p>Gems & Jewellers · We'll contact you within 24 hours</p>

        <form onSubmit={handleSubmit} className="order-form">
          <div className="form-group ">
            <input
              type="text"
              name="name"
              id="name"
              placeholder=" "
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
            <label htmlFor="name">Name</label>
          </div>

          <div className="form-group ">
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder=" "
              value={formData.phone}
              onChange={handleChange}
              required
              className="form-input"
            />
            <label htmlFor="phone">Phone Number</label>
          </div>

          <div className="form-group ">
            <input
              type="email"
              name="email"
              id="email"
              placeholder=" "
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
            <label htmlFor="email">Email Address</label>
          </div>

          <div className="form-group ">
            <input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="form-input"
            />
            {/* <label htmlFor="date"></label> */}
          </div>
          <div className="form-group">
            <textarea
              name="category"
              id="category"
              placeholder=" "
              value={formData.category}
              onChange={handleChange}
              required
              className="form-input"
            ></textarea>
            <label htmlFor="category">Item Category</label>
          </div>
          <div className="form-group ">
            <textarea
              name="details"
              id="orderDetails"
              placeholder=" "
              value={formData.details}
              onChange={handleChange}
              required
              className="form-input"
            ></textarea>
            <label htmlFor="orderDetails">Order Details</label>
          </div>

          <div className="form-group ">
            <input
              type="file"
              name="file"
              ref={fileRef}
              accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.xls,.xlsx"
              onChange={handleChange}
              className="upload-file"
            />
          </div>

          <button type="submit">Submit Order</button>

          {showMessage && (
            <div className="success-toast">
              <p>Order placed successfully!</p>
              <span>Thank you for ordering with us.</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
