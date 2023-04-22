import React, { useEffect, useState } from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import styles from "../pages/homepage.module.css";

const Video = () => {

    const colors = [
        "#04D010",
        "#FFDB15",
        "#F06AB0",
        "black",
        "#EB392F",
        "#EB392F",
        "#EC0062",
      ];
      const [colorIndex, setColorIndex] = useState(0);
    
      useEffect(() => {
        const timer = setInterval(() => {
          setColorIndex((colorIndex + 1) % colors.length);
        }, 200);
    
        return () => clearInterval(timer);
      }, [colorIndex, colors]);

      
  return (
    <Box>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source
            src="https://res.cloudinary.com/dddnxiqpq/video/upload/v1682065458/SrjVideo_qpwfdb.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "#fff",
          textAlign: "center",
          fontSize: "3rem",
          fontWeight: "bold",
          marginTop: "40vh",
          zIndex : -1
        }}
      >
        <Flex justify={"center"} align={"center"}>
          <Text
            fontSize={{ base: "40px", md: "60px" }}
            className={styles.heading}
          >
            SURAJ DJ
          </Text>
          <Image
            src="https://qph.cf2.quoracdn.net/main-qimg-9ce1dcacbca9d22b00e6db84df936347"
            width={{ base: "20%", md: "8%" }}
            alt=""
          />
        </Flex>
        <Text
          fontSize={{ base: "16px", md: "40px" }}
          className={styles.subHeading}
        >
          Welcome to the world of {"   "}
          <span style={{ color: colors[colorIndex] }}>
            "Professional Sound"
          </span>
        </Text>
      </div>
    </Box>
  );
};

export default Video;
