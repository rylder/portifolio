interface SmallCardProps {
  title: string;
  description: string;
}

export default function SmallCard({ title, description }: SmallCardProps) {
  return (
    <div className="flex size-32 flex-col items-center justify-center rounded border-[1px] border-white bg-gray p-10">
      <h4 className="text-xl">{title}</h4>
      <p className="text-center">{description}</p>
    </div>
  );
}
