export default function Card({
  titleline1,
  titleline2,
  description,
  iconsJSON,
}) {
  return (
    <main className="bg-primary flex flex-row gap-16 px-16 py-8 text-background">
      <div className="flex flex-col mr-16">
        <div className="text-focus">{titleline1}</div>
        <div className="text-focus">{titleline2}</div>
        <div className="text-para mt-4">{description}</div>
      </div>
      <div className="text-focus font-normal flex flex-wrap gap-8 my-8">
        {iconsJSON.map((Icon, index) => (
          <div key={index}>{Icon.icon}</div>
        ))}
      </div>
    </main>
  );
}
