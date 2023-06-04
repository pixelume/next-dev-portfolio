import { Doctorly, Hyperboliq, Intro1, Intro2, EyechartOnline, Freelance } from '@/components/pages';
import { Education } from '@/components/pages/Education';

export default function Home() {
  return (
    <>
      <Intro1 />
      <Intro2 />
      <Doctorly />
      <Hyperboliq />
      <EyechartOnline />
      <Freelance />
      <Education />
    </>
  );
}
