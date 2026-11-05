export const blogPosts = [
  {
    slug: 'choosing-between-blender-and-maya',
    title: 'Choosing Between Blender and Maya for Your First 3D Animation Course',
    excerpt:
      'Both tools can build a strong animation career. Here is how we help students at Creative Corvus decide which one fits their goals.',
    date: '2026-01-12',
    readTime: '6 min read',
    category: '3D Animation',
    image: 'https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=1200&auto=format&fit=crop',
    content: [
      'One of the first questions every new animation student asks us is simple: should I learn Blender or Maya? The honest answer is that both are capable, professional tools used across the industry, and the right choice depends more on your goals than on which software is technically better.',
      'Blender has grown into a serious production tool over the last few years. It is free, open source, and increasingly common in smaller studios, freelance pipelines and independent game development. If you want flexibility, a lower cost of entry, and a tool you can keep using long after you graduate, Blender is a strong starting point.',
      'Maya remains the standard in many larger animation and VFX studios, particularly for character animation and rigging. If your goal is to work at a bigger studio, or a pipeline that already uses Maya, learning it directly can save you a retraining step later in your career.',
      'At Creative Corvus, our Master Diploma in 2D and 3D Animation is offered in both a Blender track and a Maya track, covering the same fundamentals, modeling, texturing, lighting, rigging and simulation, so you can pick the software path that matches where you want your career to go.',
      'Whichever tool you start with, the underlying skills, understanding of form, timing, weight and light, transfer between software. A strong animator who knows Blender can pick up Maya on the job, and the reverse is just as true.',
    ],
  },
  {
    slug: 'why-storyboarding-still-matters',
    title: 'Why Storyboarding Still Matters in an AI Assisted Design World',
    excerpt:
      'AI tools can generate images in seconds, but the planning skill behind a strong storyboard is more valuable than ever.',
    date: '2025-11-03',
    readTime: '5 min read',
    category: 'Storytelling',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=1200&auto=format&fit=crop',
    content: [
      'It is tempting to think that storyboarding, the practice of sketching out a sequence before animating or filming it, is losing relevance now that AI tools can generate finished looking images almost instantly. In our experience teaching the Certificate in Sketching and Storyboard, the opposite is true.',
      'A storyboard is not really about drawing skill. It is a planning tool. It forces a designer or animator to think through pacing, camera angles, and the emotional beat of a sequence before spending hours on production. AI tools can help fill in a frame quickly, but they cannot make the creative decisions about what story to tell and how to tell it.',
      'Students who go through our storyboard and sketching training consistently produce stronger final projects across every other course, from 3D animation to visual effects, because they have already learned to plan a sequence before executing it.',
      'If anything, AI assisted production makes storyboarding more important, not less. When the tools can execute faster, the value shifts to the person who can direct that execution with a clear plan.',
    ],
  },
  {
    slug: 'building-a-vfx-showreel-that-gets-noticed',
    title: 'Building a VFX Showreel That Actually Gets Noticed',
    excerpt:
      'Studio recruiters spend seconds on a reel before deciding whether to keep watching. Here is what makes them stay.',
    date: '2025-09-18',
    readTime: '7 min read',
    category: 'Visual Effects',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1200&auto=format&fit=crop',
    content: [
      'A visual effects showreel has one job: to make a recruiter or supervisor want to keep watching past the first ten seconds. After mentoring students through our Master Diploma in Visual Effects, a few patterns show up again and again in the reels that actually land interviews.',
      'Lead with your strongest shot, not your favorite one. Recruiters watch dozens of reels in a sitting. If the first shot does not show clean tracking, solid compositing or a convincing effect, many will not watch the rest.',
      'Show breakdowns, not just final shots. A short before and after, or a wireframe pass, tells a recruiter you understand the pipeline, not just the final polish. This matters even more for roto, tracking and compositing focused roles.',
      'Keep it short. Ninety seconds to two minutes of your best work beats five minutes of average work. Quality over quantity is not a cliche in this industry, it is how hiring actually works.',
      'Finally, credit your role clearly if the work was collaborative. Studios want to know exactly what you did, tracking, roto, compositing, or lighting, so be specific in your reel description.',
    ],
  },
  {
    slug: 'ux-ui-portfolio-tips-for-beginners',
    title: 'Five UX UI Portfolio Mistakes We See Beginners Make',
    excerpt:
      'A strong portfolio is often the deciding factor in landing your first design role. Avoid these common missteps.',
    date: '2025-07-22',
    readTime: '5 min read',
    category: 'UX UI Design',
    image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?q=80&w=1200&auto=format&fit=crop',
    content: [
      'Through our Diploma in UX UI Design, we review dozens of beginner portfolios every batch. The same handful of mistakes show up again and again, and fixing them makes an outsized difference in interview callbacks.',
      'Mistake one: showing only final screens with no process. Recruiters want to see wireframes, user research notes and iteration, not just a polished final mockup. The thinking is the actual skill being evaluated.',
      'Mistake two: designing for imaginary problems. A case study built around a real, specific user problem is far more convincing than a generic redesign of a well known app with no clear rationale.',
      'Mistake three: ignoring responsive and accessibility considerations. Showing how a design adapts across screen sizes, and that you have thought about contrast and readability, signals a more complete skill set.',
      'Mistake four: too many projects, not enough depth. Three well explained case studies beat eight shallow ones.',
      'Mistake five: no visible personality. Your portfolio is also a piece of design work in itself. Let your layout and writing voice reflect how you think, not just what tools you used.',
    ],
  },
];

export function getPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug);
}
