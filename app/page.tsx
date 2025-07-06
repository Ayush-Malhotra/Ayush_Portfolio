import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        marginInline: "40px",
        marginTop: "110px",
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap-reverse",
      }}
    >
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Typography variant="h5" sx={{ color: "#666666" }}>
          Hi,I am Ayush!
        </Typography>
        <Typography
          sx={{
            color: "#607c3c",
            fontSize: "50px",
            lineHeight: "50px",
            fontWeight: "900",
            letterSpacing: "1px",
          }}
        >
          Frontend
          <br />
          Developer
        </Typography>
        <Typography variant="h6" sx={{ color: "#666666" }}>
          I&apos;m a passionate frontend developer with hands-on experience
          building modern, user-focused web applications. I specialize in
          JavaScript, React.js, Tailwind CSS, and performance-optimized UIs.
        </Typography>
      </Box>
      <Box sx={{ width: "50%" }}>
        <Box
          sx={{
            margin: "auto",
            border: "2px solid #809c13",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "150px", md: "350px" },
              height: { xs: "150px", md: "350px" },
              borderRadius: "50%",
              backgroundSize: "cover",
              overflow: "hidden",
              backgroundImage: "url('/developer.webp')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            {/* <Image
            src="/apple_logo.svg"
            alt="my-pic"
            objectFit="contain"
            className="object-contain"
            width="400"
            height="400"
          /> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
