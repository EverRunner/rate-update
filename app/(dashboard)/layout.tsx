"use client";
import { styled, Container, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import Header from "@/app/(dashboard)/layouts/header/Header";
import Sidebar from "@/app/(dashboard)/layouts/sidebar/Sidebar";
import { baselightTheme } from "@/app/(dashboard)/utils/theme/DefaultColors";

const MainWrapper = styled("div")(() => ({
    minHeight: "100vh",
    background: "#D9D9D9",
}));

const PageWrapper = styled("div")(() => ({
    display: "flex",
    flexGrow: 1,
    flexDirection: "row",
    zIndex: 999,
    backgroundColor: "transparent",
    paddingTop: "50px",
    width: "100%",
    "*": {
        boxShadow: "none!important",
        outline: "0!important",
    }
}));

interface Props {
    children: React.ReactNode;
}



export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    return (
        <>
            <ThemeProvider theme={baselightTheme} >
                <MainWrapper className="mainwrapper" style={{ overflow: "hidden" }}>
                    {/* ------------------------------------------- */}

                    {/* ------------------------------------------- */}
                    <Header toggleMobileSidebar={() => setMobileSidebarOpen(true)} />

                    {/* ------------------------------------------- */}
                    {/* Main Wrapper */}
                    {/* ------------------------------------------- */}
                    <PageWrapper className="page-wrapper">
                        {/* Sidebar */}
                        <Sidebar
                            isSidebarOpen={isSidebarOpen}
                            isMobileSidebarOpen={isMobileSidebarOpen}
                            onSidebarClose={() => setMobileSidebarOpen(false)}
                        />
                        {/* PageContent */}
                        {/* ------------------------------------------- */}
                        <Container
                            sx={{
                                paddingTop: "50px",
                                minWidth: "calc(100vw - 270px)",
                                width: "100%",
                                height: "95vh",
                                overflowY: "scroll"
                            }}
                        >
                            {/* ------------------------------------------- */}
                            {/* Page Route */}
                            {/* ------------------------------------------- */}
                            <Box sx={{
                                minHeight: "calc(95vh - 200px)", overflow: "auto"
                            }}>{children}</Box>
                            {/* ------------------------------------------- */}
                            {/* End Page */}
                            {/* ------------------------------------------- */}
                        </Container>
                    </PageWrapper>
                </MainWrapper>
            </ThemeProvider>

        </>
    );
}