// components/builder.tsx
"use client";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react"; 
import { BuilderContent, builder } from '@builder.io/sdk';
import DefaultErrorPage from "next/error";

interface BuilderPageProps { 
  content?: BuilderContent;
}

// Replace with your Public API Key
const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;

if (!apiKey) {
  throw new Error("NEXT_PUBLIC_BUILDER_API_KEY is not set");
}

builder.init(apiKey);

export function RenderBuilderContent({ content }: BuilderPageProps) { 
  // Call the useIsPreviewing hook to determine if 
  // the page is being previewed in Builder
  const isPreviewing = useIsPreviewing(); 
  // If `content` has a value or the page is being previewed in Builder,
  // render the BuilderComponent with the specified content and model props.
  if (content || isPreviewing) {
    return <BuilderComponent content={content} model="page" />;
  }
  // If the `content` is falsy and the page is 
  // not being previewed in Builder, render the 
  // DefaultErrorPage with a 404.
  return <DefaultErrorPage statusCode={404} />; 
}
