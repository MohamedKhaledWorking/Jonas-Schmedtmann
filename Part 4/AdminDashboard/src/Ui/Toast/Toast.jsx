import { addToast } from "@heroui/react";

export default function Toast({
  title = "",
  description = "",
  theme = "theme",
}) {
  return addToast({
    title,
    description,
    radius: "full",
    variant: "bordered",
    shouldShowTimeoutProgress: true,
    classNames: {
      base: `border border-${theme} bg-secBgc`,
      progressIndicator: `bg-${theme}/20`,
      content: `text-${theme}`,
      title: `text-${theme}`,
      description: `text-${theme}`,
    },
  });
}
