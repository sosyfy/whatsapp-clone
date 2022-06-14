import React from 'react'

function AboutPage() {
  return (
    <div className='px-10 sm:px-12 py-20 '>
      <h1 className='text-black text-2xl text-start font-bold'>About WhatsApp
</h1>
<div className="grid gap-3">
<h1 className='text-black text-2xl text-start font-bold'>Our App
</h1>
<p className=" text-start text-lg">
More than 2 billion people in over 180 countries use WhatsApp1 to stay in touch with friends and family, anytime and anywhere. WhatsApp is free2 and offers simple, secure, reliable messaging and calling, available on phones all over the world.
</p>
<p className="py-2 text-lg text-start">
1 And yes, the name WhatsApp is a pun on the phrase What's Up.
</p>
<p className="text-lg -mt-3 text-start">
2 Data charges may apply.
</p>
</div>
<div className="grid gap-3 pt-6">
<h1 className='text-black text-2xl text-start font-bold'>Our Mission

</h1>
<p className="leading-6 text-start text-lg">
WhatsApp started as an alternative to SMS. Our product now supports sending and receiving a variety of media: text, photos, videos, documents, and location, as well as voice calls. Some of your most personal moments are shared with WhatsApp, which is why we built end-to-end encryption into our app. Behind every product decision is our desire to let people communicate anywhere in the world without barriers.
</p>
</div>
<div className="grid gap-3 pt-6">
<h1 className='text-black text-2xl text-start font-bold'>Our Team


</h1>
<p className="leading-6 text-start text-lg">
WhatsApp was founded by Jan Koum and Brian Acton who had previously spent 20 years combined at Yahoo. WhatsApp joined Facebook in 2014, but continues to operate as a separate app with a laser focus on building a messaging service that works fast and reliably anywhere in the world.
</p>
</div>
    </div>
  )
}

export default AboutPage