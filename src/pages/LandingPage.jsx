import CallButton from "../components/CallButton";
import CallText from "../components/CallText";
import HeadImg from "../images/home/header.svg";
import FeatureCard from "../components/FeatureCard";
import ProfileImg from "../images/home/profile.svg";
import FeatureImg from "../images/home/video.svg";
import React from "react";
import FeatureList from "../components/FeatureList";

export default function LandingPage() {
  return (
    <div className="px-48 pt-40">

      <div className="flex flex-row justify-between items-center gap-x-12">
        <div className="flex flex-col">
          <p className="text-4xl font-bold">
            The right care at
            <br />
            the right time.
          </p>
          <p className="pt-6 text-xl mr-8">
            Our platform empowers peoples with
            clinically-backed digital tools for proactively
            improving mental wellbeing.
          </p>
          <div className="pt-16 flex flex-row gap-x-8">
            <CallButton />
            <CallText />
          </div>
        </div>
        <img className="w-96" src={HeadImg} alt="" />
      </div>
      
      <div className="pt-60 flex flex-row justify-between items-center gap-x-12">
        <div className="flex flex-col">
          <p className="text-4xl font-bold">
            Who we are?
          </p>
          <p className="pt-6 text-xl mr-8">
            GoCure is a platform for helping our user to keep their
            mental health keep healthy and safe through our content
          </p>
        </div>
        <img className="w-96" src={ProfileImg} alt="" />
      </div>

      {/* <div className="pt-60">
        <div className="text-center font-black text-3xl">
          Feature
        </div>
        <div className="pt-12 flex flex-row justify-between items-center gap-x-8">
          <FeatureCard title="Blogs" pic="landing-blogs.svg"/>
          <FeatureCard title="Videos" pic="landing-videos.svg"/>
          <FeatureCard title="Experts" pic="landing-experts.svg"/>
        </div>
      </div> */}


      <div className="py-60 flex flex-row justify-between items-center gap-x-12">
        <div className="flex flex-col justify-between items-center mr-8">
          <div className="font-bold text-4xl">
            Here's our content that you might like
          </div>
          <FeatureList title="Blogs" />
          <FeatureList title="Videos" />
          <FeatureList title="Experts" />
        </div>

        <img className="w-96" src={FeatureImg} alt="" />

      </div>
      
    </div>
  );
}