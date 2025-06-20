import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import TypeWriter from '../components/TypeWriter';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import conspiracy from '../assets/conspiracy.svg';
import bulletin from '../assets/bulletin.svg';

function Dashboard() {

  const [ref1, inView1] = useInView({ threshold: 0.5 });
  const [ref2, inView2] = useInView({ threshold: 0.5 });
  const [ref3, inView3] = useInView({ threshold: 0.5 });
  const [footerRef, footerInView] = useInView({
    threshold: 0,
    rootMargin: '0px 0px 100px 0px',
  });

  const [section2Started, setSection2Started] = useState(false);
  const [section3Started, setSection3Started] = useState(false);
  const [isFooterInView, setIsFooterInView] = useState(false);

  useEffect(() => {
  if (inView2 && !inView1 && !section2Started) {
    setSection2Started(true);
  }
  }, [inView2, inView1, section2Started]);

  useEffect(() => {
    if (inView3 && !inView2 && !section3Started) {
      setSection3Started(true);
    }
  }, [inView3, inView2, section3Started]);

  useEffect(() => {
    setIsFooterInView(footerInView);
  }, [footerInView]);

  return (
    <div className="p-8">
      <div className="relative min-h-screen">

        {/* Scrollable content */}
        <div className="space-y-32 pt-16 pb-0 text-[#423E37]">
          <section ref={ref1} className="min-h-[70vh] flex justify-center pt-[23vh]">
            <div>
              <TypeWriter
                text="Welcome to Re:Hop —"
                className="text-xl sm:text-3xl md:text-4xl font-bold mb-2"
                delay={1.5}
                start={true}
              />
              <TypeWriter
                text="Where side quests and new pals"
                className="text-base sm:text-xl md:text-2xl"
                delay={(("Welcome to Re:Hop —".length + 1) * 0.05) + 2}
                start={true}
              />
              <TypeWriter
                text="are a hop away..."
                className="text-base sm:text-xl md:text-2xl"
                delay={(("Welcome to Re:Hop —Where side quests and new pals".length + 1) * 0.05) + 2}
                start={true}
              />
            </div>
          </section>

          <section
            ref={ref2}
            className="min-h-[60vh] flex items-center justify-center px-4"
          >
            <div className="flex flex-col-reverse md:flex-row md:gap-0 items-center w-full max-w-6xl">
              
              <div className="w-full md:w-1/2 flex justify-center">
                <img src={bulletin} alt="Bulletin" className="xs:h-[33vh] md:h-[43vh] max-h-[650px] aspect-square" />
              </div>

              
              <div className="w-full md:w-1/2  text-center">
                <TypeWriter
                  text="Side Quest Bulletin Board"
                  className="text-xl sm:text-2xl lg:text-4xl font-bold mb-2"
                  delay={0}
                  start={section2Started}
                />
                <TypeWriter
                  text="Build bonds of friendship through"
                  className="xs:text-sm sm:text-base md:text-xl lg:text-2xl"
                  delay={(("Side Quest Bulletin Board".length + 1) * 0.05) + 1}
                  start={section2Started}
                />
                <TypeWriter
                  text="challenges and exciting adventures!"
                  className="xs:text-sm sm:text-base md:text-xl lg:text-2xl"
                  delay={(("Side Quest Bulletin BoardGrow closer to your community through".length + 1) * 0.05) + 1}
                  start={section2Started}
                />
              </div>
            </div>
          </section>

          <section 
            ref={ref3} 
            className="min-h-[60vh] flex items-center justify-center px-4"
          >
            <div className="flex flex-col md:flex-row gap-0 items-center w-full max-w-6xl">
              <div className="w-full md:w-1/2  text-center">
                <TypeWriter
                  text="Community Affinity Chart"
                  className="text-xl sm:text-2xl lg:text-4xl font-bold mb-2"
                  delay={0}
                  start={section3Started}
                />
                <TypeWriter
                  text="Every quest leaves a trace."
                  className="xs:text-sm sm:text-base md:text-xl lg:text-2xl"
                  delay={(("Side Quest Bulletin Board".length + 1) * 0.05) + 1}
                  start={section3Started}
                />
                <TypeWriter
                  text="Map your legacy..."
                  className="xs:text-sm sm:text-base md:text-xl lg:text-2xl"
                  delay={(("Side Quest Bulletin BoardEvery quest leaves a trace.".length + 1) * 0.05) + 1}
                  start={section3Started}
                />
                <TypeWriter
                  text="one connection at a time."
                  className="xs:text-sm sm:text-base md:text-xl lg:text-2xl"
                  delay={(("Community Affinity ChartEvery quest leaves a trace. Map your legacy...".length + 1) * 0.05) + 1}
                  start={section3Started}
                />
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <img src={conspiracy} alt="Conspiracy" className="xs:h-[40vh] md:h-[50vh] max-h-[700px] aspect-square" />
              </div>
            </div>
          </section>

          <div className="min-h-[62vh] py-12">
            <button className={`${isFooterInView ? 'block' : 'hidden'} mx-auto rounded-lg bg-[#423E37] border-b-4 border-white text-white px-6 py-3 text-2xl font-semibold shadow-lg hover:bg-[#5a534b] transition-all duration-300`}>
              SIGN UP
            </button>
          </div>
          <div ref={footerRef} className="h-[1px]"></div>
        
          <div
            className={`fixed left-1/2 -translate-x-1/2 z-50 w-full
              transition-all duration-500
              ${isFooterInView ? 'bottom-0' : '-bottom-[20vh]'}`}
          >
            <div className="w-full flex justify-center">
              <div className="aspect-square h-[43vh] min-h-[200px] max-h-[650px]">
                <DotLottieReact
                  src="/assets/frog-idle.lottie"
                  loop
                  autoplay
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
            <section className="h-[20vh] bg-[#423E37] text-[#EFEFEF] border-t-4 border-white py-12 px-4 text-center w-full">
            </section>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;