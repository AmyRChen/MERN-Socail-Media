import { Box } from "@mui/material";
import { styled } from "@mui/system";

// Style component -> name this component as you want, pass in CSS property
// Align and flex object to proper locations.
const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
})

export default FlexBetween;