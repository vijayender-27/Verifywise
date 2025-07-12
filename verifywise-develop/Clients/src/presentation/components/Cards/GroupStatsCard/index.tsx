import { Stack, Typography } from "@mui/material";
import { GroupStatsCardFrame, GroupStatsCardRate } from "./style";
import ProgressBar from "../../ProjectCard/ProgressBar";
import { useMemo } from "react";
import { GroupStatsCardProps } from "../../../../domain/interfaces/iGroupStatsCard";

const GroupStatsCard = ({ title, completed, total }: GroupStatsCardProps) => {
  const stats = useMemo(() => {
    return title.map((t, index) => {
      const completedNum = Number(completed[index]);
      const totalNum = Number(total[index]);
      
      const validCompleted = isNaN(completedNum) || completedNum < 0 ? 0 : completedNum;
      const validTotal = isNaN(totalNum) || totalNum < 0 ? 0 : totalNum;
      
      const progress = `${validCompleted}/${validTotal}`;
      const percentage = validTotal === 0 ? 0 : Math.floor((validCompleted / validTotal) * 100);
      
      return {
        title: t,
        completed: validCompleted,
        total: validTotal,
        progress,
        percentage: isNaN(percentage) ? 0 : percentage
      };
    });
  }, [title, completed, total]);

  return (
    <Stack sx={GroupStatsCardFrame}>
      <Stack
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          gap: 8,
          mt: "10px",
        }}
      >
        {stats.map((stat, index) => (
          <Stack key={index} sx={{ gap: 1 }}>
            <ProgressBar progress={stat.progress} />
            <Typography
              sx={{
                color: "#8594AC",
                fontSize: 13,
              }}
            >
              {`${stat.completed} ${stat.title} out of ${stat.total} is completed`}
            </Typography>
          </Stack>
        ))}
      </Stack>
      <Stack sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {stats.map((stat, index) => (
          <Typography key={index} sx={GroupStatsCardRate}>
            {`${stat.percentage}%`}
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
};

export default GroupStatsCard;