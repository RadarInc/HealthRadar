import "@/styles/globals.css";
import type { AppProps } from "next/app";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import HealthRadarContext from "./api/auth";

const data = {
  "model": "gpt-3.5-turbo",
  "messages": [
    {
      "role": "user",
      "content": "What is OpenAPI?"
    }
  ]
}
const healthRadar = new HealthRadarContext();
export default function App({ Component, pageProps }: AppProps) {
  healthRadar.postHealthRadarData(data);

  return (
   <>
    <div>
      hi
    </div>
   </>
  );
}
