import { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import "./LoginPage.css";
import Form from "../LoginForm/Form";
import AdminInitPage from "../AdminInitPage/AdminInitPage";

export default function LoginPage() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [backendData, setBackendData] = useState();

  const [modal, setModal] = useState(false);
  function closeModal() {
    setModal(false);
  }

  async function login() {
    try {
      const res = await fetch("http://localhost:8000/login", {
        method: "POST",
        body: JSON.stringify({
          username: `${inputs.username}`,
          password: `${inputs.password}`,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        // setBackendData(res)
        setModal(true);
        return console.log(`Erro. Status: ${res.status}`);
      } else {
        const data = await res.json();
        console.log(data);
      }
    } catch (err) {
      return console.log(err);
    }
  }

  function getInputs(event: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <main>
      <div className="login-container">
        {modal === true && (
          <Modal click={closeModal} message={"Something went wrong!"} />
        )}
        <a>Hopper</a>

        <Form onChange={getInputs} onSubmit={login} />
      </div>
    </main>
  );
}
