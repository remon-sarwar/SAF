// components/ProgramAreaCard.tsx

export interface ProgramAreaCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function ProgramAreaCard({
  title,
  description,
  icon
}: ProgramAreaCardProps) {
  return (
    <div className='bg-white shadow-sm rounded-2xl p-8 border border-gray-100'>
      <div className='mb-4'>{icon}</div>
      <h3 className='text-xl font-semibold text-gray-900'>{title}</h3>
      <p className='text-gray-600 mt-3'>{description}</p>
    </div>
  );
}
