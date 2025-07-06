"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Header() {
  const pathName = usePathname();
  console.log("pathName:", pathName);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        borderBottom: "1px solid grey",
        alignItems: "center",
        position: "fixed",
        width: "100%",
        top: "0px",
        backgroundColor: "#FFFFFF",
        zIndex: "1",
      }}
    >
      <Box>
        <Typography
          sx={{ color: "#607c3c", fontWeight: "800", fontSize: "20px" }}
        >
          Ayush Malhotra
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: "10px", color: "white" }}>
        <Link
          href={"/"}
          style={{
            backgroundColor: `${pathName === "/" ? "green" : "grey"}`,
            padding: "5px 10px",
            borderRadius: "5px",
          }}
        >
          Home
        </Link>
        <Link
          href="projects"
          style={{
            backgroundColor: `${pathName === "/projects" ? "green" : "grey"}`,
            padding: "5px 10px",
            borderRadius: "5px",
          }}
        >
          Projects
        </Link>
        <Link
          href="/about"
          style={{
            backgroundColor: `${pathName === "/about" ? "green" : "grey"}`,
            padding: "5px 10px",
            borderRadius: "5px",
          }}
        >
          About
        </Link>
      </Box>
    </Box>
  );
}

export default Header;
