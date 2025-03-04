import React from 'react'
import Image from 'next/image';
const Story = () => {
    return (
      <div className="">
        <div className="container mx-auto mt-5">
          <h2 className="text-center fw-normal ff-franklin fs-xl m-0">Story</h2>
          <p className="fw-normal max-w-4xl mx-auto custom-description text-center pt-3 m-0">
            Nekozuma which means lightning cats in Japanese (Neko = Cats //
            Inazuma = Lightning) is a collection of 5555 NFTs on the Solana
            blockchain. The story centers around 3 eras of cats living in
            different timelines - past, present, future. In each timeline, there
            are 3 deities that are all powerful and are meant to protect the
            world of Nekos.
          </p>
          <p className="fw-normal max-w-4xl mx-auto text-xs text-center pt-3xl m-0">
            However at every junction in time, there is always a darkness that
            is waiting to overthrow the good. Hence, each timeline has its own
            arch nemesis. This means that there will be a total of 4 godly nekos
            from each timeline making a total of 12 godly nekos that will be
            fully animated.
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <Image
            src="/assets/images/webp/cat-battles.webp"
            alt="cat-battle"
            width={1280}
            height={357}
            className="w-100 mt-5xl max-md-h-xl mx-auto pointer-event-none"
            style={{ maxWidth: "1920px" }}
          />
        </div>
      </div>
    );
}

export default Story