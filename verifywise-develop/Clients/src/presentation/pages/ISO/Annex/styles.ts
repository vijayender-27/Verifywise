import { SxProps, Theme } from "@mui/material";
import { commonStyles, flashAnimation, getStatusColor } from "../style";

// Component styles
export const styles = {
  container: commonStyles.container,
  title: commonStyles.title,
  accordion: commonStyles.accordion,
  accordionSummary: commonStyles.accordionSummary,
  expandIcon: commonStyles.expandIcon,

  statusBadge: (status: string) => ({
    borderRadius: "4px",
    padding: "5px",
    backgroundColor: getStatusColor(status),
    color: "#fff",
    height: "fit-content",
  }) as SxProps<Theme>,

  loadingContainer: {
    padding: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  } as SxProps<Theme>,

  noItemsContainer: {
    padding: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#666",
  } as SxProps<Theme>,

  controlRow: (isLast: boolean, isFlashing: boolean) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    borderBottom: isLast ? "none" : "1px solid #eaecf0",
    cursor: "pointer",
    fontSize: 13,
    animation: isFlashing ? `${flashAnimation} 2s ease-in-out` : 'none',
    '&:hover': {
      backgroundColor: isFlashing ? 'transparent' : '#f5f5f5',
    },
  }) as SxProps<Theme>,

  controlTitle: {
    fontWeight: 600,
  } as SxProps<Theme>,

  controlDescription: {
    fontSize: 13,
  } as SxProps<Theme>,
}; 