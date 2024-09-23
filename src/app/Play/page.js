"use client";

import Footer from "../components/footer";
import PageHeader from "../components/pageHeader";

export default function Play() {
  return (
    <div>
      <main>
        <PageHeader title="PLAY" />
        <div className="text-focus flex justify-start items-center ml-12">
          FOOTBALL
        </div>
        <div className="text-para flex ml-12 w-1/2">
          Football has been a core part of my college life. Memories from the football ground with my friends will go a long way. Football united us through sweat and tears, and we had a lot of fun playing together. I have played in various tournaments and leagues in college. Football instilled in me the importance of teamwork and leadership.
          Hala Madrid!🏆
        </div>
      </main>
      <Footer />
    </div>
  );
}
