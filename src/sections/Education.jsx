import { motion } from "motion/react";

const education = [
  {
    name: "Institute of Technology and Science",
    course: "Bachelor of Computer Applications",
    associated: "CCSU, Meerut",
    percentage: null,
    year: "2024 – 2027",
  },
  {
    name: "Indraprastha Public School",
    course: "Senior Secondary Education",
    associated: "CBSE",
    percentage: "88%",
    year: "2023 – 2024",
  },
  {
    name: "Indraprastha Public School",
    course: "Secondary Education",
    associated: "CBSE",
    percentage: "92.3%",
    year: "2021 – 2022",
  },
];

const StarIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 1l1.8 3.6 4 .6-2.9 2.8.7 4L8 10l-3.6 1.9.7-4L2.2 5.2l4-.6z"
      fill="#AFA9EC"
    />
  </svg>
);

const EducationCard = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, borderColor: "#AFA9EC" }}
      className="w-full rounded-2xl bg-dark-amethyst-800 border h-full border-amethyst-smoke-400 p-5 md:p-6 flex flex-col gap-3 transition-all duration-200"
    >
      {/* Year badge */}
      <div className="inline-flex items-center gap-2 text-white bg-amethyst-smoke-400 text-xs w-fit rounded-md px-2.5 py-1">
        <span className="inline-block w-2 h-2 bg-amethyst-smoke-600 rounded-sm" />
        {item.year}
      </div>

      {/* Name */}
      <h3 className="text-base md:text-lg font-semibold leading-snug">
        {item.name}
      </h3>

      {/* Course */}
      <p className="text-sm md:text-base text-dusty-grape-200">{item.course}</p>

      {/* University */}
      <p className="text-xs text-dusty-grape-300">{item.associated}</p>

      {/* Score */}
      <div className="inline-flex items-center gap-2 text-white text-sm font-medium rounded-md px-2.5 py-1 w-fit bg-amethyst-smoke-600">
        <StarIcon />
        {item.percentage ?? (
          <span className="text-amethyst-smoke-100">In progress</span>
        )}
      </div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <>
      <section className="w-full px-4 py-16 md:py-20 transition-all duration-500">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-14 text-amethyst-smoke-50"
        >
          Education
        </motion.h1>

        <div className="max-w-7xl mx-auto">
          {/* ─── Desktop: horizontal timeline ─── */}
          <div className="hidden lg:block relative">
            {/* Horizontal line */}
            <div className="absolute top-7 left-0 right-0 h-px  bg-linear-90 from-transparent via-amethyst-smoke-100 to-transparent " />

            {/* Nodes row */}
            <div className="grid grid-cols-3 gap-6">
              {education.map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  {/* Dot + vertical connector */}
                  <div
                    className="flex flex-col items-center"
                    style={{ height: 56 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="rounded-full z-10 w-4 border border-amethyst-smoke-50 bg-amethyst-smoke-700 h-4 mt-5"
                    />
                    <div className="flex-1 w-px bg-amethyst-smoke-900" />
                  </div>

                  <EducationCard item={item} />
                </div>
              ))}
            </div>
          </div>

          {/* ─── Mobile: vertical timeline ─── */}
          <div className="flex flex-col lg:hidden">
            {/* <div className="absolute top-7 left-0 right-0   bg-linear-90 from-transparent via-amethyst-smoke-100 to-transparent " /> */}

            {education.map((item, i) => (
              <div key={i} className="flex items-stretch gap-4">
                {/* Dot + vertical line */}
                <div
                  className="flex flex-col items-center w-px"
                  style={{ width: 28 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      delay: i * 0.15,
                      type: "spring",
                      stiffness: 300,
                    }}
                    className="rounded-full z-10 shrink-0 w-4 border border-amethyst-smoke-50 bg-amethyst-smoke-700 h-4 mt-5"
                  />
                  {i < education.length - 1 && (
                    <div className="flex-1 bg-amethyst-smoke-300 w-px" />
                  )}
                </div>

                {/* Card */}
                <div className="flex-1 pb-6">
                  <EducationCard item={item} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="w-full flex justify-center lg:mb-10">
        <div className="h-px w-2/3 bg-linear-to-r from-transparent via-amethyst-smoke-800 to-transparent" />
      </div>
    </>
  );
};

export default Education;
