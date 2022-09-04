export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  DANGER = "danger",
}

interface ButtonProps {
  buttonType: ButtonType;
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  buttonType,
  text,
  disabled,
  onClick,
}) => {
  const basicClasses = "px-4 py-2 rounded transition pointer-cursor";
  const primaryClasses = "bg-blue-600 text-white hover:bg-blue-500";
  const secondaryClasses = "bg-gray-200 text-black hover:bg-gray-100";
  const dangerClasses = "bg-red-600 text-white hover:bg-red-500";

  const getClasses = () => {
    let classes = basicClasses;

    if (buttonType === ButtonType.PRIMARY) {
      classes += " " + primaryClasses;
    } else if (buttonType === ButtonType.SECONDARY) {
      classes += " " + secondaryClasses;
    } else if (buttonType === ButtonType.DANGER) {
      classes += " " + dangerClasses;
    }

    return classes;
  };

  return (
    <button className={getClasses()} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};
