import React from "react";
import { HiOutlineLightningBolt, HiOutlineCube, HiOutlineShieldCheck, HiOutlineTrendingUp } from "react-icons/hi";
import Reveal from "./Reveal";

const approach = [
  {
    icon: HiOutlineLightningBolt,
    title: "Performance first",
    description:
      "Core Web Vitals aren't an afterthought — I profile, measure, and optimize LCP, INP, and CLS as part of shipping, not a cleanup pass after.",
  },
  {
    icon: HiOutlineCube,
    title: "Full-stack when it matters",
    description:
      "I can stop at the frontend, but I don't have to — REST APIs, auth, and schema design are part of my range when a feature needs it end-to-end.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Tested, not just working",
    description:
      "Core user flows get Jest and React Testing Library coverage, so 'it works on my machine' isn't the bar.",
  },
  {
    icon: HiOutlineTrendingUp,
    title: "Built to be measured",
    description:
      "I default to shipping things with a number attached — load time, traffic, conversion — because that's what makes impact provable, not just claimed.",
  },
];

const ApproachSection = () => {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-content px-6 py-20 md:py-28">
        <Reveal>
          <h2 className="font-display text-3xl text-paper md:text-4xl">
            How I work
          </h2>
          <div className="mt-1 h-px w-12 bg-amber" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
          {approach.map((item) => (
            <div key={item.title} className="flex gap-4">
              <item.icon size={24} className="mt-1 flex-none text-teal" />
              <div>
                <h3 className="font-display text-lg text-paper">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
