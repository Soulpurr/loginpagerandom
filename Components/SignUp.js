"use client"


import React, { useState } from 'react';

import styled from 'styled-components';

const FormContainer = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  color: #000;
  font-size: 1rem;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 10px;
  outline: none;
  color: #000;
  margin: 0;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  background-color: #0077ff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
`;

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
 

  const handleLogin = async () => {
    console.log("hello")
  };

  return (
    <div>
      <h2 style={{ fontSize: '1.5rem', color: '#000', marginBottom: '1rem', fontWeight: 'bold' }}>Login</h2>
      <form>
        <FormContainer>
          <Label htmlFor="email">Email</Label>
          <Input
            type="username"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </FormContainer>
        <FormContainer>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormContainer>
        <FormContainer>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormContainer>
        <FormContainer>
          <SubmitButton type="button" onClick={handleLogin}>
            Sign Up
          </SubmitButton>
          {loading && <ReactLoading color="red" type="spin" height={30} width={30} />}
        </FormContainer>
      </form>
    </div>
  );
}

export default SignUp;
