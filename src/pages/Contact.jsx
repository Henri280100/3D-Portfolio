import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import useAlert from "../hooks/useAlert";
import Alert from "../component/Alert";
import { socialLinks } from "../constants";
import { ScrollReveal, fadeUp } from "../component/Motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Dang Khoa",
          from_email: form.email,
          to_email: "phamk883@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({ name: "", email: "", message: "" });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <section className="max-container page-bg">
      {alert.show && <Alert {...alert} />}

      <ScrollReveal>
        <h1 className="head-text">
          Get in{" "}
          <span className="blue-gradient_text font-semibold">Touch</span>
        </h1>
      </ScrollReveal>

      <ScrollReveal delay={1}>
        <p className="mt-5 text-slate-500 max-w-xl">
          Looking for a SAP BTP developer or technical consultant? I&apos;m currently
          at FPT Software and open to new opportunities. Send me a message!
        </p>
      </ScrollReveal>

      <div className="mt-10 sm:mt-14 flex lg:flex-row flex-col gap-8 lg:gap-12">
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="flex-1 flex flex-col gap-6 sm:gap-7"
        >
          {["name", "email"].map((field) => (
            <label key={field} className="text-black-500 font-semibold capitalize">
              {field}
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                className="input"
                placeholder={field === "email" ? "you@email.com" : "Your name"}
                required
                value={form[field]}
                onChange={handleChange}
              />
            </label>
          ))}
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              rows="5"
              className="textarea"
              placeholder="Tell me about your project or opportunity..."
              value={form.message}
              onChange={handleChange}
            />
          </label>

          <motion.button
            type="submit"
            disabled={loading}
            className="btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>

        <div className="lg:w-[380px] flex flex-col gap-5 sm:gap-6">
          {[
            {
              title: "Let's Connect",
              body: "Based in Vietnam. Experienced in SAP enterprise projects across logistics, manufacturing, and finance modules.",
            },
            {
              title: "Current Role",
              body: "SAP Technical Consultant · BTP Developer at FPT Software since June 2025.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 3}
              whileHover={{ y: -4 }}
              className="contact-card"
            >
              <h3 className="text-lg sm:text-xl font-poppins font-semibold text-white">
                {card.title}
              </h3>
              <p className="text-blue-100/70 mt-3 text-sm leading-relaxed">
                {card.body}
              </p>
            </motion.div>
          ))}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={5}
            className="contact-card"
          >
            <h3 className="text-lg font-poppins font-semibold text-white mb-4">
              Find me on
            </h3>
            <div className="flex flex-col gap-3">
              {socialLinks
                .filter((link) => link.name !== "Contact")
                .map((link) => (
                  <a
                    key={link.name}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-blue-100/80 hover:text-white transition-colors"
                  >
                    <img
                      src={link.iconUrl}
                      alt={link.name}
                      className="w-5 h-5 object-contain brightness-0 invert"
                    />
                    {link.name}
                  </a>
                ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={6}
            className="contact-card"
          >
            <p className="text-sm text-blue-100/60">Email</p>
            <p className="text-white font-medium mt-1 break-all">phamk883@gmail.com</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
