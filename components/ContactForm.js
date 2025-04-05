import { BsArrowRight } from "react-icons/bs";
import { ContactContent } from "../pages/contact";
import InDev from "./InDev";

export const ContactForm = () => {
  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = e.currentTarget.name.value;
    const email = e.currentTarget.email.value;
    const subject = e.currentTarget.subject.value;
    const message = e.currentTarget.message.value;
    console.log(name + " | " + email + " | " + subject + " | " + message);
    console.log(e.currentTarget);
    console.log(data);

    try {
      const response = await fetch("https://a7ikkiw8x8.execute-api.eu-central-1.amazonaws.com/dev/email", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: new URLSearchParams(data),
      });
      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      alert("Thanks for contacting us, we will get back to you soon!");
    } catch (err) {
      console.error(err);
      alert("We can't submit the form, try again later?");
    }
  }

  return (
    <div className="relative">
      <form
        className="flex-1 flex flex-col gap-6 w-full mx-auto"
        onSubmit={handleSubmit}
        id="form"
      >
        {/** group */}
        <div className="flex gap-x-6 w-full">
          <input
            type="text"
            placeholder={ContactContent.placeholders.name}
            className="input normal-case"
            name="name"
          />
          <input
            type="text"
            placeholder="Email"
            className="input lowercase"
            name="email"
          />
        </div>
        <input
          type="text"
          placeholder={ContactContent.placeholders.subject}
          className="input normal-case"
          name="subject"
        />
        <textarea
          placeholder={ContactContent.placeholders.message}
          className="textarea normal-case"
          name="message"
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
      </form>
    </div>
  );
};
