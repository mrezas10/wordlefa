import { Box } from "@mui/material";
import VirtualKey from "./VirtualKey";

const VirtualKeyboard = () => {
  return (
    <Box
      sx={{
        marginBottom: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <VirtualKey keyLetter={"چ"} />
        <VirtualKey keyLetter={"ج"} />
        <VirtualKey keyLetter={"ح"} />
        <VirtualKey keyLetter={"خ"} />
        <VirtualKey keyLetter={"ه"} />
        <VirtualKey keyLetter={"ع"} />
        <VirtualKey keyLetter={"غ"} />
        <VirtualKey keyLetter={"ف"} />
        <VirtualKey keyLetter={"ق"} />
        <VirtualKey keyLetter={"ث"} />
        <VirtualKey keyLetter={"ص"} />
        <VirtualKey keyLetter={"ض"} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginLeft: "2rem",
        }}
      >
        <VirtualKey keyLetter={"پ"} />
        <VirtualKey keyLetter={"گ"} />
        <VirtualKey keyLetter={"ک"} />
        <VirtualKey keyLetter={"م"} />
        <VirtualKey keyLetter={"ن"} />
        <VirtualKey keyLetter={"ت"} />
        <VirtualKey keyLetter={"ا"} />
        <VirtualKey keyLetter={"ل"} />
        <VirtualKey keyLetter={"ب"} />
        <VirtualKey keyLetter={"ی"} />
        <VirtualKey keyLetter={"س"} />
        <VirtualKey keyLetter={"ش"} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginLeft: "2rem",
        }}
      >
        <VirtualKey keyLetter={"Enter"} />
        <VirtualKey keyLetter={"آ"} />
        <VirtualKey keyLetter={"و"} />
        <VirtualKey keyLetter={"ء"} />
        <VirtualKey keyLetter={"ئ"} />
        <VirtualKey keyLetter={"د"} />
        <VirtualKey keyLetter={"ذ"} />
        <VirtualKey keyLetter={"ر"} />
        <VirtualKey keyLetter={"ز"} />
        <VirtualKey keyLetter={"ژ"} />
        <VirtualKey keyLetter={"ط"} />
        <VirtualKey keyLetter={"ظ"} />
        <VirtualKey keyLetter={"Backspace"} />
      </Box>
    </Box>
  );
};

export default VirtualKeyboard;
