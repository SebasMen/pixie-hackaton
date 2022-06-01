export const Card = ({ title, description, selected }: CardProps) => (
  <div
    className={`
        w-full h-120 rounded-3xl flex flex-col p-5 
        shadow-xl transform transition-all
        ${selected ? 'bg-red-100' : 'bg-red-300 scale-90'}
    `}
  >
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

interface CardProps {
  title: string;
  description: string;
  selected?: boolean;
}

export default Card;
