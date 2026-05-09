import { useRef, useState } from "react";
import "../styles/form.css";
import emailjs from "emailjs-com";

export const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",

    category: "",
    stone: "",
    shape: "",
    quality: "",
    weight: "",

    notes: "",
    file: null,
  });
  const categories = [
    "Precious Gemstone",
    "Semi-Precious Gemstone",
    "Loose Diamond",
    "Diamond Jewellery",
    "Gold Jewellery",
    "Silver Jewellery",
  ];

  const stones = ["Diamond", "Ruby", "Sapphire", "Emerald"];

  const shapes = [
    {
      name: "Round",
      code: "RD",
    },
    {
      name: "Oval",
      code: "OV",
    },
    {
      name: "Pear",
      code: "PR",
    },
    {
      name: "Cushion",
      code: "CU",
    },
    {
      name: "Princess",
      code: "PS",
    },
    {
      name: "Emerald Cut",
      code: "EC",
    },
    {
      name: "Heart",
      code: "HT",
    },
    {
      name: "Marquise",
      code: "MQ",
    },
    {
      name: "Cabochon",
      code: "CAB",
    },
  ];

  const qualities = [
    {
      code: "AAA",
      label: "Premium",
    },
    {
      code: "AA",
      label: "Fine",
    },
    {
      code: "A",
      label: "Commerical",
    },
    {
      code: "B",
      label: "Lower Grade",
    },
  ];

  const weights = [
    {
      label: "0.50 ct",
      code: "050",
    },
    {
      label: "1.00 ct",
      code: "100",
    },
    {
      label: "2.00 ct",
      code: "200",
    },
    {
      label: "5.00 ct",
      code: "500",
    },
    {
      label: "10.00 ct",
      code: "1000",
    },
  ];

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

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let base64File = "";

      if (formData.file) {
        base64File = await convertToBase64(formData.file);
      }

      const templateParams = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        date: formData.date,

        category: formData.category,
        stone: formData.stone,
        shape: formData.shape,
        quality: formData.quality,
        weight: formData.weight,

        notes: formData.notes,
        file: base64File,
      };

      await emailjs.send(
        "service_0myif4z",
        "template_vv63wrr",
        templateParams,
        "EnmX8nJY0G2uCzdS3"
      );

      // show success only after sending
      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
      }, 3000);

      //  reset form AFTER success
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
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Try again.");
    }
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
            <label htmlFor="date">Select Date</label>
          </div>

          <div className="form-group">
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              {categories.map((curr, index) => (
                <option key={index}>{curr}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <select
              name="stone"
              value={formData.stone}
              onChange={handleChange}
              required
            >
              <option value="">Select Stone</option>
              {stones.map((stone, index) => {
                return <option key={index}>{stone}</option>;
              })}
            </select>
          </div>

          <div className="form-group">
            <select name="shape" value={formData.shape} onChange={handleChange}>
              <option value="">Select Shape</option>
              {shapes.map((shape, index) => {
                return (
                  <option key={index}>
                    {shape.name} ({shape.code})
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-group">
            <select
              name="quality"
              value={formData.quality}
              onChange={handleChange}
            >
              <option value="">Select Quality</option>
              {qualities.map((curr, index) => {
                return (
                  <option key={index}>
                    {curr.name} ({curr.code})
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-group">
            <select
              name="weight"
              value={formData.weight}
              onChange={handleChange}
            >
              <option value="">Select Weight</option>
              {weights.map((weight, index) => (
                <option key={index}>
                  {weight.label} ({weight.code})
                </option>
              ))}
            </select>
          </div>

          <div className="form-group ">
            <textarea
              name="notes"
              id="notes"
              placeholder=" "
              value={formData.notes}
              onChange={handleChange}
              required
              className="form-input"
            ></textarea>
            <label htmlFor="notes">Additional instructions (optional)</label>
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

        {/* summary */}
        <div className="summary-card">
          <h3>Order Summary</h3>

          <div className="summary-item">
            <span>Category: </span>
            <p>{formData.category || "-"}</p>
          </div>

          <div className="summary-item">
            <span>Stone: </span>
            <p>{formData.stone || "-"}</p>
          </div>

          <div className="summary-item">
            <span>Shape: </span>
            <p>{formData.shape || "-"}</p>
          </div>

          <div className="summary-item">
            <span>Quality: </span>
            <p>{formData.quality || "-"}</p>
          </div>

          <div className="summary-item">
            <span>Weight: </span>
            <p>{formData.weight || "-"}</p>
          </div>

          <div className="summary-item">
            <span>Date:</span>
            <p>{formData.date || "—"}</p>
          </div>

          <div className="summary-item">
            <span>Notes:</span>
            <p>{formData.notes || "—"}</p>
          </div>

          <div className="summary-highlight">
            <p>
              {formData.stone && formData.shape && formData.quality
                ? `${formData.stone} | ${formData.shape} | ${formData.quality} | ${formData.weight}`
                : "Select details to preview order"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
