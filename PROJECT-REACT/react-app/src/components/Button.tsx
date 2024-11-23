interface Props {
  children: string;
  color?: 'primary' | 'secondary' | 'danger' ;
  onClick: () => void;
}
export default function Button({ children, onClick, color= 'primary' }: Props) {
  return (
    <button style={{position: "relative", left: "50%" }} className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
}
