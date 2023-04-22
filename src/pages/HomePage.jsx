import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Video from "../components/Video";

const HomePage = () => {
  return (
    <Box>
      <Video />
      <Box
        sx={{
          background: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(10px)", // for Safari support
        }}
        h={"100vh"}
        mt={"45vh"}
      ></Box>
    </Box>
  );
};

export default HomePage;
