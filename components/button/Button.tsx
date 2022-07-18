export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface ButtonProps {
  buttonType: ButtonType;
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ buttonType, text }) => {
  const basicClasses = "px-4 py-2 rounded transition";
  const primaryClasses = "bg-blue-600 text-white hover:bg-blue-500";
  const secondaryClasses = "bg-grey-100 text-black";

  const getClasses = () => {
    let classes = basicClasses;

    if (buttonType === ButtonType.PRIMARY) {
      classes += " " + primaryClasses;
    } else if (buttonType === ButtonType.SECONDARY) {
      classes += " " + secondaryClasses;
    }

    return classes;
  };

  return <button className={getClasses()}>{text}</button>;
};
