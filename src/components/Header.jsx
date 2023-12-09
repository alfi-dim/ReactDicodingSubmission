export default function Header({ title }) {
  return (
    <div className="mx-auto w-full lg:mx-0 border-b border-gray-200 pb-4">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
    </div>
  );
}