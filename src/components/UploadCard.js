import React from "react";
import Box from "@mui/material/Box";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Typography from "@mui/material/Typography";

const UploadCard = ({ title = "Upload the Contract", onFileChange }) => {
  return (
    <Box
      component="label"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "2px dotted #1e83ff",
        borderRadius: "10px",
        gap: "10px",
        width: "120px",
        height: "150px",
        backgroundColor: "#f4f5fc",
        cursor: "pointer",
        // Responsive styles
        '@media (max-width: 768px)': {
          width: "150px",
          height: "180px",
        },
        '@media (max-width: 480px)': {
          width: "180px",
          height: "200px",
        },
      }}
    >
      <CloudUploadIcon style={{ fontSize: "40px", color: "#1e83ff" }} />
      <Typography fontSize={10}>{title}</Typography>
      <Typography fontSize={10} color="#1e83ff" fontWeight={500}>
        Max 2MB, PDF
      </Typography>
      {/* Hidden file input */}
      <input
        type="file"
        hidden
        accept=".pdf"
        onChange={(e) => {
          if (onFileChange) {
            onFileChange(e.target.files[0]); // Trigger the callback function
          }
        }}
      />
    </Box>
  );
};

export default UploadCard;
