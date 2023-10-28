"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import styled from "styled-components";
import Login from "@/Components/Login";
import Image from "next/image";
import SignUp from "@/Components/SignUp";
import * as Styles from "./styles"; // Import the styles
import style from "./page.module.css";
const Page = () => {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  return (
    <Styles.LoginContainer>
      <Styles.FormContainer>
        <Styles.LeftPart isLogin={isLogin}>
          <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#fff" }}>
            {isLogin ? "Don't Have An Account?" : "Have An Account?"}
          </p>
          <Image
            src={"/bg.png"}
            height={200}
            width={200}
            layout=""
            className={style.image}
          />
          <Styles.ToggleButton onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Create Account" : "Sign In"}
          </Styles.ToggleButton>
        </Styles.LeftPart>
        <Styles.RightPart isLogin={isLogin}>
          {isLogin ? <Login /> : <SignUp />}
        </Styles.RightPart>
      </Styles.FormContainer>
    </Styles.LoginContainer>
  );
};

export default Page;
