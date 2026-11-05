// Builds extra, genuinely differentiated content for each course detail page.
// Templates vary by category and pull in the course's own title, duration
// and software so pages do not read as duplicated boilerplate.

const closingLines = [
  'Every module builds toward a graded portfolio piece, not just a checklist of completed exercises.',
  'Mentors track your progress week to week, so feedback stays specific to your own work rather than a generic note.',
  'The pace is steady and cumulative, each stage assumes only what the previous one covered.',
];

function pickClosing(seed) {
  return closingLines[seed % closingLines.length];
}

export function getCourseNarrative(course) {
  const seed = course.code.length + course.title.length;
  const primarySoftware = course.software[0];
  const categoryWord = {
    master: 'master diploma',
    diploma: 'diploma',
    certificate: 'certificate course',
    ai: 'AI integrated program',
    kids: 'kids program',
  }[course.category];

  const overview = [
    `The ${course.title} at Creative Corvus is a ${course.duration} ${categoryWord} designed for anyone who wants to move from curiosity to a working, portfolio ready skill set in ${course.software.join(', ')}. Rather than isolated tutorials, classes are structured around real briefs, the kind of assignments a working studio would actually hand a junior artist or designer.`,
    course.category === 'kids'
      ? `Sessions are paced for younger learners, mixing short demonstrations with hands on practice, so the ${primarySoftware ? primarySoftware + ' ' : ''}fundamentals stick without feeling like a lecture.`
      : `Class sizes stay small so mentors, all of them working professionals rather than full time lecturers, can give direct, specific feedback on every project rather than generic notes.`,
    `${pickClosing(seed)} Whichever background you are coming from, the course assumes no more than the basics and builds up from there.`,
  ];

  const whoFor = {
    master: [
      'Students who have finished school or college and want a complete, industry ready skill set in one focused program',
      'Working professionals looking to switch fields into design, animation, editing and visual effects',
      'Anyone who has tried short tutorials online and wants structured, mentor led depth instead',
    ],
    diploma: [
      'Students who already know their direction and want strong, focused training in one specialty',
      'Graduates preparing a portfolio for their first design, animation or VFX job',
      'Career changers who want a faster route into the industry than a full master program',
    ],
    certificate: [
      'Working designers or artists who want to add one specific, in demand tool to their skill set quickly',
      'Freelancers looking to expand their service offering',
      'Anyone testing whether a design or animation career is the right fit before committing to a longer program',
    ],
    ai: [
      'Designers and editors who want to fold modern AI assisted tools into an existing workflow',
      'Students who want to stay ahead of how studios are adopting AI assisted production',
      'Anyone who already has software fundamentals and wants to work faster without losing craft',
    ],
    kids: [
      'Children who love drawing, cartoons or storytelling and want a structured, guided introduction',
      'Parents looking for a screen time that builds a real, transferable creative skill',
      'Young learners curious about design and animation as a future career path',
    ],
  }[course.category];

  const week = {
    master: [
      { label: 'Foundation weeks', text: `Core principles behind ${course.software[0]}${course.software[1] ? ' and ' + course.software[1] : ''}, taught through small, guided exercises.` },
      { label: 'Skill building weeks', text: 'Full studio workflows across every tool listed for this program, with weekly critique sessions.' },
      { label: 'Project weeks', text: 'Longer, brief driven projects that mirror real client or studio work.' },
      { label: 'Portfolio and placement weeks', text: 'Portfolio polish, mock interviews and introductions to our hiring partner network.' },
    ],
    diploma: [
      { label: 'Foundation weeks', text: `Core fundamentals in ${course.software[0]}, building comfort with the interface and core workflow.` },
      { label: 'Skill building weeks', text: 'Guided projects covering every skill area listed for this diploma.' },
      { label: 'Final project weeks', text: 'A capstone project for your portfolio, reviewed one on one with your mentor.' },
    ],
    certificate: [
      { label: 'Early sessions', text: `Getting comfortable in ${course.software[0]}, covering the interface and core commands.` },
      { label: 'Applied sessions', text: 'Hands on exercises building toward one finished, portfolio ready piece of work.' },
    ],
    ai: [
      { label: 'Early sessions', text: `Refreshing the ${course.software[0]} fundamentals this program builds on.` },
      { label: 'AI integration sessions', text: 'Folding AI assisted steps into the same workflow, with an eye on where it saves time and where craft still matters.' },
    ],
    kids: [
      { label: 'Early sessions', text: 'Playful, guided introductions to the basics, no prior experience assumed.' },
      { label: 'Creative sessions', text: 'Small projects that let each child finish something they are proud to show family and friends.' },
    ],
  }[course.category];

  return { overview, whoFor, week };
}
