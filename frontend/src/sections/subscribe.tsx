import { Button } from "@/components/ui/button";
import { RippleEffect } from "@/components/ui/ripple";

export default function Subscribe() {
  return (
    <section className="section subscribe-section services-section relative">
      <div className="section-container overlay">
        <div className="subscribe-content h-svh flex flex-col justify-center items-center">
          {/* <div className="h-1/3"></div> */}
          <div className="subscribe h-1/3 border-none relative overlay w-full place-content-center">
            <div className="p-(--pad-margin-n) max-w-7xl mx-auto relative z-10 flex flex-col sm:flex-row justify-between  gap-(--pad-margin-n)">
              <div className="text-center sm:text-left">
                <h2 className="gradient-text txt-heading">Subscribe for Updates</h2>
                <p className="txt-normal">Join our thousands of subscribers and get access to the latest postings, freebies, property announcements and much more!</p>
              </div>
              <div className="btn-container place-content-center self-center">
                <Button
                  variant={"primary"}
                  className={"relative btn-primary btn-hero bg-transparent"}
                >
                  <RippleEffect />
                  Subscribe now
                </Button>
              </div>
            </div>
          </div>
          {/* <div className="w-full h-1/3 about-section"></div> */}
        </div>
      </div>
    </section>
  )
}