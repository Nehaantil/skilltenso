  
import React from 'react';

const skills = [
  { name: "Web Development ⭐", count: "245 learners" },
  { name: "Graphic Design", count: "189 learners" },
  { name: "Digital Marketing ⭐", count: "156 learners" },
  { name: "Photography", count: "132 learners" },
  { name: "Music Production ⭐", count: "98 learners" },
  { name: "Language Learning", count: "87 learners" },
  { name: "UI/UX Design ⭐", count: "76 learners" },
  { name: "Data Science", count: "65 learners" },
];

function SkillsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">Popular Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="text-center p-4 cursor-pointer hover:-translate-y-1 transition-all">
              <span className="inline-block px-5 py-3 bg-slate-800/80 border border-slate-600/30 rounded-lg text-sm font-medium hover:bg-purple-700 hover:border-purple-600 transition-all">
                {skill.name}
              </span>
              <p className="text-gray-500 text-xs mt-2">{skill.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;