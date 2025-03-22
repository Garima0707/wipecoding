import { Button } from "@shadcn/ui";

const CustomButton = ({ text, onClick }) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export default CustomButton;
