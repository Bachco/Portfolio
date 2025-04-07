import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { ContactContent } from "../pages/contact";

export const ContactForm = () => {
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" | "error"

  const showStatus = (message, type) => {
    setStatusMessage(message);
    setStatusType(type);

    // Ak je to success, nech to zmizne po 4 sekundách
    if (type === "success") {
      setTimeout(() => {
        setStatusMessage("");
        setStatusType("");
      }, 4000);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const name = e.currentTarget.name.value;
    const email = e.currentTarget.email.value;
    const subject = e.currentTarget.subject.value;
    const message = e.currentTarget.message.value;
    const payload = { name, email, subject, message };

    try {
      const response = await fetch("https://a7ikkiw8x8.execute-api.eu-central-1.amazonaws.com/dev/email", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }

      showStatus("Ďakujeme za správu! Ozveme sa čoskoro.", "success");
      e.currentTarget.reset();
    } catch (err) {
      showStatus("Nepodarilo sa odoslať formulár. Skúste to neskôr.", "error");
    }
  }

  return (
    <div className="relative">
      <form
        className="flex-1 flex flex-col gap-6 w-full mx-auto"
        onSubmit={handleSubmit}
        id="form"
      >
        <div className="flex gap-x-6 w-full">
          <input
            type="text"
            placeholder={ContactContent.placeholders.name}
            className="input normal-case"
            name="name"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="input lowercase"
            name="email"
            required
          />
        </div>
        <input
          type="text"
          placeholder={ContactContent.placeholders.subject}
          className="input normal-case"
          name="subject"
          required
        />
        <textarea
          placeholder={ContactContent.placeholders.message}
          className="textarea normal-case"
          name="message"
          required
        />
        <button
          className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300
          flex items-center justify-center overflow-hidden hover:border-accent group"
          type="submit"
        >
          <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
            {ContactContent.buttonText}
          </span>
          <BsArrowRight
            className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100
            transition-all duration-500 absolute text-[22px]"
          />
        </button>

        {/* Hlásenie pod tlačidlom */}
        {statusMessage && (
          <div
            className={`mt-4 text-sm font-medium ${
              statusType === "success" ? "text-green-500" : "text-red-500"
            }`}
          >
            {statusMessage}
          </div>
        )}
      </form>
    </div>
  );
};
