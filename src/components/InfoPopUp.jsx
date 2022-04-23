import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { height } from "@mui/system";
import PN from "persian-number";

const InfoPopUp = ({ open, setOpen }) => {
  return (
    open && (
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          bgcolor: "rgba(0,0,0,0.7)",
          position: "fixed",
          top: "0",
          zIndex: "3",
        }}
      >
        <Box
          sx={{
            boxSizing: "border-box",
            margin: "auto",
            padding: "0 2rem",
            width: "35rem",
            bgcolor: "#121213",
            height: "35rem",
          }}
        >
          <Box
            sx={{
              width: "100%",
              padding: ".5rem 0",
              textAlign: "center",
              color: "#ffffff",
            }}
          >
            <Typography
              sx={{}}
              color={"#ffffff"}
              fontSize={"1.3rem"}
              fontFamily={"Shabnam"}
            >
              روش انجام بازی
            </Typography>
          </Box>
          <Box
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              top: ".8rem",
              color: "#ffffff",
            }}
          >
            <CloseIcon color={"inherit"} />
          </Box>
          <Box padding={"1rem"}>
            <Typography color={"#ffffff"} fontFamily={"Shabnam"}>
              این بازی دموی فارسی بازی محبوب انگلیسی Wordle میباشد.
            </Typography>
            <Typography color={"#ffffff"} fontFamily={"Shabnam"}>
              این بازی از شما میخواهد یک واژه {PN.convertEnToPe(5)} حرفی را حدس
              بزنید، برای این کار به شما {PN.convertEnToPe(6)} شانس برای حدس زدن
              کلمه داده میشود.
            </Typography>
            <Typography color={"#ffffff"} fontFamily={"Shabnam"}>
              بعد از هر حدس، خانه هر حرف بر اساس نزدیک بودن حدس شما به واژه مورد
              نظر تغییر میکند.
            </Typography>
          </Box>
          <Box
            sx={{
              margin: "1rem 0",
              boxSizing: "border-box",
              borderBottom: "1px solid #3a3a3c",
              borderTop: "1px solid #3a3a3c",
              width: "100%",
              padding: "1rem",
            }}
          >
            <Typography color={"#ffffff"} fontFamily={"Shabnam"}>
              مثال
            </Typography>
            <Box
              sx={{
                margin: "1rem 0",
                display: "flex",
                flexDirection: "row",
                gap: ".2rem",
              }}
            >
              <Box
                sx={{
                  width: "2rem",
                  height: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#ffffff",
                  bgcolor: "#538b4e",
                }}
              >
                ر
              </Box>
              <Box
                sx={{
                  width: "2rem",
                  height: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#ffffff",
                  border: "1px solid #3a3a3c",
                }}
              >
                ا
              </Box>
              <Box
                sx={{
                  width: "2rem",
                  height: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#ffffff",
                  border: "1px solid #3a3a3c",
                }}
              >
                ح
              </Box>
              <Box
                sx={{
                  width: "2rem",
                  height: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#ffffff",
                  border: "1px solid #3a3a3c",
                }}
              >
                ت
              </Box>
              <Box
                sx={{
                  width: "2rem",
                  height: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#ffffff",
                  border: "1px solid #3a3a3c",
                }}
              >
                ی
              </Box>
            </Box>
            <Typography
              fontSize={".9rem"}
              color={"#ffffff"}
              fontFamily={"Shabnam"}
            >
              حرف "ر" در واژه وجود دارد و در جایگاه درست است.
            </Typography>
            <Box
              sx={{
                margin: "1rem 0",
                display: "flex",
                flexDirection: "row",
                gap: ".2rem",
              }}
            >
              <Box
                sx={{
                  width: "2rem",
                  height: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#ffffff",
                  border: "1px solid #3a3a3c",
                }}
              >
                آ
              </Box>
              <Box
                sx={{
                  width: "2rem",
                  height: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#ffffff",
                  border: "1px solid #3a3a3c",
                }}
              >
                ت
              </Box>
              <Box
                sx={{
                  width: "2rem",
                  height: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#ffffff",
                  bgcolor: "#b59f3b",
                }}
              >
                ش
              </Box>
              <Box
                sx={{
                  width: "2rem",
                  height: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#ffffff",
                  border: "1px solid #3a3a3c",
                }}
              >
                ی
              </Box>
              <Box
                sx={{
                  width: "2rem",
                  height: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#ffffff",
                  border: "1px solid #3a3a3c",
                }}
              >
                ن
              </Box>
            </Box>
            <Typography
              fontSize={".9rem"}
              color={"#ffffff"}
              fontFamily={"Shabnam"}
            >
              حرف "ش" در واژه وجود دارد اما در جایگاه درست نیست.
            </Typography>
            <Box
              sx={{
                margin: "1rem 0",
                display: "flex",
                flexDirection: "row",
                gap: ".2rem",
              }}
            >
              <Box
                sx={{
                  width: "2rem",
                  height: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#ffffff",
                  border: "1px solid #3a3a3c",
                }}
              >
                ک
              </Box>
              <Box
                sx={{
                  width: "2rem",
                  height: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#ffffff",
                  border: "1px solid #3a3a3c",
                }}
              >
                ی
              </Box>
              <Box
                sx={{
                  width: "2rem",
                  height: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#ffffff",
                  border: "1px solid #3a3a3c",
                }}
              >
                م
              </Box>
              <Box
                sx={{
                  width: "2rem",
                  height: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#ffffff",
                  border: "1px solid #3a3a3c",
                }}
              >
                ی
              </Box>
              <Box
                sx={{
                  width: "2rem",
                  height: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#ffffff",
                  bgcolor: "#3a3a3c",
                }}
              >
                ا
              </Box>
            </Box>
            <Typography
              fontSize={".9rem"}
              color={"#ffffff"}
              fontFamily={"Shabnam"}
            >
              حرف "ا" در هیچ جای واژه وجود ندارد.
            </Typography>
          </Box>
        </Box>
      </Box>
    )
  );
};

export default InfoPopUp;
