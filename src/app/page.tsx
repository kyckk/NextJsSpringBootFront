'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Top from "./component/Top";
import Footer from "./component/Footer";
import { Button } from "react-bootstrap";
import Content from "./component/Content";
export default function Home() {
  return (
    <>
      <Top></Top>
      <Content/>
      
    </>
  );
}
