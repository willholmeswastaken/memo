import {
  CheckCircledIcon,
  CircleIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
];

export const statuses = [
  {
    value: "draft",
    label: "Draft",
    icon: CircleIcon,
  },
  {
    value: "in review",
    label: "In Review",
    icon: StopwatchIcon,
  },
  {
    value: "reviewed",
    label: "Reviewed",
    icon: CheckCircledIcon,
  },
];
