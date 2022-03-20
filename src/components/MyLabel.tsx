import "./mylabel.css";

export interface Props {
  /**
   * This is the label message
   */
  label: string;
  /**
   * This is the label size
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * This is the label color
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * This sets the label to upper case if true
   */
  allCaps?: boolean;
  /**
   * This is the label font color
   */
  fontColor?: string;
}

export const MyLabel = ({
  label = "No label",
  size = "normal",
  color = "primary",
  allCaps = false,
  fontColor,
}: Props) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toLocaleUpperCase() : label}
    </span>
  );
};
