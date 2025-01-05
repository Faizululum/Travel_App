import Image from "next/image";

type ButtnProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant?: 'btn_dark_green';
}

const Button = ({ type, title, icon, variant }: ButtnProps) => {
  return (
    <button className={`flexCenter rounded-full border ${variant}`}
        type={type}
    >
        {icon && <Image src={icon} width={24} height={24} alt="icon" />}
        <label className="bold-16 whitespace-nowrap">{title}</label>
    </button> 
  )
}

export default Button