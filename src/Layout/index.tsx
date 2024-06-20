import { Box } from "@mui/material";
import { ReactNode } from "react";
import Sidebar from "../Components/sidebar";

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <Box sx={{
            backgroundColor: "#10141F",
            display: "flex",
            flexDirection: {
                xs: "column",
                lg: "row"
            },
            color: "#fff",
            padding: 3,
            gap: 3,
            overflowY: "hidden",
            minHeight: "100vh"

        }}>

            <Sidebar />

            <Box sx={{
                width: "100%",
                overflowY: "hidden"
            }}>
                {children}
            </Box>

        </Box>
    )
}

export default Layout;
