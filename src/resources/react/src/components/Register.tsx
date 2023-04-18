import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const Register = () => {
  const history = useHistory();

  const [registerInput, setRegisterInput] = useState({
    name: '',
    email: '',
    password: '',
    error_list: [],
  });

  const handleInput = (e) => {
    setRegisterInput({ ...registerInput, [e.target.name]: e.target.value });
  }

  const registerSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: registerInput.name,
      email: registerInput.email,
      password: registerInput.password
    }

    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post('/api/register', data).then(res => {
        if (res.data.status === 200) {
          localStorage.setItem('auth_token', res.data.token);
          localStorage.setItem('auth_name', res.data.username);
          history.push('/');
        } else {
          setRegisterInput({ ...registerInput, error_list: res.data.validation_errors });
        }
      })
    })
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={registerSubmit}>
        <div>
          <label>名前</label>
          <input type="" name="name" onChange={handleInput} value={registerInput.name} />
        </div>
        <div>
          <label>メールアドレス</label>
          <input type="" name="email" onChange={handleInput} value={registerInput.email} />
        </div>
        <div>
          <label>パスワード</label>
          <input type="" name="password" onChange={handleInput} value={registerInput.password} />
        </div>
        <button type="submit">登録</button>
      </form>
    </div>
  );
}
