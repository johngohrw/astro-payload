import { IconifyIconReact } from "../IconifyIcon/IconifyIconReact";

export const MobileNavButton = () => {
  const handleClick = () => {
    console.log("click!!"); // todo
  };
  return (
    <div className="p-2 cursor-pointer">
      <IconifyIconReact
        color="black"
        size="1.5rem"
        name="lucide:menu"
        onClick={handleClick}
      />
    </div>
  );
};
