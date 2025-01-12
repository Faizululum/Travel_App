import Image from "next/image";

type ButtnProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant?: string;
    full?: boolean;
}

const Button = ({ type, title, icon, variant, full }: ButtnProps) => {
  return (
    <button className={`flexCenter rounded-full border ${variant} ${full && 'w-full'} `}
        type={type}
    >
        {icon && <Image src={icon} width={24} height={24} alt="icon" />}
        <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button> 
  )
}

export default Button