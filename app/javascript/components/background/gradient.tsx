import type { BoxProps } from "@mui/material";
import { Box } from "@mui/material";

const defaultSx = {
  background:
    "radial-gradient(at center bottom, rgba(20, 20, 20, 0.8) 10%, rgba(20, 20, 20, 0.8) 10%, #141414), linear-gradient(-45deg, var(--plan-color-1), var(--plan-color-2)) center center/400% no-repeat",
  minHeight: "85vh",
};

export function Gradient({ children, sx }: BoxProps) {
  return <Box sx={{ ...defaultSx, ...sx }}>{children}</Box>;
}
