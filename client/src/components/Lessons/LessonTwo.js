import React from "react";
import Piano from "../Piano";

export default function LessonTwo() {
  return (
    <div className='relative flex justify-center min-h-screen pt-12 lg:64 px-8'>
      <div>
        <h1 className='text-6xl font-bold styleMe leading-none lg:leading-snug home-name'>Types of Rests: Whole Rest, Half Rest, and Quarter Rest</h1>
				<br></br>
        <h3 className='text-3xl font-bold text-center'>Congrats on finishing Lesson One!</h3>
				<br></br>
        <p className='text-xl text-center'>
          As we noted in the introduction, Rhythm is made up of both SOUNDS and
          SILENCES. In this lesson, we will discuss the SILENCES, or RESTS.
          RESTS may look a lot different than their opposite, however,
          functionally they work the same. There are many kinds of RESTS, but in
          this lesson we will focus on WHOLE RESTS, HALF RESTS, and QUARTER
          RESTS.
        </p>
				<br></br>
        <h2 className='text-4xl font-bold styleMe leading-none'>Whole Rests</h2>
				<img className='w-48 h-auto' src='https://suzanstroud.com/wp-content/uploads/2019/02/whole-rest.jpg' alt='A Whole Rest'></img>
				<br></br>
        <p className='text-xl text-center'>
          A WHOLE REST is very similar to a WHOLE NOTE and has the same value,
          however, it indicates a lack of sound for FOUR beats. Therefore, a
          WHOLE REST will last a WHOLE measure in common time.
        </p>
        <p className='text-xl text-center'>
          EXERCISE: Four this exercise, we are going to sing the word "ONE" for
          a WHOLE NOTE while tapping our feet for four beats and then NOT SING
          for FOUR more beats. As you may notice, this will take up EIGHT beats
          which is TWO measures in common time.
        </p>
				<br></br>
        <h2 className='text-4xl font-bold styleMe leading-none'>Half Rests</h2>
				<img className='w-48 h-auto' src='https://suzanstroud.com/wp-content/uploads/2019/02/half-rest.jpg' alt='A Half Rest'></img>
				<br></br>
        <p className='text-xl text-center'>
          Once again, similar to a HALF NOTE, but lacking sound; A HALF REST is
          silence for TWO beats. Therefore, we can assume two HALF RESTS can
          take up an entire measure. OR, additionally, a HALF REST and a HALF
          NOTE can take up the same measure together.
        </p>
        <p className='text-xl text-center'>
          EXERCISE: For this exercise, we will once again count for EIGHT beats,
          or TWO measures. However we will use a alternating series of HALF
          NOTES and HALF RESTS. Therefore we will sing "ONE" for two beats, REST
          for TWO beats, and because the next half note will be on the next
          measure, we will sing "ONE" again for TWO beats followed by another
          REST for TWO beats.
        </p>
				<br></br>
        <h2 className='text-4xl font-bold styleMe leading-none'>Quarter Rests</h2>
				<img className='w-48 h-auto' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL0AAAELCAMAAAC77XfeAAAAgVBMVEX///8AAAB2dnb8/PzU1NTl5eXt7e3FxcX5+fnq6ur29vakpKSwsLCZmZnIyMhAQEAnJyfe3t4uLi6KioqCgoJqampaWlq2trZiYmLa2tqSkpIhISFRUVEzMzM5OTm8vLxISEgSEhJVVVWYmJh6enobGxuOjo4jIyNERERnZ2cTExN7M273AAAGfElEQVR4nO2di1bbMAyGY3q/U6ADygbtCmPw/g+4XhPHd6Vd9escf0/wndRRZFlWiyKTyWQymUwmk8n8R4bcAmcx4RY4i+mC2+As1Ijb4ByWasqtcAYdpTrcDmcwU2vBgWes1Cu3Q3P6Sqknbonm3Gz177klGtPe2qsxt0Vjbnf6PW6Lpox29mrOrdGQ7t5edbk9GvK0t//oc3s0o3d4+FLD/sFe/eD2aMb9Uf+GW6QR86O9WnKbNOLupC/yqzU52Yv8anVKe/XM7dKA10p/wO1Cp1o6Ejcr88pe4lfrRdP/yS1D5kGzl/fV6un24vZaw5q9uBrVrK7/xu1D46FuL6zE9mjYyyqxPZv2StRXy7K/5TaisLb0V9xKBFaWvRJ0NPHDthf01Vo47OXstW5c9mLCvtteSoXQYy8k7Pvsf3GLJeGzl1Fi89qLiJt+e/XI7RYnYC8g8ITs8QNP0H7GbRcjaK/eufUiOPOcCuw3tx+WB98pjmL2a27DEOuYvfriVvRjlRQc4NZ4PhPsFeqJbsqjx83XXuLqOzB3WuM0ecwSTytRHvPFXSbbA678brK8UtyuNpEMB9u+TZDHs7+LO5f85pY1iaZnOmgd75RXFm+D+0SRf+G2NejFlTXQDkJJ8qrFrVvHPOcM84dbt459UCjp0SftSUrAwuWGJA+2Le/EjXXAGu5e48YaYEkCKUVA67YjrhuwD9Usbqyx4tatM4kb6+R1czlo8WbFrVuHuG6w7qQQ1w1YrwUt3oAVcYjrBuvAkLhuwKp/tHgD1t5FzG+wtiS0Eghayf4nSR6smT3tjKcEa92kHzTsAdtP0UogYBfOiaEe6zvlatcNAJYXT0nyd9y6Brcke7BLe28kebBQX/wi2YO9srSaK1jVsryAnQa3rQkpwwHbDdLs0U6o3HczfOC1ABLW/Qe3q01qF44CXPWkFI1b1cU6VR7scPBA8sLHqhgfSe1lASuenUi0B9sPnkgsAXJrehjGzRVwr31SCxpYAapiHndHq+HoJGRqYGUQnYSgCVZJqBGviSBf0YhvD7kNg8SyfOwJLrFMEzJDq3gP2wOm9jqRD26b2y9C+OAKMjvWCZYzueWiBEvJ3HJxAs3H39xucQKnnoC1EAv/i/vJrZaCv0uE2ywF/xcX9TJhDe8WF/1rdcC3dpDT+4qBx37FLZaGL+5gtdB58WyzZCwdX7IpZT6m58IP2qUqH+6OEbRjZi/u82ewc2Yv7rC54dZKxd26gFsLNHDu0YUEzcLTW8otlYwz6st5+M7CrJiV7zyFFhN23G+ulJhfOPM12MMrm/63rY9cxjdwbHOBD4AsHOU1GRvcA3bgQWsmDWIPcgGv5Nex46acT1bhqM2K2absscI+WCdyBDPfFPXiFi1zGo2cXHNHy3z6QkpTR8yNLmiTl4vu428raoJ2edUZTEc3H5Y6dNAfztvT8ebPYhUaHQWXKrfa4+XXbB1Q1oHK1tr3tJvNQM3sw/ShehUP3NZHiFeyT0CsnUHiFEwLhLVDG89Vg3/tnCHPv3aItzsNuKcu0QZcWfBuVJpEyhqczcnEi/wuGPsXaJf0nDDmyufLMxZIaBdrfXDts74uYs91iH4Rea4mX+IoRj8sn1zi1JYAHGEz/HcaFDiGBdLG/QRhKE9dTp6htJl2R0znafLYnncGg878uTfeLGpd19eukNCS478j+7ytP52UV52unTFQpodsvB/U/tuxvn/lQQvpu6rIOzkc7dfQdaN+apbznrCkp7sf4Krn6ImjohIfaWdx3f+LSnr2s/QH2vm65gS4FHtaJJlfsekx4a0FPmSI3+tccSsG8HV7l6yRbwxE/zYMu3U3MnEJbUqRQXhAHfrfjIaDDneFNUZwtCF+D1SoIoL9yu4IRHywsfZO/FFHwlm4P9XhNkvCdxoOdxLuxBc0YSee1PEMEOHWSsSdqmGPftBwFjPBRz9ouNYO3kA9H66SmqCWRUdVSlLTnN0iwm1Ewhp6xS1Ew+zVhW2Zc2Oka5LWfWHdMEHfV5nU46asPuMtw7VmLyZTKBnq7WnCFv6WvnaGuOSWaYCW8nCrNKG6YiLuvd1RtRshV2C9lLfDZOxsTcoaj6AsWaN7PAKXdbGn4lggFHSPucZxryvoKm2N533aIGVqi0VrH/nBT08CjCWvnaKYb7O2q57dX5gHYTeBDdpCE4YTC7C/ziPSk7dPyWQymUwmk8lk/gFmxj7T+YJ/4wAAAABJRU5ErkJggg==' alt='A Quarter Rest'></img>
				<br></br>
        <p className='text-xl text-center'>
          A QUARTER REST, like a QUARTER NOTE, is one QUARTER of a WHOLE REST.
          Therefore, in common time, a QUARTER REST gets ONE beat.
        </p>
        <p className='text-xl text-center'>
          EXERCISE: For this exercise, we will once again utilize the piano at
          the bottom of the page. With the "z" and "c" keys on your keyboard,
          which correlate to the notes "C" and "E", we will play alternating
          QUARTER NOTES and QUARTER RESTS. Ex. "C, Rest, E, Rest" for TWO
          measures. All the while, you should be counting
          "ONE...TWO...THREE...FOUR..." while tapping your foot to the beat.
        </p>
      </div>
      <div>
        <Piano />
      </div>
    </div>
  );
}
