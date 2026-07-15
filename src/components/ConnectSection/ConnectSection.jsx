import { useState } from "react";
import { Mail, Send, ShieldCheck, CheckCircle, XCircle } from "lucide-react";
import styles from "./ConnectSection.module.css";

const ConnectSection = () => {
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState({ message: "", type: "" });

  const showToast = (message, type = "success") => {
    setToast({ message, type });

    setTimeout(() => {
      setToast({ message: "", type: "" });
    }, 4000);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("access_key", "67dccf96-e191-44a7-81de-3b60e2055138");
    formData.append(
      "subject",
      "New Supporter Joined the Springs Of Hope Community"
    );
    formData.append("from_name", "Springs Of Hope Website");
    formData.append("email", email);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setEmail("");
        showToast("Thank you for joining our community!", "success");
      } else {
        showToast("Something went wrong. Please try again.", "error");
      }
    } catch (error) {
      showToast("Network error. Please try again.", "error");
    }
  };

  return (
    <section className={styles.connectContainer}>

      {/* TOAST NOTIFICATION */}
      {toast.message && (
        <div
          className={`${styles.toast} ${
            toast.type === "success"
              ? styles.toastSuccess
              : styles.toastError
          }`}
        >
          {toast.type === "success" ? (
            <CheckCircle size={18} />
          ) : (
            <XCircle size={18} />
          )}
          <span>{toast.message}</span>
        </div>
      )}

      <div className={styles.connectGrid}>
        {/* LEFT */}
        <div className={styles.textSide}>
          <span className={styles.badge}>GET INVOLVED</span>

          <h2 className={styles.title}>
            Stay Connected With Springs Of Hope
          </h2>

          <p className={styles.description}>
            Join our community of supporters and receive updates on impact,
            events, and opportunities to create change.
          </p>
        </div>

        {/* RIGHT */}
        <div className={styles.formSide}>
          <form onSubmit={onSubmit} className={styles.formGroup}>
            <div className={styles.inputContainer}>
              <Mail size={18} className={styles.mailIcon} />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className={styles.emailInput}
                required
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Join Us <Send size={14} />
            </button>
          </form>

          <div className={styles.privacyNote}>
            <ShieldCheck size={13} />
            <span>
              We respect your privacy and only send meaningful updates.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;