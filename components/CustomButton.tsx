import { Button } from "react-native-paper";

interface CustomButtonProps {
  text: string;
  icon?: string;
  onpress: () => void;
}

export default function CustomButton({
  text,
  icon,
  onpress,
}: Readonly<CustomButtonProps>) {
  return (
    <Button
      mode="contained"
      icon={icon}
      className="w-[150px] h-[55px] m-2"
      contentStyle={{ height: "100%" }}
      buttonColor="#419A00"
      textColor="white"
      labelStyle={{ fontSize: 17 }}
      onPress={onpress}
    >
      {text}
    </Button>
  );
}
