export default function HowWorks() {
  const steps = [
    {
      number: 1,
      title: "Who Is Behind This Website",
      content:
        "This website is led by Dhata Harris, the founder of The Endtime Group Inc., an Atlanta-based nonprofit committed to making a lasting impact on the fight against Multiple Sclerosis (MS).",
    },
    {
      number: 2,
      title: "Know The Story",
      content:
        "The journey began when Dhata Harris witnessed the struggles faced by individuals living with MS. Inspired to take action, she created a movement dedicated to raising awareness, funding research, and supporting patients.",
    },
    {
      number: 3,
      title: "Explore Other Stories",
      content:
        "Beyond Dhata Harris story, countless families and individuals have shared their experiences with MS. These stories remind us that while the disease is challenging, hope, resilience, and community make a real difference.",
    },
    {
      number: 4,
      title: "Get Help From AI",
      content:
        "We use AI-powered tools to provide guidance, resources, and emotional support. Whether you're seeking information, connecting with others, or exploring treatment options, AI can help you find answers quickly.",
    },
  ];


  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
          How It <span className="text-[#760C2A]">Works</span>
        </h2>

        <div className="space-y-6 md:space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              {/* Number Circle */}
              <div className="flex flex-col items-center">
                <div className="w-[100px] h-[100px] rounded-full bg-[#760C2A] text-white flex items-center justify-center text-4xl font-bold">
                  {step.number}
                </div>
                <p className="text-[18px] mt-1">Step {step.number}</p>
              </div>

              {/* Content Box */}
              <div className="bg-[#FFE6E6] rounded-2xl p-5 flex-1 w-full">
                <h3 className="font-medium text-[20px] text-[#121819] mb-2">{step.title}</h3>
                <p className="text-[16px] font-normal lg:w-5/6 text-justify text-[#2C383C]">{step.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
