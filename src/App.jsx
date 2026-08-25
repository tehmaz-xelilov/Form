import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Ad daxil edilmelidir";
    }
    if (!formData.email) {
      newErrors.email = "Email daxil edilmelidir";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Duzgun email daxil edilmelidir";
    }
    if (!formData.password) {
      newErrors.password = "Sifre daxil edilmelidir";
    } else if (formData.password.length < 6) {
      newErrors.password = "Sifre en az 6 simvol olmalidir";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Sifre yeniden daxil edilmelidir";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Sifreler uygun gelmir";
    }

    if (Object.keys(newErrors).length === 0) {
      setErrors({});
      console.log("Form gonderildi");
      console.log(formData);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 1500);
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      setErrors(newErrors);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "white",
      }}
    >
      <form
        onSubmit={handleClick}
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,1)",
          width: "400px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#333",
            marginBottom: "20px",
          }}
        >
          Qeydiyyat Formu
        </h2>

        {showSuccess && (
          <div
            style={{
              backgroundColor: "#d4edda",
              color: "#155724",
              padding: "12px",
              borderRadius: "6px",
              marginBottom: "15px",
              textAlign: "center",
              fontSize: "16px",
              fontWeight: "bold",
              border: "1px solid #c3e6cb",
            }}
          >
            ✅ Form göndərildi!
          </div>
        )}

        <input
          style={{
            width: "100%",
            padding: "10px",
            margin: "5px 0",
            border: `2px solid ${errors.name ? "red" : "green"}`,
            borderRadius: "6px",
            fontSize: "14px",
            boxSizing: "border-box",
          }}
          type="text"
          placeholder="Ad daxil edin"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {errors.name && (
          <p
            style={{
              color: "red",
              margin: "0 0 10px 0",
              fontSize: "13px",
            }}
          >
            {errors.name}
          </p>
        )}

        <input
          style={{
            width: "100%",
            padding: "10px",
            margin: "5px 0",
            border: `2px solid ${errors.email ? "red" : "green"}`,
            borderRadius: "6px",
            fontSize: "14px",
            boxSizing: "border-box",
          }}
          type="email"
          placeholder="Email daxil edin"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && (
          <p
            style={{
              color: "red",
              margin: "0 0 10px 0",
              fontSize: "13px",
            }}
          >
            {errors.email}
          </p>
        )}

        <input
          style={{
            width: "100%",
            padding: "10px",
            margin: "5px 0",
            border: `2px solid ${errors.password ? "red" : "green"}`,
            borderRadius: "6px",
            fontSize: "14px",
            boxSizing: "border-box",
          }}
          type="password"
          placeholder="Sifre daxil edin"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        {errors.password && (
          <p
            style={{
              color: "red",
              margin: "0 0 10px 0",
              fontSize: "13px",
            }}
          >
            {errors.password}
          </p>
        )}

        <input
          style={{
            width: "100%",
            padding: "10px",
            margin: "5px 0",
            border: `2px solid ${errors.confirmPassword ? "red" : "green"}`,
            borderRadius: "6px",
            fontSize: "14px",
            boxSizing: "border-box",
          }}
          type="password"
          placeholder="Sifrəni tekrar daxil edin"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />
        {errors.confirmPassword && (
          <p
            style={{
              color: "red",
              margin: "0 0 10px 0",
              fontSize: "13px",
            }}
          >
            {errors.confirmPassword}
          </p>
        )}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            cursor: "pointer",
            marginTop: "10px",
            fontWeight: "bold",
            transition: "background-color 0.3s",
          }}
        >
          Qeydiyyatdan Keç
        </button>
      </form>
    </div>
  );
}

export default App;
