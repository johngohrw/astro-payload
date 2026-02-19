import { IconifyIconReact } from "../IconifyIcon/IconifyIconReact";

export const MobileNavButton = () => {
  const handleClick = () => {
    console.log("click!!");
  };
  return (
    <IconifyIconReact
      color="black"
      size="2rem"
      style={{ cursor: "pointer" }}
      name="lucide:menu"
      onClick={handleClick}
    />
  );
};
