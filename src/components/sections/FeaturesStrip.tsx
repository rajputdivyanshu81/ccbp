

const features = [
  {
    icon: "https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/course-duration-icon.png",
    label: "Course Duration",
    title: "5-8 months based on the",
    subtitle: "Job Track you choose",
    color: "#1e293b",
  },
  {
    icon: "https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/eligibility-icon.png",
    label: "Eligibility",
    title: "B. Tech (all branches),",
    subtitle: "BSc, B.Com, BBA, etc.",
    extra: "No CGPA cut-off",
    color: "#1e293b",
  },
  {
    icon: "https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/online-icon.png",
    label: "Online",
    title: "3 Hours Classes and",
    subtitle: "3 Hours Labs Every Day",
    color: "#1e293b",
  },
  {
    icon: "https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/live-sessions-icon-referral.png",
    label: "Support",
    title: "Dedicated Success Coach",
    subtitle: "and Live Sessions with",
    extra: "course mentors",
    badges: ["NEW", "LIVE"],
    color: "#1e293b",
  },
];

export default function FeaturesStrip() {
  return (
    <section className="bg-gradient-to-r from-[#171b21ff] to-[#1e293b] py-18">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              {/* Icon Image */}
              <div className="w-12 h-18 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img 
                  src={feature.icon} 
                  alt={feature.label} 
                  className="w-10 h-10 object-contain" 
                />
              </div>

              {/* Content */}
              <div className="text-white">
                {/* Label with badges */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-white/60 text-sm font-medium">
                    {feature.label}
                  </span>
                  {feature.badges?.map((badge, i) => (
                    <span
                      key={i}
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        badge === "NEW"
                          ? "bg-[#f97316] text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <p className="text-lg font-semibold leading-tight">
                  {feature.title}
                </p>
                <p className="text-lg font-semibold leading-tight">
                  {feature.subtitle}
                </p>
                {feature.extra && (
                  <p className="text-lg font-semibold leading-tight">
                    {feature.extra}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
