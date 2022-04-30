import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PN from "persian-number";
import { useSelector, useDispatch } from "react-redux";
import { ToggleStats } from "../redux/displayPopUpReducer";

const StatsPopUp = () => {
  const open = useSelector((state) => state.displayPopUp.stats);
  const dispatch = useDispatch();
  const totalSolved = useSelector((state) => state.newWord.totalSolved);
  const totalFailed = useSelector((state) => state.newWord.totalFailed);
  const streak = useSelector((state) => state.newWord.streak);
  const maxStreak = useSelector((state) => state.newWord.maxStreak);
  const guessCount = useSelector((state) => state.newWord.guesscount);
  const maxGuess = useSelector((state) =>
    Math.max(...state.newWord.guesscount)
  );
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            boxSizing: "border-box",
            margin: "auto",
            padding: "0 2rem",
            width: "31.3rem",
            bgcolor: "#121213",
            height: "26.5rem",
            borderRadius: "10px",
            border: "1px solid #1a1a1b",
          }}
        >
          <Box
            onClick={() => dispatch(ToggleStats())}
            sx={{
              mt: "1rem",
              color: "#ffffff",
            }}
          >
            <CloseIcon color={"inherit"} />
          </Box>
          <Box
            sx={{
              width: "100%",
              textAlign: "center",
              color: "#ffffff",
            }}
          >
            <Typography
              color={"#ffffff"}
              fontSize={"1.3rem"}
              fontFamily={"Shabnam"}
            >
              آمار و ارقام
            </Typography>
          </Box>
          <Box
            sx={{
              margin: "1rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "4rem",
                margin: ".4rem",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <Typography
                color={"#ffffff"}
                fontSize={"2.5rem"}
                fontFamily={"Shabnam"}
              >
                {PN.convertEnToPe(totalSolved + totalFailed)}
              </Typography>
              <Typography
                color={"#ffffff"}
                fontSize={"1rem"}
                fontFamily={"Shabnam"}
              >
                بازی
              </Typography>
            </Box>
            <Box
              sx={{
                width: "4rem",
                margin: ".4rem",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <Typography
                color={"#ffffff"}
                fontSize={"2.5rem"}
                fontFamily={"Shabnam"}
              >
                {PN.convertEnToPe(
                  Math.floor(
                    (totalSolved / (totalSolved + totalFailed)) * 100
                  ) || 0
                )}
              </Typography>
              <Typography
                color={"#ffffff"}
                fontSize={"1rem"}
                fontFamily={"Shabnam"}
              >
                برد %
              </Typography>
            </Box>
            <Box
              sx={{
                width: "4rem",
                margin: ".4rem",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <Typography
                color={"#ffffff"}
                fontSize={"2.5rem"}
                fontFamily={"Shabnam"}
              >
                {PN.convertEnToPe(streak)}
              </Typography>
              <Typography
                color={"#ffffff"}
                fontSize={"1rem"}
                fontFamily={"Shabnam"}
              >
                متوالی فعلی
              </Typography>
            </Box>
            <Box
              sx={{
                width: "4rem",
                margin: ".4rem",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <Typography
                color={"#ffffff"}
                fontSize={"2.5rem"}
                fontFamily={"Shabnam"}
              >
                {PN.convertEnToPe(maxStreak)}
              </Typography>
              <Typography
                color={"#ffffff"}
                fontSize={"1rem"}
                fontFamily={"Shabnam"}
              >
                بیشترین متوالی
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {guessCount.map((item, itemIndex) => (
              <Box
                key={itemIndex}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  mt: ".3rem",
                }}
              >
                <Typography
                  width={"2rem"}
                  color={"#ffffff"}
                  fontSize={"1rem"}
                  fontFamily={"Shabnam"}
                  textAlign={"end"}
                >
                  {PN.convertEnToPe(itemIndex + 1)}
                </Typography>
                <Box
                  sx={{
                    background: "#3a3a3c",
                    margin: "0 .5rem",
                    minWidth: "1.7rem",
                    width: String((item / maxGuess) * 24) + "rem",
                  }}
                >
                  <Typography
                    color={"#ffffff"}
                    fontSize={"1rem"}
                    fontFamily={"Shabnam"}
                    ml={".5rem"}
                    textAlign={"end"}
                  >
                    {PN.convertEnToPe(item)}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    )
  );
};

export default StatsPopUp;
