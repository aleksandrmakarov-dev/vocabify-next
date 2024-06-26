"use client";
import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import React, { Suspense } from "react";
import { FC, PropsWithChildren } from "react";
import AudioProvider from "./AudioProvider";
import { SessionProvider } from "next-auth/react";
import LoadingView from "@/components/common/LoadingView";
import { ThemeProvider } from "next-themes";

export const AppProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div className="h-screen flex items-center justify-center">
          <LoadingView />
        </div>
      }
    >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <QueryClientProvider client={queryClient}>
          <SessionProvider>
            <AudioProvider>{children}</AudioProvider>
          </SessionProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </Suspense>
  );
};
