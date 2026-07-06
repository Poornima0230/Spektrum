import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const phoneNumber = "+91 90631 09555";
  const message = encodeURIComponent("Hello! ");
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="whatsAppButton"
    >
      <FaWhatsapp size={36} />
    </a>
  );
}

export default WhatsAppButton;
