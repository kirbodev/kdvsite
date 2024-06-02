import { Metadata } from "next";
import { ThemeSwitcher } from "@/components/themeSwitcher";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Footer from "@/components/footer";
import "./style.css";
import AudioPlayer from "./audio-player";

export const metadata: Metadata = {
  title: "Reasons to lock in",
  description: "Lock in already buddy",
  keywords: [
    "lockin",
    "studying",
    "study",
    "lock",
    "in",
    "reasons",
    "100 reasons",
  ],
};

export default function PrivacyPage() {
  return (
    <>
      <div className="absolute right-0 top-0 m-2">
        <ThemeSwitcher />
      </div>
      <TracingBeam className="px-6">
        <article className="page sans">
          <header>
            <div className="page-header-icon">
              <span className="icon">✨</span>
            </div>
            <h1 className="page-title">Why you should lock in and study</h1>
          </header>
          <div>
            <AudioPlayer />
            <ul className="[&>li]:py-1">
              <li>Sharpen your critical thinking skills.</li>
              <li>Boost your problem-solving abilities.</li>
              <li>Enhance your memory and focus.</li>
              <li>Learn new information and retain it effectively.</li>
              <li>Develop strong communication and writing skills.</li>
              <li>Unlock your creativity and innovation potential.</li>
              <li>Cultivate a growth mindset that embraces challenges.</li>
              <li>Build a strong foundation for future learning.</li>
              <li>Become a more analytical and insightful thinker.</li>
              <li>Develop research skills to find and evaluate information.</li>
              <li>Achieve higher grades and test scores.</li>
              <li>Gain a deeper understanding of course material.</li>
              <li>Feel more confident and prepared in class.</li>
              <li>Impress teachers and professors with your knowledge.</li>
              <li>Increase your chances of getting into your dream school.</li>
              <li>Earn scholarships and grants to support your education.</li>
              <li>Graduate with a strong academic record.</li>
              <li>Open doors to new career opportunities.</li>
              <li>Qualify for higher-paying jobs and promotions.</li>
              <li>Stay competitive in a demanding job market.</li>
              <li>Develop valuable skills relevant to your chosen field.</li>
              <li>
                Gain an edge over other candidates with a strong knowledge base.
              </li>
              <li>Network with professionals and build connections.</li>
              <li>Become an expert in your field.</li>
              <li>Increase your job satisfaction and career fulfillment.</li>
              <li>Expand your knowledge and understanding of the world.</li>
              <li>Discover new interests and passions.</li>
              <li>
                Challenge yourself intellectually and step outside your comfort
                zone.
              </li>
              <li>Develop self-discipline and time management skills.</li>
              <li>Build confidence in your abilities.</li>
              <li>Become a more well-rounded and informed individual.</li>
              <li>Improve your critical reading and comprehension skills.</li>
              <li>Learn to analyze information objectively.</li>
              <li>Develop strong decision-making skills.</li>
              <li>
                Become a more effective communicator in all areas of life.
              </li>
              <li>Cultivate a love of learning that lasts a lifetime.</li>
              <li>
                Be prepared to learn and adapt in a rapidly changing world.
              </li>
              <li>Stay mentally sharp and engaged as you age.</li>
              <li>Enhance your problem-solving skills in everyday life.</li>
              <li>Learn new things and keep your mind active.</li>
              <li>Be able to contribute meaningfully to conversations.</li>
              <li>
                Gain a greater appreciation for different cultures and
                perspectives.
              </li>
              <li>Unlock a world of information and self-discovery.</li>
              <li>Fuel your curiosity and thirst for knowledge.</li>
              <li>Become a lifelong learner with a growth mindset.</li>
              <li>Connect with classmates and study groups.</li>
              <li>
                Build stronger relationships through shared learning
                experiences.
              </li>
              <li>Impress others with your knowledge and insights.</li>
              <li>Gain the respect of peers and colleagues.</li>
              <li>Be a valuable resource for others seeking information.</li>
              <li>
                Gain a deeper understanding of history and current events.
              </li>
              <li>Develop a more informed perspective on global issues.</li>
              <li>Appreciate the diversity of human thought and experience.</li>
              <li>Learn about different cultures and traditions.</li>
              <li>
                Become a more responsible and engaged citizen of the world.
              </li>
              <li>Reduce stress and anxiety by feeling prepared.</li>
              <li>Boost your self-esteem and confidence.</li>
              <li>Improve your mental focus and concentration.</li>
              <li>Develop a sense of accomplishment and satisfaction.</li>
              <li>Promote positive mental health through active learning.</li>
              <li>Earn more money with a higher level of education.</li>
              <li>Qualify for financial aid and scholarships.</li>
              <li>Increase your earning potential over a lifetime.</li>
              <li>Invest in yourself and your future financial security.</li>
              <li>
                Make better financial decisions based on knowledge and
                understanding.
              </li>
              <li>Live a more fulfilling and enriching life.</li>
              <li>Open doors to new experiences and opportunities.</li>
              <li>Build a stronger foundation for your future.</li>
              <li>Become a more well-rounded and capable individual.</li>
              <li>Unlock your full potential and achieve your dreams.</li>
              <li>
                Understand the science behind healthy habits and nutrition.
              </li>
              <li>
                Learn about exercise physiology to maximize your workouts.
              </li>
              <li>
                Explore the connection between mental health and physical
                well-being.
              </li>
              <li>Develop strategies for maintaining a healthy lifestyle.</li>
              <li>
                Gain knowledge to prevent injuries and promote physical fitness.
              </li>
              <li>Learn from historical and contemporary innovators.</li>
              <li>
                Develop critical thinking skills to approach problems
                creatively.
              </li>
              <li>Explore diverse fields of study to spark new ideas.</li>
              <li>Foster a growth mindset that embraces experimentation.</li>
              <li>Unlock your creative potential and find unique solutions.</li>
              <li>
                Study leadership styles and effective communication techniques.
              </li>
              <li>
                Gain knowledge on complex issues to inform your decisions.
              </li>
              <li>
                Develop critical thinking skills to analyze situations and
                inspire others.
              </li>
              <li>
                Learn about different cultures and perspectives to lead
                inclusively.
              </li>
              <li>
                Equip yourself with the knowledge to make a positive impact as a
                leader.
              </li>
              <li>Understand social and economic issues to find solutions.</li>
              <li>
                Develop skills to advocate for positive change in your
                community.
              </li>
              <li>Learn from inspiring social leaders and activists.</li>
              <li>
                Prepare yourself to contribute meaningfully to social justice
                causes.
              </li>
              <li>Empower yourself and make a difference in the world.</li>
              <li>
                Become a master of time management and conquer procrastination.
              </li>
              <li>
                Learn to learn effectively and develop strong study habits.
              </li>
              <li>
                Spark meaningful conversations and impress others with your
                knowledge.
              </li>
              <li>
                Turn your passion into a career by acquiring relevant skills and
                knowledge.
              </li>
              <li>
                Travel the world with confidence, understanding different
                cultures and customs.
              </li>
              <li>
                Gain the ability to think critically about the information you
                consume daily.
              </li>
              <li>
                Develop strong research skills to become an independent and
                resourceful learner.
              </li>
              <li>
                Boost your confidence in tackling new challenges and unfamiliar
                concepts.
              </li>
              <li>
                Become a more effective problem-solver in all areas of your
                life.
              </li>
              <li>
                Unlock your potential for innovation and contribute to positive
                change.
              </li>
              <li>
                Gain the ability to articulate complex ideas clearly and
                concisely.
              </li>
              <li>
                Develop a deeper appreciation for the beauty and complexity of
                the world around you.
              </li>
              <li>
                Fuel your intellectual curiosity and become a lifelong learner.
              </li>
              <li>
                Build resilience and a growth mindset to overcome academic
                challenges.
              </li>
              <li>
                Connect the dots between different disciplines and see the
                bigger picture.
              </li>
              <li>
                Challenge your assumptions and biases to develop a more open
                mind.
              </li>
              <li>
                Learn to think critically about your own thinking and
                decision-making processes.
              </li>
              <li>
                Develop strong communication skills to build stronger
                relationships.
              </li>
              <li>
                Become a more informed and engaged citizen who can participate
                in meaningful discourse.
              </li>
              <li>
                Prepare yourself for a future filled with constant change and
                innovation.
              </li>
            </ul>
          </div>
        </article>
      </TracingBeam>
      <Footer />
    </>
  );
}
